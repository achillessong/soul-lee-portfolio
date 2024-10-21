import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Eric Flores | Senior Software Engineer</title>
				<meta
					name="description"
					content="I’m a Senior Software Engineer with more than 10 years of experience, including front-end and back-end development."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip">
				<Main />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
