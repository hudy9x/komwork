import { Popover } from "@headlessui/react"
import { useState } from "react"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


export default function UserSelect() {
  const [users] = useState([
    {id: "u12", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DaiNH"},
    {id: "u13", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
    {id: "u14", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
    {id: "u15", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
    {id: "u16", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
    {id: "u17", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
    {id: "u18", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", name: "DongNV"},
  ]);
  return <Popover className="user-select relative">
      <Popover.Button>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="avatar avatar-sm"
         />
      </Popover.Button>

      <Popover.Panel className="absolute translate-y-1 z-10">
        <div className="popover-container">
          <div className="popover-header">
            <HiOutlineMagnifyingGlass className="w-4 h-4"/>
            <input type="text" placeholder="Search ..." />
          </div>
          <div className="popover-content">
            {users.map(user => {
              return <div key={user.id} className="user-item">
              <img src={user.url} alt="" className="avatar avatar-sm" />
              <span>{user.name}</span>
            </div>
            })} 
          </div>
        </div>
      </Popover.Panel>
  </Popover>
}
