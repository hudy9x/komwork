import ProjectArea from "./containers/ProjectArea";
import Sidebar from "./containers/Sidebar";

function App() {

  return (
    <div id="wrapper" className="flex h-screen">
      <Sidebar />
      <main id="main-content" className="w-screen">
        <ProjectArea/>
      </main>
    </div>
  );
}

export default App;
