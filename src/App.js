import Advertisment from "./components/Advertisment";
import Description from "./components/Description";
import Menu from "./components/Menu";
import CoffeeSets from "./components/CoffeeSets";
import GiftSet from "./components/GiftSet";
import Combo from "./components/Combo";

function App() {
  return (
    <div className="bg-[#F9FBFF]">
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
      <div>
        <GiftSet/>
      </div>
      <div>
        <Combo/>
      </div>
    </div>
  );
}

export default App;
