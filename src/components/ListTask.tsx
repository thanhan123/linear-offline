import type { Task } from "../models/task";
import { TaskItem } from "./TaskItem"
import "./ListTask.css"

interface ListTaskProps {
  tasks: Task[];
}

export const ListTask: React.FC<ListTaskProps> = ({tasks}) => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
    // You can add your custom logic here when the button is clicked
  };

  return (
    <div className="list-container draggable-container">
      {tasks.map((task, index) => (
        <TaskItem key={index} title={task.title} onButtonClick={handleButtonClick} />
      ))}
    </div>
  )
};