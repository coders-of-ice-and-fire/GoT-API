import "./house.css";
import { createElement } from "../utils/elements";

function createHouseCard({ name, quote, region }) {
  const houseTitle = createElement("h3", {
    className: "house__title",
    innerText: name,
  });

  const houseQuote = createElement("blockquote", {
    className: "house__quote",
    innerText: quote,
  });

  const houseInfo = createElement("div", {
    className: "house__info",
    children: [
      createElement("p", {
        innerText: "Region: " + region,
      }),
    ],
  });
  const houseContainer = createElement("article", {
    className: "house__container",
    children: [houseTitle, houseQuote, houseInfo],
  });

  return houseContainer;
}

export default createHouseCard;
