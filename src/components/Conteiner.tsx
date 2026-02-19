import styles from './Conteiner.module.css';
import React from 'react';


interface ConteinerProps {
  children: React.ReactNode;
}

export function Conteiner({ children }: ConteinerProps) {
  return (
    <div className={styles.container}>
        <div className={styles.content}> {children}</div>
    </div>
  );
}