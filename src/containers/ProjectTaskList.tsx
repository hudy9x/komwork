import { HiOutlinePlus } from "react-icons/hi2"
import ProjectTaskLine from "./ProjectTaskLine"

export default function ProjectTaskList() {
  const groups = [
    {
      title: "Todo", color: "black", tasks: [
        { id: 1, title: "Basic UX Research", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 2, title: "Wireframe - Paper", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 3, title: "Rough sketches", dueDate: "", assignee: [] },
      ]
    },
    {
      title: "In progress", color: "blue", tasks: [
        { id: 4, title: "Google integration page", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 5, title: "Design system", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 6, title: "Invoice template design", dueDate: "2022/11/15", assignee: [] },
        { id: 7, title: "Auto layout Comnponents", dueDate: "", assignee: [] },
      ]
    },
    {
      title: "Done", color: "green", tasks: [
        { id: 8, title: "Review UI Widgets for Separate version", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 9, title: "Rating Implements - Frappe technolofies", dueDate: "2022/11/15", assignee: ["u2"] },
        { id: 10, title: "Invoice category page", dueDate: "2022/11/15", assignee: [] },
      ]
    }
  ]
  return <div className="project-task-list" style={{height: 'calc(100vh - 77px - 37px)'}}>

    <div className="task-view-group">
      {groups.map((group, index) => {
        return <div key={index} className="task-group-section">

          <div className="task-group-heading">
            <div className="task-left">
              <div className="font-bold text-base text-black" style={{color: group.color}}>{group.title}</div>
            </div>
            <div className="task-right">
              <div className="task-columns task-heading-columns">
                <div className="task-col">Due date</div>
                <div className="task-col">Status</div>
                <div className="task-col">Assignee</div>
                <div className="task-col">Priority</div>
              </div>
            </div>
          </div>
          {/* <div className="section-title">{group.title}</div> */}
          <div className="task-group">
            {group.tasks.map(task => {
              return <ProjectTaskLine key={task.id} task={task} />
            })}
            <div className="task-line task-line-add">
              <div className="task-left">
                <HiOutlinePlus className="w-4 h-4" />
                <span>Add item</span>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>

  </div>
}
