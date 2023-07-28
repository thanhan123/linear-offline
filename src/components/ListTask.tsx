import type { Task } from "../models/task";
import { TaskItem } from "./TaskItem"
import "./ListTask.css"

interface ListTaskProps {
  tasks: Task[];
  title: string;
}

export const ListTask: React.FC<ListTaskProps> = ({ tasks, title }) => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
    // You can add your custom logic here when the button is clicked
  };

  return (
    <div>
      <div className="list-title">
        <label>{title}</label>
      </div>
      <div className="list-content-outer">
        <div className="list-content draggable-container">
          {tasks.map((task, index) => (
            <TaskItem key={index} title={task.title} onButtonClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </div>
  )
};