'use client';
import { useState, useEffect, useRef } from 'react';
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
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const originalPlace = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonContainerRef.current) {
        const containerRect = buttonContainerRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;

        if (originalPlace.current === null) {
          originalPlace.current = containerRect.top;
        }

        const shouldStick = scrollTop > originalPlace.current;

        if (shouldStick !== isSticky) {
          setIsSticky(shouldStick);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

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
          <div className={`${styles['button-container']} ${isSticky ? styles['sticky'] : ''}`} ref={buttonContainerRef} />
          <div className={`${styles['button-wrapper']} ${isSticky ? styles['sticky'] : ''}`}>
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
