import { useState, useEffect } from 'react';
import styles from './menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition > 0);
  }, [scrollPosition]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ''}`}>
        <h1>NEOMENTORA</h1>
      </div>

      <div className={styles.hamburguer} onClick={toggleMenu}>
        <div
          className={`${styles.line} ${menuOpen ? styles.active : ''} ${
            isScrolled ? styles.scrolled : ''
          }`}
        ></div>
        <div
          className={`${styles.line} ${menuOpen ? styles.active : ''} ${
            isScrolled ? styles.scrolled : ''
          }`}
        ></div>
        <div
          className={`${styles.line} ${menuOpen ? styles.active : ''} ${
            isScrolled ? styles.scrolled : ''
          }`}
        ></div>
      </div>

      <nav
        className={`${styles['nav-bar']} ${menuOpen ? styles.active : ''} ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <ul>
          <li>
            <MenuLink to="/" onClick={closeMenu}>
              Home
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/login" onClick={closeMenu}>
              Login
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/jovens" onClick={closeMenu}>
              Jovens
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/canditate-se" onClick={closeMenu}>
              Candidate-se
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/contato" onClick={closeMenu}>
              Contato
            </MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
