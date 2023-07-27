export const appendingDraggableDragOverHandler = (draggingElement, container, event) => {
  const replaceElement = getReplaceElement(container, { x: event.clientX, y: event.clientY })
  arrangeElements(replaceElement, draggingElement, container)
}

const arrangeElements = (replaceElement, draggingElement, container) => {
  let isMovingUp = true
  let shouldResetStyleElements = []
  if (replaceElement) {
    if (replaceElement.parentNode === draggingElement.parentNode) {
      const draggedIndex = Array.from(container.children).indexOf(draggingElement)
      const replaceIndex = Array.from(container.children).indexOf(replaceElement)
      isMovingUp = replaceIndex < draggedIndex

      const offset = replaceElement.offsetTop - draggingElement.offsetTop

      draggingElement.style.transform = `translateY(${offset}px)`
      draggingElement.style.transition = 'transform 0.3s ease-in-out'
      draggingElement.style.zIndex = '999'

      replaceElement.style.transform = `translateY(${-offset}px)`
      replaceElement.style.transition = 'transform 0.3s ease-in-out'
      replaceElement.style.zIndex = '998'
    } else {
      const offset = replaceElement.offsetHeight
      let processingElement = replaceElement
      do {
        if (processingElement !== replaceElement) {
          shouldResetStyleElements.push(processingElement)
        }
        processingElement.style.transform = `translateY(${offset}px)`
        processingElement.style.transition = 'transform 0.3s ease-in-out'
        processingElement = processingElement.nextElementSibling
      }
      while (processingElement)
    }
    shouldResetStyleElements = [...shouldResetStyleElements, replaceElement, draggingElement]
    setTimeout(() => {
      if (isMovingUp) {
        replaceElement.before(draggingElement)
      } else {
        replaceElement.after(draggingElement)
      }
      shouldResetStyleElements.forEach(el => {
        el.style = ''
      })
    }, 300);
  } else if (draggingElement.parentNode !== container) {
    container.appendChild(draggingElement)
  }
}

const getReplaceElement = (container, point) => {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")]

  return draggableElements.reduce((el, child) => {
    const box = child.getBoundingClientRect()
    if (box.contains(point.x, point.y)) {
      return child
    }
    return el
  }, null)
}

DOMRect.prototype.contains = function (x, y) {
  return this.x <= x && x <= this.x + this.width &&
    this.y <= y && y <= this.y + this.height;
}