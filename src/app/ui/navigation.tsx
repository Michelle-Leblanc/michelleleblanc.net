import { getCurrentYear } from 'app/utils/datetime';
import Link from 'next/link'
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
      <div className={styles.logo}>
        <Link href={'/'}>ML</Link>
      </div>
    </header>
  );
}
