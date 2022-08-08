import Advertisment from "./components/Advertisment";
import Description from "./components/Description";
import Menu from "./components/Menu";
import CoffeeSets from "./components/CoffeeSets";

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
      <div>
        <CoffeeSets/>
      </div>
    </div>
  );
}

export default App;
