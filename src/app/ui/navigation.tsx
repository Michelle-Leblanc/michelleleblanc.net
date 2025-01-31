import { getCurrentYear } from 'app/lib/util';
import styles from './navigation.module.scss';

export function GlobalFooter() {
  const currentYear = getCurrentYear();

  return (
    <footer className={styles.footer}>
      Created by Michelle LeBlanc, {currentYear}
    </footer>
  );
}

export function GlobalHeader() {
  return (
    <header className={styles.header}>
      ML
    </header>
  );
}