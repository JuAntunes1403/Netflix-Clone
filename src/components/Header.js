import React from "react";
import "./Header.css";

export default () => {
  window.addEventListener("scroll", (event) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let color = "transparent";

    winScroll >= 1 ? (color = "#000") : (color = "transparent");
    document.getElementById("header-wrapper").style.backgroundColor = color;
  });
  return (
    <header className="header--wrapper" id="header-wrapper">
      {/* <a href="/"> */}
      <div>
        <img
          className="header--logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
        />
      </div>
      {/* </a> */}
      <div>
        <img
          className="header--profile"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </header>
  );
};
