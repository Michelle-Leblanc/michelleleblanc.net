import styles from "./page.module.scss";
import { GlobalFooter, GlobalHeader } from './ui/navigation';
import { HomeTop } from './ui/home-top';
import { Section } from './ui/section';

export default function Home() {
  return (
    <div>
      <GlobalHeader />
      <main className={styles.page}>
        <div className={styles['page-body']}>
          <section>
            <HomeTop />
          </section>
          <section>
            <Section />
          </section>
          <section>
            <Section />
          </section>
          <section>
            <Section />
          </section>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
