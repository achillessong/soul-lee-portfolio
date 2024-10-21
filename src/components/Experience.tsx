import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const LennarExperience = {
		companyName: "Lennar",
		role: "Senior Software Engineer",
		duration: "12/2022 - Present",
		activities: [
			"Developed responsive user interfaces for a home search website using React and Next.js, significantly improving user experience across desktop and mobile devices as evidenced by positive user feedback and increased time-on-site.",
			"Engineered RESTful APIs using Node.js and Express, reducing average API response time by 30%, to serve dynamic data from PostgreSQL to the frontend.",
			"Implemented Redux for global state management in React apps, reducing data fetching operations by 50% and improving app performance across components.",
			"Enhanced website functionality by integrating Google Maps API for location searching and Stripe API for payments, resulting in a 25% increase in successful transactions.",
			"Boosted SEO performance by 35% through implementing Server-Side Rendering with Next.js, improving initial page load times by 2 seconds.",
			"Streamlined team collaboration by implementing Git/GitHub workflows, reducing merge conflicts by 40% and increasing code review efficiency by 25%.",
			"Optimized website performance using Chrome DevTools and PM2, reducing page load time by 50% and increasing the number of concurrent users supported from 1,000 to 5,000.",
		],
	};

	const EtsyExperience = {
		companyName: "Etsy",
		role: "Senior Software Engineer",
		duration: "10/2018 - 11/2022",
		activities: [
			"We built the Etsy platform using Node.js and a modern JavaScript technology stack including JavaScript, React, React Native, Typescript, Redux, Context API etc.",
			"Led a frontend team to deliver optimized and well-structured code for internal UI development, primarily utilizing React, Zustand, Typescript, Python and MySQL.",
			"Optimized codebase using advanced React patterns and lazy loading techniques, reducing code complexity by 80% and initial loading times by 70%, improving user experience for over 1 million daily active users.",
			"Established a new Apollo GraphQL server for smooth data flow, reducing API response times by 60% and enabling real-time updates for 500,000 concurrent users.",
			"Enhanced software reliability by implementing an automated testing framework with Jest and Cypress, effectively reducing production bugs by 50%.",
			"Engineered a robust feature flagging system and oversaw the entire software development lifecycle for a real-time analytics project, ensuring seamless integration and controlled feature releases through the CI/CD process using Azure DevOps.",
		],
	};

	const CognizantExperience = {
		companyName: "Cognizant",
		role: "Software Engineer",
		duration: "03/2015 - 10/2018",
		activities: [
			"Drove the full-stack development of the Lifetouch mobile app from scratch using React Native, Node.js, MongoDB, GraphQL, and TailwindCSS, with AIpowered recommendation features using Tensorflow.js. (Home Depot).",
			"Effectively diagnosed and resolved system discrepancies, ensuring seamless operation by utilizing modern technologies like MongoDB and Node.js for back-end support. (BlueScope Steel).",
			"Architected and led the frontend development of a collaboration app from scratch using Electron, React, Redux Saga, ES6+, WebRTC, and WebSockets, with features such as real-time chat video conferencing, screencasting and team calendar. (Shyftmoving).",
		],
	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["Lennar", "Etsy", "Cognizant"]}
						tabPanel={[
							<Details key={"Lennar"} experienceDetails={LennarExperience} />,
							<Details key={"Etsy"} experienceDetails={EtsyExperience} />,
							<Details key={"Cognizant"} experienceDetails={CognizantExperience} />
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
