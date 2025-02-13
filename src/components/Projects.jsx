
import React from "react";
import Shopping from "../assets/screenshots/Shopping.png";
import Article from "../assets/screenshots/Article.png";
import Movie from "../assets/screenshots/Movie.png";
import Portfolio from "../assets/screenshots/Portfolio.png";
import Realestate from "../assets/screenshots/Realestate.png";
import foodLover from "../assets/screenshots/foodLover.png";

const projects = [
  {
    title: "Online Shopping",
    description:
      "An e-commerce platform where users can explore and purchase a variety of products. Enjoy a seamless shopping experience with easy navigation and user-friendly features.",
    image: Shopping,
    demoLink: "https://chimerical-sopapillas-8538be.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/online-shopping",
  },
  {
    title: "Great Restaurant",
    description:
      "Discover the best restaurants in town and enjoy a delightful dining experience. Explore a wide range of cuisines and find the perfect spot for your next meal.",
    image: foodLover,
    demoLink: "https://great-restaurant-me.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/great-restaurant",
  },
  {
    title: "Real-Estate",
    description:
      "Discover the allure of exquisite homes set against breathtaking landscapes. Full-stack real-estate app. Create with Vite,tailwindcss, MangoDb,Firebase",
    image: Realestate,
    demoLink: "https://real-estate-app-fsub.onrender.com/",
    codeLink: "https://github.com/ebrahimbeiati/real-estate-app",
  },
  {
    title: "Movie finder",
    description:
      "Discover and explore a vast collection of movies with this movie finder app. Search for your favorite films, get details, and enjoy a personalized movie-watching experience.",
    image: Movie,
    demoLink: "https://master--chipper-valkyrie-4ac46b.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/alltube",
  },
  {
    title: "Article summarizer",
    description:
      "Effortlessly summarize lengthy articles and get key insights with this article summarizer. Save time and focus on essential information without reading through extensive content.",
    image: Article,
    demoLink: "https://article-summarizer-ai2.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/article-summarizer",
  },
  {
    title: "Portfolio",
    description:
      "A showcase of my portfolio as a software engineer. Explore the projects I've worked on and learn more about my skills and expertise in the field of software development.",
    image: Portfolio,
    demoLink: "/",
    codeLink: "https://github.com/ebrahimbeiati/portfolio",
  },
];

const Projects = () => {
  return (
    <div
      name="project"
      className=" grid w-full mx-auto  bg-gradient-to-br  from-blue-700 via-purple-700 to-black   shadow-md overflow-hidden "
    >
      <div className="md:flex">
        <div className="md:shrink-1 rounded-lg">
          <div className=" mt-28 text-center text-white ">
            <p className=" text-4xl font-bold inline border-b-4 border-blue-700 text-center ">
              Projects
            </p>
            <p className="text-center py-2">
              Check out some of my recent projects
            </p>
          </div>

          <div className="w-full p-8 grid grid-cols-1 sm:grid-cols2 sm:grid-cols-2 gap-4 text-center  md:py-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex object-cover rounded-lg md:h-full  md:w-full content-div group container"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center bg-white rounded-md shadow-md md:p-12 gap-4 leading-4 md:leading-6">
                  <span className="text-black md:text-2xl tracking-wider  font-semibold inline border-b-4  sm:text-lg border-blue-700 text-center">
                    {project.title}
                  </span>
                  <p className="text-gray-800 md:text-xl text-sm text-center">
                    {project.description}
                  </p>
                  <div className="text-center flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-lg px-2 py-2  bg-black text-white font-semibold cursor-pointer">
                        Demo
                      </button>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <button className="rounded-lg px-2 py-2 bg-black text-white font-semibold hover:text-slate-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;