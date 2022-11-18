import Popover from "./Popover"
import { HiOutlineCalendar, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

interface Props {
  value: string
}

export default function Datepicker({ value }: Props) {

  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth(); // 0 - is Jan, 1 - is Feb and so on
  const year = currentDate.getFullYear();
  const lastDateInCurrentMonth = new Date(year, month + 1, 0).getDate();
  let lastDateInPrevMonth = new Date(year, month, 0).getDate();
  let dayOfFirstDateInMonth = new Date(year, month, 1).getDay(); // 0 - 6, Sunday to Saturday
  let dayOfLastDateInMonth = new Date(year, month, lastDateInCurrentMonth).getDay(); 

  const allDateInMonth = new Array(lastDateInCurrentMonth)
    .fill(1).map((v, i) => ({
    d: i + 1,
    m: month,
    y: year,
    isCurrentDate: (i + 1) === date,
    isCurrentMonth: true,
  }));

  while (dayOfFirstDateInMonth) {
    allDateInMonth.unshift({
      d: lastDateInPrevMonth,
      m: month - 1, // FIX: month 
      y: year, // FIX
      isCurrentDate: false,
      isCurrentMonth: false,
    })
    lastDateInPrevMonth -= 1;
    dayOfFirstDateInMonth -= 1;
  }

  let start = 1;
  while (dayOfLastDateInMonth < 6) {
    allDateInMonth.push({
      d: start,
      m: month + 1,
      y: year,
      isCurrentDate: false,
      isCurrentMonth: false,
    });
    start +=1;
    dayOfLastDateInMonth += 1;
  }

  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  console.log(allDateInMonth)

  return <Popover className="datepicker relative inline-flex">
    <Popover.Button>
      <HiOutlineCalendar className="task-line-icon" />
    </Popover.Button>

    <Popover.Panel className="absolute translate-y-1 z-10">
      <div className="popover-container">
        <div className="popover-content">
          <div className="calendar-header flex items-center justify-between px-4 py-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium">November</h2>
              <h2 className="text-lg font-medium">2022</h2>
            </div>
              <div className="flex items-center gap-3">
              <HiOutlineChevronLeft className="w-7 h-7 p-1.5 cursor-pointer rounded-md hover:bg-gray-100"/>
              <HiOutlineChevronRight className="w-7 h-7 p-1.5 cursor-pointer rounded-md hover:bg-gray-100"/>
            </div>
          </div>
          <div className="calendar-content">
            <div className="calendar-dow grid grid-cols-7">
              {dow.map(day => {
                return <div className="calendar-day">{day}</div>
              })}
            </div>
            <div className="calendar-dom grid grid-cols-7">
              {allDateInMonth.map(date => {
                const currentMonth = date.isCurrentMonth ? 'current-month' : ''
                const currentDate = date.isCurrentDate ? 'current-date' : '';
                return <div className={`calendar-date ${currentMonth} ${currentDate}`}>{date.d}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Popover>
}
