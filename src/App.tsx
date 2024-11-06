import NavBar from "./@page/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app-container ">
      {/* Sticky Navbar */}
      <div className="navbar-bg sticky top-0 z-10">
        <div className="max-w-[1320px] mx-auto">
          <NavBar />
        </div>
      </div>

      <div className="h-[649px] max-w-[1320px] mx-auto">hkfosdjfoisjdfoijsdoifjjjjjjjjjjjjjjjj</div>
    </div>
  );
}

export default App;
