import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from './styles.module.css';
import { useState } from "react";

type AvalibleThemes = 'dark' | 'light';

export function Menu(){
   const[theme, setTheme] = useState('dark');

   function handleThemeChange(){
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
   }  

  return(
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#"
      arial-label="Home"
      title="Home"
      >
         <HouseIcon/>
      </a>

      <a className={styles.menuLink} href="#"
      arial-label="History"
      title="History"
      >
         <HistoryIcon/>
      </a>

      <a className={styles.menuLink} href="#"
      arial-label="Settings"
      title="Settings"
      >
         <SettingsIcon/>
      </a>

      <a className={styles.menuLink} href="#"
      arial-label="Theme"
      title="Theme"
      >
         <SunIcon/>
      </a>
    </nav>
  );
}