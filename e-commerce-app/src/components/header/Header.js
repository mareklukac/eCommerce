import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <nav className={styles.topNavbar}>
      <ul className={styles.leftNav}>
        <span></span>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <ul className={styles.rightNav}>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
