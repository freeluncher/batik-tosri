import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logoImg from "../../public/logo-tosri-secondary.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Batik Tosri Logo" />
        <span>Batik Tosri</span>
      </div>
      
      <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <a href="#home" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#product" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          Catalog
        </a>
        <a href="#gallery" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          Pre-Order
        </a>
        <a href="#contact" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <a href="#order" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
          Blog
        </a>
      </div>
      
      <div 
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={handleHamburgerClick}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
