'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gitHub from './public/github-mark-white.png';
import linkedIn from './public/linkedin-white.png';

import styles from "./page.module.scss";
import { GlobalFooter, GlobalHeader } from './ui/navigation';
import { HomeTop } from './ui/home-top';
import { Section } from './ui/section';

export default function Home() { 
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    connect: useRef<HTMLElement>(null),
  };

  const handleScrollToSection = (sectionId: keyof typeof sectionRefs) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <GlobalHeader />
      <main>
        <div>
          <section className={styles['page-top']}>
            <HomeTop onSectionClick={handleScrollToSection} />
          </section>
          <section ref={sectionRefs.about}>
            <Section title={'About'}>
              <p className={styles['intro']}>
                Hello! Thanks for stopping by to learn more about me and what I love to do. I possess a technical foundation in frontend development, UI/UX design, SEO, and email marketing, as well as leadership and communication skills. I thrive in fast-paced environments where I am comfortable wearing multiple hats. I have successfully led cross-functional teams of engineers throughout the entire software development lifecycle, from concept to launch. Let&apos;s discuss more of how I can help your visions become a reality!
              </p>
            </Section>
          </section>
          <section ref={sectionRefs.projects}>
            <Section title={'Projects'}>
              <p>Coming Soon</p>
            </Section>
          </section>
          <section ref={sectionRefs.skills}>
            <Section title={'Skills'}>
              <p>Coming Soon</p>
            </Section>
          </section>
          <section ref={sectionRefs.connect}>
            <Section title={'Let\'s Connect'}>
              <div className={styles['connect']}>
                <div>
                  <a
                  href="https://github.com/Michelle-Leblanc"
                  title="Michelle's Github Profile"
                  target="_blank">
                    <Image
                      src={gitHub}
                      width={50}
                      height={50}
                      alt="Michelle's Github Profile"
                    />
                  </a>
                </div>
                
                <div>
                  <a
                    href="https://www.linkedin.com/in/hellomichelleleblanc/"
                    title="Michelle's LinkedIn Profile"
                    target="_blank">
                    <Image
                      src={linkedIn}
                      width={50}
                      height={50}
                      alt="Michelle's LinkedIn Profile"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="mailto:hello@michelleleblanc.net"
                    title="Email Michelle"
                    target="_blank">
                    <span className={styles['at']}>@</span>
                  </a>
                </div>
              </div>
            </Section>
          </section>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
