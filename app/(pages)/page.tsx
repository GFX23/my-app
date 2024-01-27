import { NextPage } from "next";
import Link from 'next/link';
import React from 'react';

const Home: NextPage = () => (
  <>
    <header>
      <h1>Your Name</h1>
      <p>Front End Developer</p>
    </header>

    <section id="about-me">
      <h2>About Me</h2>
      <p>
        Hi, Im [Your Name], a passionate front-end developer with three years of experience. My expertise lies in Next.js, Postgres, React, and TypeScript. I enjoy building interactive and user-friendly web applications that deliver a seamless user experience.
      </p>

      <p>
        Throughout my journey, Ive honed my skills in creating efficient and scalable web solutions. I thrive in dynamic environments and love staying up-to-date with the latest trends and technologies in the ever-evolving world of web development.
      </p>

      <p>
        When Im not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming new ideas for my next project.
      </p>
    </section>

    <footer>
      <p>Contact me at: your.email@example.com</p>

    </footer>
  </>
);

export default Home;
