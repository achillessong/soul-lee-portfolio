import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "src/components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			startEvent: "DOMContentLoaded",
			initClassName: "aos-init",
			animatedClassName: "aos-animate",
		});
	}, []);
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;
