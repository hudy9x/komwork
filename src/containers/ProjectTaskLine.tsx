import { HiOutlineUserCircle } from "react-icons/hi2";
import Datepicker from "../components/Datepicker";
import UserSelect from "../components/UserSelect";

interface Props {
  task: {
    id: number;
    title: string;
    dueDate: string;
    assignee: string[];
  };
}

export default function ProjectTaskLine({ task }: Props) {

  return (
    <div className="task-line" key={task.id}>
      <div className="task-left">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600"
        />
        <span>{task.title}</span>
      </div>
      <div className="task-right">
        <Datepicker value="2022/11/18" />
        {task.assignee.length ? (
          <div>
            {task.assignee.map((assignee) => {
              return <UserSelect />;
            })}
          </div>
        ) : (
          <HiOutlineUserCircle className="task-line-icon" />
        )}
      </div>
    </div>
  );
}
