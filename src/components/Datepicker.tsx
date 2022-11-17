import { Popover } from "@headlessui/react"
import { HiOutlineMagnifyingGlass, HiOutlineCalendar } from "react-icons/hi2";

export default function Datepicker() {
  return <Popover className="datepicker relative">
    <Popover.Button>
      <HiOutlineCalendar className="task-line-icon" />
    </Popover.Button>

    <Popover.Panel className="absolute translate-y-1 z-10">
      <div className="popover-container">
        <div className="popover-content">

        </div>
      </div>
    </Popover.Panel>
  </Popover>
}
