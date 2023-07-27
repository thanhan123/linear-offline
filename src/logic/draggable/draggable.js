export class DraggableManager {
  constructor(draggableElement, dragoverHanlder) {
    const draggableContainers = draggableElement.querySelectorAll(".draggable-container")
    const draggables = draggableElement.querySelectorAll(".draggable")

    draggables.forEach(item => {
      item.addEventListener("dragstart", (event) => {
        item.classList.add("dragging")
      })
      item.addEventListener("dragend", (event) => {
        item.classList.remove("dragging")
      })
      item.setAttribute("draggable", "true")
    })

    this.dragoverHanlder = dragoverHanlder

    draggableContainers.forEach(item => {
      item.addEventListener("dragover", (event) => {
        event.preventDefault()
        const draggingElement = draggableElement.querySelector(".dragging")
        this.dragoverHanlder(draggingElement, item, event)
      })
    })
  }
}