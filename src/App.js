import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createHouseCard from "./components/House";
import { getAllHouses } from "./utils/api";
import Search from "./components/Search";

function App() {
  const header = Header();

  const Houses = createElement("div");

  const main = createElement("main", {
    children: [Houses],
  });
  async function getHouses(name) {
    const allHouses = await getAllHouses(name);
    const newHouses = allHouses.map((house) =>
      createHouseCard({
        name: house.name,
        quote: house.words,
        region: house.region,
      })
    );
    Houses.append(...newHouses);
  }
  const search = Search({
    onchange: (value) => {
      Houses.innerHTML = "";
      getHouses(value);
    },
  });
  getHouses();

  const container = createElement("div", {
    children: [header, search, main],
  });

  return container;
}

export default App;
