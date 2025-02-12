'use client';
import styles from './home-top.module.scss';

interface props {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onSkillsClick: () => void;
  onConnectClick: () => void;
}

export function HomeTop({ onAboutClick, onProjectsClick, onSkillsClick, onConnectClick }: props) {
  const buttonData = [
    {
      label: 'About',
      onClick: onAboutClick,
    },
    {
      label: 'Projects',
      onClick: onProjectsClick,
    },
    {
      label: 'Skills',
      onClick: onSkillsClick,
    },
    {
      label: 'Let\'s Connect',
      onClick: onConnectClick,
    },
  ];

  return (
    <>
      <div className={styles['line-1']} />
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
              <button key={index} className={styles.nav} onClick={buttonData.onClick}>
                {buttonData.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['line-2']} />
    </>
  );
}
