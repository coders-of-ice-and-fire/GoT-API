import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createHouseCard from "./components/House";

function App() {
  const header = Header();

  const houseCard = createHouseCard();

  const main = createElement("main", {
    children: [houseCard],
  });

  const container = createElement("div", {
    children: [header, main],
  });

  return container;
}

export default App;
