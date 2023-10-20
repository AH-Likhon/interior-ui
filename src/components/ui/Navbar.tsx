"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Island_Moments } from "next/font/google";

const Navbar = () => {
  const router = useRouter();
  // @ts-ignore
  const { role } = getUserInfo();
  const [isLogout, setIsLogout] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // if (!role) {
  //   router.push("/login");
  // }
  const handleDashboard = () => {
    if (!role) {
      router.push("/login");
    } else {
      // const lowerCaseRole = role.toLowerCase();
      // console.log(lowerCaseRole);
      router.push(`/${role.toLowerCase()}`);
    }
  };

  useEffect(() => {}, [role, isLogout]);

  const handleLogout = () => {
    removeUserInfo("accessToken");
    setIsLogout(true);
  };
  console.log(role, "checking role");
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
          style={{ zIndex: "5" }}
          className={`${styles.navigationMenu} ${
            isNavExpanded ? styles.expanded : ""
          }`}
        >
          <ul>
            {!role && (
              <li style={{ color: "black " }}>
                <Link href="/login">Login</Link>
              </li>
            )}
            {role && (
              <li
                style={{ cursor: "pointer", color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </li>
            )}
            <li
              style={{ cursor: "pointer", color: "black" }}
              onClick={handleDashboard}
            >
              Dashboard
            </li>
            {/* <li style={{ color: "black " }}>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
