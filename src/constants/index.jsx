import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project4 from "../assets/project4.webp";
// import project3 from "../assets/project3.webp";
// import project5 from "../assets/project5.webp";
// import project6 from "../assets/project6.webp";
// import project7 from "../assets/project7.webp";
// import project8 from "../assets/project8.webp";
// import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Node, Tailwind, Javascript, C++, Vercel, CSS, Git, C, Java, ";

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project1,
    link: "https://zaid-alam.vercel.app/",
  },
  {
    id: 2,
    title: "ProLancer",
    description:
      "A freelancing platform where users can buy and sell services, as well as place bids on various projects.",
    imgSrc: project2,
    link: "https://project-sih-2024.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "TBD",
  //   description:
  //     "TBD.",
  //   imgSrc: project3,
  //   link: "https://iammdzaidalam-2kl9.vercel.app/",
  // },
  {
    id: 4,
    title: "TBD",
    description:
      "TBD",
    imgSrc: project4,
    link: "https://example.com/blog-platform",
  },
  // {
  //   id: 5,
  //   title: "TBD",
  //   description: "TBD",
  //   imgSrc: project5,
  //   link: "https://example.com/task-management-tool",
  // },
  // {
  //   id: 6,
  //   title: "TBD",
  //   description:
  //     "TBD",
  //   imgSrc: project6,
  //   link: "https://example.com/online-learning-platform",
  // },
  // {
  //   id: 7,
  //   title: "TBD",
  //   description: "TBD",
  //   imgSrc: project7,
  //   link: "https://example.com/fitness-tracker",
  // },
  // {
  //   id: 8,
  //   title: "TBD",
  //   description: "TBD",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "TBD",
  //   description:
  //     "TBD",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
  "I specialize in building dynamic, responsive web applications with expertise in React, Tailwind and Node.js. I'm passionate about continuous learning and staying updated with the latest industry trends to implement modern practices in my projects.";

export const EXPERIENCES = [
  {
    company: "IEEE Student Branch, BIT Mesra",
    role: "Competitive Programmer",
    year: "11/2023 - Present",
    description:
      "Developing and optimizing algorithms in C++ and C for competitive programming challenges. Achieved a Codeforces rating of 1337 with the Pupil rank. Collaborating with team members to solve complex problems and refine coding strategies.",
  },
  {
    company: "Finance Club, BIT Mesra",
    role: "Frontend Developer",
    year: "08/2024 - Present",
    description:
      "Built user interfaces with React. Collaborated with designers to enhance user experiences and optimized performance for various devices. Contributed to code reviews to ensure high-quality code.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://instagram.com/dfw.zaid",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/iammdzaidalam",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/iammdzaidalam",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/zaid-alam-a09994285/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I'm excited to collaborate on new projects. Let's connect and create something amazing together. Reach me out to discuss opportunities!",
  email: "iammdzaidalam@gmail.com",
  phone: "+(91 - 6205335274)",
};
