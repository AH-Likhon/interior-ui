"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.brandName}>
          Interior Design
        </Link>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className={styles.hamburger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${styles.navigationMenu} ${
            isNavExpanded ? styles.expanded : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
