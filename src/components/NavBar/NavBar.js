import styles from './NavBar.module.scss';
import clsx from 'clsx';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li><a href="/"><span className={clsx("fa fa-bars", styles.navbarIcon)} /></a></li>
    </ul>
      <ul className={styles.navbarList}>
        <li><a href="/">Home</a></li>
        <li><a href="/favorite">Favorite</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
}

export default NavBar;