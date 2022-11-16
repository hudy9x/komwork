import { HiOutlineCalendar, HiOutlineExclamationCircle, HiOutlineClock, HiOutlineEllipsisHorizontal, HiOutlineXMark, HiOutlinePlusCircle } from "react-icons/hi2"
import { useState } from "react"
import dayjs from "dayjs"
import FormAttachment from "../components/FormAttachment"
import ProjectTaskLine from "./ProjectTaskLine"
import Comments from "./Comments"

export default function TaskDetail() {
  const [task] = useState({
    id: "1",
    title: "Design system",
    dueDate: "2022/11/15",
    assignee: ["u1"]
  })

  const dueDate = dayjs(task.dueDate).format("MMM DD")
  const tasks = [
        { id: 1, title: "Basic UX Research", dueDate: "2022/11/15", assignee: ["u1"] },
        { id: 2, title: "Wireframe - Paper", dueDate: "2022/11/15", assignee: ["u2"] },
      ]

  return <div className="task-detail w-1/2 flex-shrink-0 h-screen border-l border-gray-200">
    <div className="task-header flex items-center justify-between px-8 border-b border-gray-200">
      <div className="task-header-left flex items-center gap-2">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600"
        />
        <h2 className="heading mb-0">Design system</h2>
      </div>

      <div className="task-header-right space-x-3">
        <button><HiOutlineEllipsisHorizontal className="w-5 h-5"/></button>
        <button><HiOutlineXMark className="h-5 w-5"/></button>
      </div>
    </div>

    <div className="task-info">
      <div className="info-item">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="avatar avatar-sm" />
      </div>
      <div className="info-item">
        <HiOutlineCalendar/>
        <span>{dueDate}</span>
      </div>
      <div className="info-item">
        <HiOutlineExclamationCircle/>
        <span>Priority</span>
      </div>
      <div className="info-item">
        <HiOutlineClock/>
        <span>In Progress</span>
      </div>
    </div>


    <div className="task-content-wrapper overflow-x-hidden overflow-y-auto" style={{height: "calc(100vh - 77px - 37px)"}}>

    <div className="task-desc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iusto eveniet, iure a ipsa non cum at veritatis voluptates laboriosam dignissimos, magnam, laudantium ab mollitia et facere sunt odit culpa?
    </div>
    <FormAttachment className="mt-4"/>

    <div className="mx-8 mt-6 subtasks task-group">
      <div className="task-line">
          <HiOutlinePlusCircle className="-ml-0.5 w-5 h-5" />
          <input type="text" placeholder="Add sub task" className="outline-none w-full focus:outline-none focus:border-transparent focus:shadow-transparent"/>
      </div>
      {tasks.map(task => {
        return <ProjectTaskLine key={task.id} task={task} />
      })}
    </div>

      <Comments />
    </div>

  </div>
}
