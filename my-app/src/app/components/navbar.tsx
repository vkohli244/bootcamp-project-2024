import React from "react";
import navbarStyle from "./navbar.module.css"; // Import navbar styles
import headerStyle from "./header.module.css"; // Import header styles
import Link from "next/link";

export default function Navbar() {
  return (
    <header className ={headerStyle.header}>
      {/* Use headerStyle here */}
      <nav className={navbarStyle.navbar}>
      
        {/* Use navbarStyle for navbar */}
        <div className={navbarStyle.navContainer}>
          <ul className={navbarStyle.navlist}>
            <li className={navbarStyle.navli}>
              <Link className={navbarStyle.navLink} href="/"> {/* have to change this*/}
                Home
              </Link>
            </li>
            <li className={navbarStyle.navli}>
              <Link className={navbarStyle.navLink} href="/Blogs">
                Blog
              </Link>
            </li>
            <li className={navbarStyle.navli}>
              <Link className={navbarStyle.navLink} href="/Resume">
                resume
              </Link>
            </li>
            <li className={navbarStyle.navli}>
              <Link className={navbarStyle.navLink} href="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
