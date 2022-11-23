import Popover from "./Popover"
import { useState } from "react"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


export default function UserSelect() {
  const [users] = useState([
    { id: "u12", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DaiNH", email: "dainh@gmail.com" },
    { id: "u13", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV", email: "dongnv@gmail.com" },
    { id: "u14", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "ManhDK", email: "manhdk@gmail.com" },
    { id: "u15", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DaoNQ", email: "daonq@gmail.com" },
    { id: "u16", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DuyTQ", email: "duytq@gmail.com" },
    { id: "u17", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "HoangBN", email: "hoangbn@gmail.com" },
    { id: "u18", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "KhaiVD", email: "khaivd@gmail.com" },
  ]);
  return <Popover className="user-select relative">
    <Popover.Button>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        className="avatar avatar-sm"
      />
    </Popover.Button>

    <Popover.Panel className="right-0 translate-y-1 min-w-[290px]">
      <div className="popover-container">
        <div className="popover-header">
          <HiOutlineMagnifyingGlass className="w-4 h-4" />
          <input type="text" placeholder="Search ..." className="outline-none border-transparent text-sm focus:outline-none focus:border-transparent focus:shadow-transparent focus:ring-transparent py-0 pl-0" />
        </div>
        <div className="popover-content">
          {users.map(user => {
            return <div key={user.id} className="user-item">
              <img src={user.url} alt="" className="avatar avatar-sm" />
              <span className="text-gray-800 font-medium">{user.name}</span>
              <span className="truncate text-gray-400">{user.email}</span>
            </div>
          })}
        </div>
      </div>
    </Popover.Panel>
  </Popover>
}
