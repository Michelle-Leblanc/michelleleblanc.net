'use client';
import { useRef } from 'react';
import styles from './section.module.scss';

export function Section({ ...props }) {
  const sectionRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles['page-section']} ref={sectionRef}>
      <div className={styles['page-width']}>
        <h2 className={styles['section-title']}>
          {props.title}
        </h2>
        {props.children}
      </div>
    </div>
  );
}
