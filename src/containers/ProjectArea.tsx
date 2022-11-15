import { HiMagnifyingGlass, HiOutlineAdjustmentsVertical, HiOutlineEllipsisHorizontal, HiOutlineCube, HiOutlineUsers } from 'react-icons/hi2'
import ProjectTaskList from "./ProjectTaskList"

export default function ProjectArea() {
  const projectName = "⚽ Frappe Drive ⭐";
  const menus = ["Overview", "Tasks", "Activity", "Discussion", "Attachments", "Settings"]

  return <div id="project">
    <div className="project-header">
      <h2 className="heading">{projectName}</h2>
      <div className="project-menus">
        {menus.map((menu, index) => {
          return <div className="project-menu-item" key={index}>{menu}</div>
        })}
      </div>
    </div>
    <div className="project-actions">
      <div className="project-search">
        <HiMagnifyingGlass />
        <input type="text" placeholder="Search tasks" />
      </div>

      <div className="project-action-advanced">
        <button className="btn btn-sm">
          <HiOutlineAdjustmentsVertical className="btn-icon" />
          <span>Filter</span>
        </button>
        <button className="btn btn-sm">
          <HiOutlineCube className="btn-icon" />
          <span>Group by</span>
        </button>
        <button className="btn btn-sm">
          <HiOutlineUsers className="btn-icon" />
          <span>Assignees</span>
        </button>
        <button className="btn btn-sm">
          <HiOutlineEllipsisHorizontal className="btn-icon" />
        </button>
      </div>

    </div>
    <ProjectTaskList/>
  </div>
}
