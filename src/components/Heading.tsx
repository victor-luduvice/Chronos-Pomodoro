import styles from './Heading.module.css';

interface HeadingProps {
  text: string;
}

export function Heading({ text }: HeadingProps) {
    return <h1 className={styles.heading}>{text}</h1>;
}