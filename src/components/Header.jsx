import React from "react";

export default function Header() {
  return (
    <nav className="#43a047 green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
        Pixel Bazaar
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Ck2444/pickle_bazaar" target="_blank" rel="noreferrer">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
