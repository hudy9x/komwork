import Sidebar from "./containers/Sidebar";

function App() {

  return (
    <div id="wrapper" className="flex h-screen">
      <Sidebar />
      <main id="main-content"></main>
    </div>
  );
}

export default App;
