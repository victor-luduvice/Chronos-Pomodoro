// @ts-nocheck
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from './styles.module.css';
import { useState, type MouseEvent , useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
   console.log('theme mudou', theme, Date.now());
     document.documentElement.setAttribute('data-theme', theme);

     return () => {
         console.log('cleanup', theme, Date.now());
      }
   }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        arial-label="Home"
        title="Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        arial-label="History"
        title="History"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        arial-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        arial-label="Theme"
        title="Theme"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}