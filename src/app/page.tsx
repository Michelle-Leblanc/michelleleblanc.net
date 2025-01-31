import styles from "./page.module.css";
import { GlobalFooter, GlobalHeader } from './ui/navigation';

export default function Home() {
  return (
    <div>
      <GlobalHeader />
      <main className={styles.page}>
        <h1>Under Construction</h1>
      </main>
      <GlobalFooter />
    </div>
  );
}
