import { TimerIcon } from 'lucide-react';
import styles from './styles.module.scss';

export function Logo() {
    return <div  className= {styles.logo}> 
      <a className='logoLink' href="#">
        <TimerIcon/>
        <span>CHONOS</span>
      </a>
    </div>;

}