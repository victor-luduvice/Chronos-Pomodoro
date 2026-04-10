import { TimerIcon } from 'lucide-react';
import styles from './styles.module.scss';

export function Logo() {
  return (
    <div className ={styles.Logo}>
      <a className= {styles.logoLink}href="#">
        <TimerIcon/>
        <span>Chonos</span>
      </a>
    </div>
  );

}