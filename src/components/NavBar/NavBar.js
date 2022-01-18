import styles from './NavBar.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li><a href="/"><span className={clsx("fa fa-bars", styles.navbarIcon)} /></a></li>
    </ul>
      <ul className={styles.navbarList}>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.none} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.none} to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.none} to="/about">About</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;