import styles from './section.module.scss';

export function Section() {
  return (
    <div className={styles['page-section']}>
      <div className={styles['page-width']}>
        <h2 className={styles['section-title']}>
          About
        </h2>
        
        <p className={styles['intro']}>
          Hello! Thanks for stopping by to learn more about me and what I love to do. I possess a technical foundation in frontend development, UI/UX design, SEO, and email marketing, as well as leadership and communication skills. I thrive in fast-paced environments where I am comfortable wearing multiple hats. I have successfully led cross-functional teams of engineers throughout the entire software development lifecycle, from concept to launch. Let&apos;s discuss more of how I can help your visions become a reality!
        </p>
      </div>
    </div>
  );
}
