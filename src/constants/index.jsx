import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import portfolio from "../assets/portfolio.jpg";
import prolancer from "../assets/Prolancer.jpg";
import devquest from "../assets/DevquestProject.jpg";

export const LINKS = [
  { id: "about", name: "about" },
  { id: "projects", name: "projects" },
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
    imgSrc: portfolio,
    link: "https://zaid-alam.vercel.app/",
  },
  {
    id: 2,
    title: "DemonSlayer-DevQuest",
    description:
      "Website built for BIT Mesra's IETE Devquest 2024, showcasing my skills, securing 4th place.",
    imgSrc: devquest,
    link: "https://iammdzaidalam.github.io/IETE-DEVQUEST/",
  },
  // {
  //   id: 3,
  //   title: "ProLancer",
  //   description:
  //     "A freelancing platform where users can buy and sell services, as well as place bids on various projects.",
  //   imgSrc: prolancer,
  //   link: "https://project-sih-2024.vercel.app/",
  // },
];

export const ABOUT =
  "I specialize in building dynamic, responsive web applications with expertise in React, Tailwind and Node.js. I'm passionate about continuous learning and staying updated with the latest industry trends to implement modern practices in my projects.";

export const EXPERIENCES = [
  {
    company: "IEEE Student Branch, BIT Mesra",
    role: "Associate Member, Web Developer, Competitive Programmer",
    year: "11/2023 - Present",
    description: [
      "Worked on C++ DSA and competitive programming through practice and contests, improving problem-solving skills.",
      "Achieved a Codeforces rating of 1337 with the Pupil rank, constantly refining my coding strategies.",
      "Joined a community of some of the best minds in tech at BIT Mesra."
    ],
  }
  ,
  {
    company: "Finance Club, BIT Mesra",
    role: "Associate Member, Web Designer and Developer",
    year: "08/2024 - Present",
    description: [
      "Currently building the official website for the Finance Club at BIT Mesra, ensuring a user-friendly and responsive design.",
      "Interviewed junior years for entry into the club, helping assess their skills and suitability for the community.",
      "Designed and contributed to the development of the upcoming club website, enhancing the overall digital presence of the club."
    ],
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
