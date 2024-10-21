import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import ResumeShot_front from "public/assets/resume-front.png";
import ResumeShot_back from "public/assets/resume-back.png";

const ResumePdf = () => {
	const resumePdfLink = "assets/EricRamonFlores.pdf";
	return (
		<>
			<div className="relative w-full">
				<div className="absolute top-0 right-0 z-10 flex items-center justify-center">
					<a href={resumePdfLink} download className="p-0">
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer scale-75 hover:scale-100 ease-in  hover:bg-secondary duration-300 ">
							<FaDownload title="download resume" />
						</div>
					</a>
				</div>
				
			</div>
			<Image src={ResumeShot_front} className="rounded-xl " alt="/" loading="lazy" />
			<Image src={ResumeShot_back} className="rounded-xl mt-10" alt="/" loading="lazy" />
		</>
	);
};

const Resume = () => {
	return (
		<>
			<Head>
				<title>Eric Flores | Resume</title>
				<meta
					name="description"
					content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>

			<div className="max-w-[940px] mx-auto p-2 pt-[120px]">
				<h2 className="text-center">Resume</h2>
				<div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
					<h2 className="text-center">{process.env.name}</h2>
					<div className="flex">
						<a
							href={process.env.linkedin}
							target="_blank"
							rel={process.env.name}
						>
							<FaLinkedinIn title="Linkedin" size={20} style={{ marginRight: "1rem" }} />
						</a>
						<a href={process.env.gitHub} target="_blank" rel={process.env.name}>
							<FaGithub title="GitHub" size={20} style={{ marginRight: "1rem" }} />
						</a>
					</div>
				</div>
				<div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
					<div className="hidden sm:block">
						<p>
							Team Player <span className="px-1">|</span> Web Development{" "}
							<span className="px-1">|</span> Analytics & Problem Solving
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Team Player</p>
						<p className="py-2">Web Development</p>
						<p>Analytics & Problem Solving</p>
					</div>
				</div>
				<div className="max-w-full flex justify-center relative gap-2 w-full flex-wrap">
					<ResumePdf />
				</div>
				<div className="mt-4">
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Resume;
