import ProjectArea from "./containers/ProjectArea";
import Sidebar from "./containers/Sidebar";
import TaskDetail from "./containers/TaskDetail";

function App() {

  return (
    <div id="wrapper" className="flex h-screen">
      <Sidebar />
      <main id="main-content" className="w-screen">
        <ProjectArea/>
        <TaskDetail />
      </main>
    </div>
  );
}

export default App;
