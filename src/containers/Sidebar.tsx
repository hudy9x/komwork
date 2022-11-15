import { HiChevronDown, HiOutlineInbox, HiOutlineCalendar, HiOutlineBell, HiOutlineMagnifyingGlass, HiOutlinePlus } from 'react-icons/hi2'

const avatarUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

function Sidebar() {
  const menu1 = [
    { icon: <HiOutlineInbox />, title: "My works", badge: "9" },
    { icon: <HiOutlineCalendar />, title: "Today", badge: "2" },
    { icon: <HiOutlineBell />, title: "Updates" },
    { icon: <HiOutlineMagnifyingGlass />, title: "Search", },
  ]

  const menu2 = [
    { icon: "⚡", title: "Products" },
    { icon: "⚽", title: "Frappe Drive", badge: "⭐" },
    { icon: "📞", title: "Support", badge: "4" },
    { icon: "🚘", title: "Delivery Team", },
  ]


  const menu3 = [
    { icon: <img className="avatar avatar-sm" src={avatarUrl} alt="" />, title: "Products" },
    { icon: <img className="avatar avatar-sm" src={avatarUrl} alt="" />, title: "Frappe Drive", badge: "⭐" },
    { icon: <img className="avatar avatar-sm" src={avatarUrl} alt="" />, title: "Support", badge: "4" },
    { icon: <img className="avatar avatar-sm" src={avatarUrl} alt="" />, title: "Delivery Team", },
  ]

  return (
    <aside id="sidebar">
      <section className="user-section ">
        <img className="avatar" src={avatarUrl} alt="" />
        <h3>Melisa Pinto</h3>
        <HiChevronDown />
      </section>

      <nav className="menu">
        {menu1.map((item, index) => {
          return <div className="menu-item " key={index}>
            <div className="menu-item-left">
              <div className="menu-item-icon">{item.icon}</div>
              <span className="menu-title">{item.title}</span>
            </div>
            {item.badge ? <span className="menu-badge">{item.badge}</span> : null}
          </div>
        })}

      </nav>


      <nav className="menu">
        <h2 className="menu-section-title">projects</h2>
        {menu2.map((item, index) => {
          return <div className="menu-item flex items-center justify-between mx-2 p-2" key={index}>
            <div className="menu-item-left flex items-center gap-2">
              <div className="menu-item-icon">{item.icon}</div>
              <span className="menu-title">{item.title}</span>
            </div>
            {item.badge ? <span className="menu-badge">{item.badge}</span> : null}
          </div>
        })}

        <div className="menu-item menu-item-add">
          <div className="menu-item-left">
            <div className="menu-item-icon"><HiOutlinePlus /></div>
            <span className="menu-title">Add Project</span>
          </div>
        </div>
      </nav>


      <nav className="menu">
        <h2 className="menu-section-title">Members</h2>
        {menu3.map((item, index) => {
          return <div className="menu-item flex items-center justify-between mx-2 p-2" key={index}>
            <div className="menu-item-left flex items-center gap-2">
              <div className="menu-item-icon">{item.icon}</div>
              <span className="menu-title">{item.title}</span>
            </div>
            {item.badge ? <span className="menu-badge">{item.badge}</span> : null}
          </div>
        })}

        <div className="menu-item menu-item-add">
          <div className="menu-item-left">
            <div className="menu-item-icon"><HiOutlinePlus /></div>
            <span className="menu-title">Invite member</span>
          </div>
        </div>
      </nav>

    </aside>
  );
}

export default Sidebar;

