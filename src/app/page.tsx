'use client';
import { useRef } from 'react';
import styles from "./page.module.scss";
import { GlobalFooter, GlobalHeader } from './ui/navigation';
import { HomeTop } from './ui/home-top';
import { Section } from './ui/section';

export default function Home() {
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const connectRef = useRef<HTMLInputElement>(null);

  function handleScrollToAbout() {
    aboutRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToProjects() {
    projectRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSkills() {
    skillsRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToConnect() {
    connectRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <div>
      <GlobalHeader />
      <main>
        <div className={styles['page-body']}>
          <section>
            <HomeTop
              onAboutClick={handleScrollToAbout}
              onProjectsClick={handleScrollToProjects}
              onSkillsClick={handleScrollToSkills}
              onConnectClick={handleScrollToConnect}
            />
          </section>
          <section ref={aboutRef}>
            <Section title={'About'}>
              <p className={styles['intro']}>
                Hello! Thanks for stopping by to learn more about me and what I love to do. I possess a technical foundation in frontend development, UI/UX design, SEO, and email marketing, as well as leadership and communication skills. I thrive in fast-paced environments where I am comfortable wearing multiple hats. I have successfully led cross-functional teams of engineers throughout the entire software development lifecycle, from concept to launch. Let&apos;s discuss more of how I can help your visions become a reality!
              </p>
            </Section>
          </section>
          <section ref={projectRef}>
            <Section title={'Projects'}>
              <p>Coming Soon</p>
            </Section>
          </section>
          <section ref={skillsRef}>
            <Section title={'Skills'}>
              <p>Coming Soon</p>
            </Section>
          </section>
          <section ref={connectRef}>
            <Section title={'Let\'s Connect'}>
              <p>Coming Soon</p>
            </Section>
          </section>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
