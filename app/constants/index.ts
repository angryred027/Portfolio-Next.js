export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Engineer",
		company_name: "Empat",
		icon: "/company/empat.jpeg",
		iconBg: "#383E56",
		date: "2022 -  Present",
		points: [
			"Designed and optimized high-performance RESTful APIs with Golang, enabling seamless system integration.",
			"Built scalable backend systems using Node.js, Golang, and Python, ensuring high performance and reliability.",
			"Developed an intelligent ad creation system with computer vision and deep learning, automating processes.",
			"Created a personalized recommendation engine with NLP models and integrated real-time chatbot features.",
			"Developed a Python Flask web app for managing and visualizing e-commerce data to drive insights.",
			"Integrated GCP services into CI/CD pipelines, enhancing deployment efficiency with Cloud Build and Container Registry."
		],
	},
	{
		title: "Senior Data Scientist & AI Specialist",
		company_name: "Silicon Reef",
		icon: "/company/Silicon.webp",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Led a team of data scientists and engineers to design and deploy machine learning models, boosting client ROI by 25%.",
			"Developed advanced predictive analytics using Python (Pandas, NumPy, Scikit-learn) and deep learning tools (TensorFlow, PyTorch) to support data-driven decisions.",
			"Designed and optimized ETL pipelines, cutting data processing time by 40% and enabling real-time analytics.",
			"Specialized in NLP for text analysis, sentiment analysis, and chatbot development, enhancing automation and user experience.",
			"Delivered business insights through interactive dashboards and reports using Tableau and Power BI for strategic decisions."
		],
	},
	{
		title: "Senior .NET Developer & Full-Stack Web Developer",
		company_name: "Space Whale",
		icon: "/company/Group.svg",
		iconBg: "#E6DEDD",
		date: "2023",
		points: [
			"Developed scalable applications with ASP.NET Core, C#, and SQL Server.",
			"Optimized performance with RESTful APIs and third-party integrations.",
			"Built user-friendly web apps using React.js and Angular.",
			"Led teams in agile environments, ensuring on-time delivery.",
			"Increased client satisfaction by 35% with tailored solutions."
		],
	},
];

const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [	
	{
		name: "Sparkbright Engineering Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://https://github.com/Minato116/sparkbright",
		platform: "Web",
		deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/Minato116/HooBank.git",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			"Developed an intuitive and visually stunning Data Analytics Dashboard using the MERN stack, delivering seamless user experience and actionable insights through advanced data visualization and interactive features.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/Minato116/MERN-dashboard.git",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},	
];

export { services, technologies, experiences, projects };
