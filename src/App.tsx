import { ListTask } from './components/ListTask'
import { useEffect, useRef } from 'react';
import { DraggableManager } from "./logic/draggable/draggable"
import { appendingDraggableDragOverHandler } from "./logic/draggable/appendingDraggable"
import './logic/draggable/draggable.css'
import './App.css'

function App() {
  const componentRef = useRef(null);

  useEffect(() => {
    const domElement = componentRef.current;
    new DraggableManager(domElement, appendingDraggableDragOverHandler)
  }, []);

  const tasks1 = [
    {
      title: "Title 3"
    },
    {
      title: "Title 4"
    },
    {
      title: "Title 5"
    },
  ]
  const tasks2 = [
    {
      title: "Title 1"
    },
    {
      title: "Title 2"
    },
    {
      title: "Title 3"
    },
  ]
  const tasks3 = [
    {
      title: "Title 7"
    },
    {
      title: "Title 8"
    },
    {
      title: "Title 9"
    },
  ]
  
  return (
    <div ref={componentRef} className='main-container'>
      <ListTask tasks={tasks1}></ListTask>
      <ListTask tasks={tasks2}></ListTask>
      <ListTask tasks={tasks3}></ListTask>
    </div>
  )
}

export default App
