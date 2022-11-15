import { HiOutlinePlus } from "react-icons/hi2"
import ProjectTaskLine from "./ProjectTaskLine"

export default function ProjectTaskList() {
  const groups = [
    {
      title: "Todo", tasks: [
        { id: 1, title: "Basic UX Research", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 2, title: "Wireframe - Paper", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 3, title: "Rough sketches", dueDate: "", assignee: [] },
      ]
    },
    {
      title: "In progress", tasks: [
        { id: 4, title: "Google integration page", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 5, title: "Design system", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 6, title: "Invoice template design", dueDate: "2022/11/15", assignee: [] },
        { id: 7, title: "Auto layout Comnponents", dueDate: "", assignee: [] },
      ]
    },
    {
      title: "Done", tasks: [
        { id: 8, title: "Review UI Widgets for Separate version", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 9, title: "Rating Implements - Frappe technolofies", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 10, title: "Invoice category page", dueDate: "2022/11/15", assignee: [] },
      ]
    }
  ]
  return <div className="project-task-list">

    <div className="task-view-group">
      {groups.map((group, index) => {
        return <div key={index} className="task-group-section">
          <div className="section-title">{group.title}</div>
          <div className="task-group">
            {group.tasks.map(task => {
              return <ProjectTaskLine key={task.id} task={task} />
            })}
            <div className="task-line task-line-add">
              <div className="task-left">
                <HiOutlinePlus className="pl-1 mr-1" />
                <span>Add item</span>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>

  </div>
}
