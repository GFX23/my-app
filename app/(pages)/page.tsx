import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => (
	<div className="flex flex-col gap-20">
		<header>
			<h1>GFX23</h1>
			<p>Next.js Dev</p>
		</header>

		<section id="about-me" className="flex flex-col gap-4">
			<h2>About Me</h2>
			<p>
				Hi, Im Tomas, a passionate front-end developer with three years of experience. My expertise
				lies in Next.js, Postgres, React, and TypeScript. I enjoy building interactive and
				user-friendly web applications that deliver a seamless user experience.
			</p>

			<p>
				Throughout my journey, Ive honed my skills in creating efficient and scalable web solutions.
				I thrive in dynamic environments and love staying up-to-date with the latest trends and
				technologies in the ever-evolving world of web development.
			</p>

			<p>
				When Im not coding, you can find me exploring new technologies, contributing to open-source
				projects, or enjoying a good cup of coffee while brainstorming new ideas for my next
				project.
			</p>
		</section>

		<footer>
			<p>Contact me at: tomas.spacil@tsindustry.cz</p>
		</footer>
	</div>
);

export default Home;
