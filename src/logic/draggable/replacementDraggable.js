export const replacementDragOverHandler = (draggingElement, container, event) => {
  const replaceElement = getReplaceElement(container, {x: event.clientX, y: event.clientY})
  if (replaceElement) {
    swap(draggingElement, replaceElement)
  } 
}

const swap = (nodeA, nodeB) => {
  const parentA = nodeA.parentNode;
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

  // Move `nodeA` to before the `nodeB`
  nodeB.parentNode.insertBefore(nodeA, nodeB);

  // Move `nodeB` to before the sibling of `nodeA`
  parentA.insertBefore(nodeB, siblingA);
};

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