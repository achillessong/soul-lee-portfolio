/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
	env: {
		name: "Eric Flores",
		role: "Senior Software Engineer",
		full_name: "Eric Ramon Flores",
		linkedin: "https://www.linkedin.com/in/eric-hi-flores",
		gitHub: "https://github.com/achillessong",
	}
};

module.exports = nextConfig;
