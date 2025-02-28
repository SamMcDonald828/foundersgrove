import Image from "next/image";
import NavBar from "./components/navbar";
import HomeCard from "./components/homeCard";

export default function Home() {
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div>
			<main className="wrapper">
				<header className="h-full">
					<img
						src="/imgs/RedwoodBackground.jpg"
						alt="background image"
						className="back"
					/>
					<img
						src="/imgs/RedwoodSingle.png"
						alt="Redwood Tree Single"
						className="fore"
					/>
					<div
						className="font-arial text-background bg-foreground/20 space-y-1 p-12 sm:p-20 md:p-28 
					rounded-xl max-w-5xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 text-center z-20"
					>
						<h1 className=" md:text-4xl text-3xl text-center font-arial font-semibold">
							Founders Grove
						</h1>
						<p>Lets Bring Something to Life</p>
					</div>
				</header>
				<div className="space-y-24 mx-4">
					<HomeCard
						title={`What do we do?`}
						description={`We are a team of developers, designers, and project managers that
							are dedicated to bringing ideas to life. We specialize in creating
							websites and web applications that are tailored to your needs.`}
						btn={null}
						btnLink={null}
					/>
					<HomeCard
						title={`What have we built?`}
						description={`We have built a variety of websites and web applications for a
							diverse range of clients. Our projects include e-commerce sites,
							blogs, and custom web applications.`}
						btn={`View Our Work`}
						btnLink={`work`}
					/>
					<HomeCard
						title={`Why Us?`}
						description={`We are a team of experienced professionals who are passionate
							about creating high-quality websites and web applications. We are
							committed to providing our clients with the best possible service
							and delivering projects on time and on budget.`}
						btn={`Meet Our Team`}
						btnLink={`team`}
					/>
					<HomeCard
						title={`Get In Touch`}
						description={`If you have a project in mind or would like to learn more about
							our services, please get in touch. We would love to hear from you
							and discuss how we can help bring your ideas to life.`}
						btn={`Contact Us`}
						btnLink={`contact`}
					/>
				</div>
			</main>
		</div>
	);
}
