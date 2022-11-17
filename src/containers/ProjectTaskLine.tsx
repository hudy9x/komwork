import dayjs from "dayjs";
import { HiOutlineCalendar, HiOutlineUserCircle } from "react-icons/hi2";

interface Props {
  task: {
    id: number;
    title: string;
    dueDate: string;
    assignee: string[];
  };
}

export default function ProjectTaskLine({ task }: Props) {
  let date;
  if (task.dueDate) {
    date = dayjs(task.dueDate).format("MMM DD");
  }

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
        <div className="text-center text-xs">
          {date ? date : <HiOutlineCalendar className="task-line-icon" />}
        </div>
        {task.assignee.length ? (
          <div>
            {task.assignee.map((assignee) => {
              return (
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="avatar avatar-sm"
                />
              );
            })}
          </div>
        ) : (
          <HiOutlineUserCircle className="task-line-icon" />
        )}
      </div>
    </div>
  );
}
