import "./header.css";
import headerSrc from "../assets/got-header2.png";
import { createElement } from "../utils/elements";

function Header() {
  const logo = createElement("img", {
    src: headerSrc,
    alt: "Header",
  });

  const header = createElement("header", {
    className: "header",
    children: [logo],
  });
  return header;
}

export default Header;
