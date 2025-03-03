import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sql,
  firebase,
} from "../assets";

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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: reactjs,
  },
  {
    title: "AI-Powered Solutions Developer",
    icon: backend,
  },
  {
    title: "Real-Time Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Softapper Tech Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Engineered a chat application with user authentication, supporting both single and group chats.",
      "Secured the application using bcrypt.js for password hashing and jsonwebtoken for user authentication.",
      "Developed and maintained web applications using MERN stack technologies.",
      "Collaborated with senior developers to implement robust backend solutions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "PacknChew",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Implemented a web app integrating table booking, boosting online bookings by 35% and reducing manual errors by 30%.",
      "Improved UI/UX, leading to 60% increased user engagement and higher reservations.",
      "Implemented Firebase backend for real-time seat status updates and efficient data management.",
      "Designed responsive interfaces ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "DevHouse Hackathon - Charge IT",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024",
    points: [
      "Achieved top-10 ranking out of 3000 projects by developing Charge IT, an end-to-end EV charging solution, within 36 hours.",
      "Secured 2nd place in the Built for Bharat category with this innovative EV management system.",
      "Developed real-time database models for dynamic rendering of available charging station booking slots.",
      "Integrated Arduino hardware with React.js frontend and Firebase backend to create a complete solution for EV charging management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Charge IT",
    description:
      "Complete EV Solutions developed as a SaaS for Charging Station Owners, providing real-time availability and booking information to eliminate user anxiety and reduce waiting time at charging stations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "arduino",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/03Sandeep/ChargeIT",
  },
  {
    name: "PacknChew",
    description:
      "Official website for a Lucknow-based restaurant with integrated table booking, resulting in 35% boost in online bookings, 30% reduction in manual errors, and 60% increased user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat App",
    description:
      "A full-featured chat application engineered during internship at Softapper Tech Solutions, supporting both single and group chats with secure user authentication using bcrypt.js and jsonwebtoken.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
