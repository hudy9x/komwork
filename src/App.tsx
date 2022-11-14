import { HiChevronDown, HiOutlineInbox, HiOutlineCalendar, HiOutlineBell, HiOutlineMagnifyingGlass } from 'react-icons/hi2'

function App() {
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

  return (
    <div id="wrapper" className="flex h-screen">
      <aside id="sidebar" className="w-[250px] bg-gray-50">
        <section className="user-section flex items-center">
          <img className="rounded-full inline-block h-8 w-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <h3>Melisa Pinto</h3>
          <HiChevronDown />
        </section>

        <nav className="menu">
          {menu1.map((item, index) => {
            return <div className="menu-item flex items-center justify-between mx-2 p-2" key={index}>
              <div className="menu-item-left flex items-center gap-2">
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
        </nav>

      </aside>
      <main id="main-content"></main>
    </div>
  );
}

export default App;
