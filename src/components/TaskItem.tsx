import "./TaskItem.css"

interface TaskItemProps {
  title: string;
  onButtonClick: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, onButtonClick }) => {
  return (
    <div className="task-item draggable">
      <h3>{title}</h3>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
};