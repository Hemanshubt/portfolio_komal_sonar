"use client";
import React from "react";
import { DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaCss3,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaPhone,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiFlask,
  SiJupyter,
  SiOpencv,
  SiStreamlit,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
import { FaChrome } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "komalsonar19@gmail.com",
    href: "mailto:komalsonar19@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "8767986558",
    href: "tel:8767986558",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/komal-sonar1901/",
    content: "/komal-sonar1901",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/sonarkomalgithub",
    content: "/sonarkomalgithub",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  // {
  //   name: "JavaScript",
  //   content: "High-level programming language for web development",
  //   icon: <RiJavascriptFill size={"50px"} color={"#f0db4f"} />,
  //   color: "#f0db4f",
  // },
  {
    name: "React.js",
    content: "JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "HTML",
    content: "Standard markup language for web pages",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Style sheet language for web design",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Python",
    content: "Versatile programming language for AI/ML",
    icon: <FaPython size={"50px"} color="#3776ab" />,
    color: "#3776ab",
  },
  {
    name: "Flask",
    content: "Lightweight Python web framework",
    icon: <SiFlask size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Streamlit",
    content: "Python framework for data apps",
    icon: <SiStreamlit size={"50px"} color="#ff4b4b" />,
    color: "#ff4b4b",
  },
  {
    name: "Jupyter",
    content: "Interactive computing environment",
    icon: <SiJupyter size={"50px"} color="#f37626" />,
    color: "#f37626",
  },
  {
    name: "OpenCV",
    content: "Computer vision library",
    icon: <SiOpencv size={"50px"} color="#5c3ee8" />,
    color: "#5c3ee8",
  },
  {
    name: "SQL",
    content: "Database query language",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "Git",
    content: "Version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Code hosting platform",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Popular code editor",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Chrome Extensions",
    content: "Browser extension development",
    icon: <FaChrome size={"50px"} color="#4285f4" />,
    color: "#4285f4",
  },
  {
    name: "NPM",
    content: "Node package manager",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "NginX",
    content: "Web server and reverse proxy",
    icon: <DiNginx size={"50px"} color="#009639" />,
    color: "#009639",
  },
  {
    name: "VIM",
    content: "Powerful text editor",
    icon: <DiVim size={"50px"} color="#019733" />,
    color: "#019733",
  },
  {
    name: "Vercel",
    content: "Cloud platform for deployment",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Komal Sonar</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Komal Sonar, a Full Stack Developer with React & AI Integration Expertise. 
              I&apos;m passionate about building scalable, interactive web applications using React, JavaScript, 
              and modern frontend frameworks. I have experience integrating AI/ML models into web platforms, 
              developing responsive UIs, and optimizing user experiences.
            </p>
            <p className="mb-10">
              I&apos;m adept at working with REST APIs, state management, and Chrome extensions. 
              I have a strong background in Python, Flask, and AI-driven solutions, with a focus on 
              delivering production-ready software. Currently pursuing my Master in Computer Application 
              at R. C. Patel Institute of Management Research and Development, Shirpur.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-2 border-[.5px] border-zinc-600 rounded-md hover:border-zinc-400 transition-colors"
                  title={tool.name}
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
