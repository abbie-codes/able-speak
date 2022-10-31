import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p className="attribute">Icons by <a href="https://icons8.com/" target={"_blank"}>Icons8</a></p>
    </footer>
  );
}

export default Footer;