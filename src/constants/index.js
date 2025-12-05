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
  orbitor,
  techonet,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
  Hotelzz,
  AchievR,
  EBMR,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Full-Stack Web ",
    icon: web,
  },
  {
    title: "Next.js",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "DevOps",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Trainee",
    company_name: "Techonet Pvt Ltd",
    icon: techonet,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      " I strengthened my foundations in Python programming, machine learning, and basic AI workflows, including data preprocessing, model training, and evaluation. ",
      "Under the guidance of the Techonet training team, I worked in a structured environment that emphasized deadlines, documentation, and professional coding standards.",
      "For the final submission, my team has designed and developed an emotion‑based recommendation web app that detects or takes user emotions as input and provides tailored content or suggestions aligned with their current mood. ",
      "The project showcased how AI can enhance user experience by making interactions more empathetic and context‑aware rather than purely rule‑based.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Bharat Intern",
    icon: orbitor,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Designed and documented UML diagrams for system architecture and process flows.",
      "Utilized Slugify, jsdom, and DomPurify for optimizing SEO and ensuring secure DOM manipulation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];


const statCards = [
  {
    label: "Years Experience",
    value: "1.5+",
    sub: "Hands‑on production work",
  },
  {
    label: "Projects Delivered",
    value: "5+",
    sub: "eLearning, Escrow, Portfolio",
  },
  {
    label: "Internships",
    value: "2",
    sub: "Full‑Stack & Backend",
  },
  {
    label: "CPI",
    value: "7.9+",
    sub: "Consistently high",
  },
];
const projects = [
  {
    name: "Hotel Management with CMS ",
    description:
      "Enforced Next.js and React.js to ensure seamless user experience.Integrated Sanity.io as an in-built CMS for dynamic content management.Implemented Stripe payment gateway for secure and efficient transaction processing",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "sanity.io",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: Hotelzz,
    source_code_link: "https://github.com/OmkarMishr/hotel-management",
  },
  {
    name: "AchievR ",
    description:
      "A full-stack web app for students to submit co-curricular achievements, get them faculty-verified, and generatetamper-proof digital certificates with QR-based verification.Developed a certificate service using pdf-lib and QRCode to generate professional certificates, send them via email, and expose verification endpoints consumed by a dedicated Verify Certificate page.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: AchievR,
    source_code_link: "https://github.com/OmkarMishr/HackTitans-AchievR",
  },
  {
    name: "Emotion-Based Music Recommender",
    description:
      "A Python and Streamlit-based web application that detects a user’s real-time emotion from facial expressions and text sentiment using computer vision and ML models, then recommends mood-aligned songs by mapping emotions to curated playlists via YouTube APIs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Keras Model",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },{
        name: "Numpy",
        color: "blue-text-gradient",
      },
    ],
    image: EBMR,
    source_code_link: "https://github.com/OmkarMishr/Emotion-Bashed-Music-Recommender",
  },
];

export { services, technologies, experiences, projects,statCards };
