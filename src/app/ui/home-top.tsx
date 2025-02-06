'use client';
import styles from './home-top.module.scss';
import { ButtonNav } from './button-nav';

export function HomeTop() {
  const buttonData = [
    {
      label: 'About',
      onClick: () => console.log('About clicked'),
    },
    {
      label: 'Projects',
      onClick: () => console.log('btn 2 clicked'),
    },
    {
      label: 'Skills',
      onClick: () => console.log('Btn 3 clicked'),
    },
    {
      label: 'Let\'s Connect',
      onClick: () => console.log('Btn 3 clicked'),
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
              <ButtonNav key={index} label={buttonData.label} onClick={buttonData.onClick} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles['line-2']} />
    </>
  );
}
