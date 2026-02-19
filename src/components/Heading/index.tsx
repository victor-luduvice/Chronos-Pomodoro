import styles from './styles.module.css';    // note the singular “module”

export interface HeadingProps {
  children: string;
}

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}