import Advertisment from "./components/Advertisment";
import Description from "./components/Description";
import Menu from "./components/Menu";
import CoffeeSets from "./components/CoffeeSets";
import GiftSet from "./components/GiftSet";
import Combo from "./components/Combo";

function App() {
  return (
    <div className="bg-[#F9FBFF]">
      <div className="flex" id="coffee">
        <Advertisment/>
        <Menu/>
      </div>
      <div id="descr">
        <Description/>
      </div>
      <div id='coffeesets'>
        <CoffeeSets/>
      </div>
      <div id='giftsets'>
        <GiftSet/>
      </div>
      <div id='combo'>
        <Combo/>
      </div>
    </div>
  );
}

export default App;
