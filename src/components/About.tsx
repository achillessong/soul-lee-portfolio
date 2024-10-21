import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/about.jpeg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
					10 years of proficient experience in Full-Stack Web and Mobile Development, and a strong enthusiasm for AI and WEB3.
					</p>
					<p className="py-2 text-gray-600 text-lg">
					Honed best skills in producing clean, efficient, and maintainable code, and have been committing to innovative products across all industries
					like E-Commerce, Health Care, Real Estate, Fintech, E-Learning, Gaming, etc.
					</p>
					<p className="py-2 text-gray-600 text-lg">
					Made significant impacts in various cross-functional Agile teams and leveraged my supreme leadership & communication skills.
					Leading team player, and reliable engineer who takes full responsibility for the project.
					</p>
					<div className="w-[50%]">
						<Link href="/#projects">
							<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
								Check out some of my latest projects.
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-up" data-aos-duration="1000">
						<Image src={AboutImg} className="rounded-xl " alt="/" height={700} width={750} loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
