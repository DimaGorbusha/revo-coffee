import Advertisment from "./components/Advertisment";
import Description from "./components/Description";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <div className="flex">
        <Advertisment/>
        <Menu/>
      </div>
      <div>
        <Description/>
      </div>
    </div>
  );
}

export default App;
