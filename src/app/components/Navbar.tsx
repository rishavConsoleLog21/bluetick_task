"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./CSS/Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <span>Bluetick✔️</span>
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? styles.hamburgerOpen : ""}></span>
        </div>
        <ul
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <li className={isActive("/") ? styles.active : ""}>
            <Link href="/">
              <span onClick={() => setIsMobileMenuOpen(false)}>Home</span>
            </Link>
          </li>
          <li className={isActive("/users") ? styles.active : ""}>
            <Link href="/users">
              <span onClick={() => setIsMobileMenuOpen(false)}>Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
