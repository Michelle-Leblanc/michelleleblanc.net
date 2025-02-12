'use client';
import styles from './home-top.module.scss';

interface props {
  onSectionClick: (sectionId: "about" | "projects" | "skills" | "connect") => void;
}

export function HomeTop({ onSectionClick }: props) {
  const buttonData = [
    {
      label: 'About',
      id: 'about',
    },
    {
      label: 'Projects',
      id: 'projects',
    },
    {
      label: 'Skills',
      id: 'skills',
    },
    {
      label: 'Let\'s Connect',
      id: 'connect',
    },
  ] as const;

  return (
    <>
      <div className={styles['line-top']} />
      <div className={styles['page-top']}>
        <div className={styles['page-width']}>
          <h1 className={styles['name']}>
            Michelle LeBlanc
          </h1>
          <h2 className={styles['titles']}>
            Web Development Director /<br />
            Senior Frontend Engineer
          </h2>
          <div className={styles['button-container']}>
            {buttonData.map((buttonData, index) => (
              <button key={index} className={styles.nav} onClick={() => onSectionClick(buttonData.id)}>
                {buttonData.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['line-bottom']} />
    </>
  );
}
