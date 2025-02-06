import styles from './button-nav.module.scss';

interface props {
  label: string;
  onClick: () => void;
}

export function ButtonNav( { label, onClick }: props ) {
  return (
    <button className={styles.nav} onClick={onClick}>
      {label}
    </button>
  );
}
