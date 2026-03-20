import styles from './styles.module.css';   

export interface HeadingProps {
  children: string;
}

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}