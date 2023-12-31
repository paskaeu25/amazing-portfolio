import {
  faHome,
  faEnvelope,
  faUserGraduate,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    icon: faHome,
    path: '/',
  },
  {
    id: 2,
    name: `About`,
    icon: faUserGraduate,
    path: '/about',
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: faFolder,
    path: '/portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    icon: faEnvelope,
    path: '/contact',
  },
];

export const experience = [
  {
    id: 1,
    no: '2+',
    title: 'Years Experience',
  },
  {
    id: 2,
    no: '10+',
    title: 'Complete Projects',
  },
  {
    id: 3,
    no: '3+',
    title: 'Happy Clients',
  },
];

import image1 from '../../src/assets/html-5.png';
import image2 from '../../src/assets/css-3.png';
import image3 from '../../src/assets/js.png';
import image4 from '../../src/assets/react.png';
import image5 from '../../src/assets/node.png';
import image6 from '../../src/assets/git.png';
export const tools = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
  {
    id: 4,
    img: image4,
  },
  {
    id: 5,
    img: image5,
  },
  {
    id: 6,
    img: image6,
  },
];

import {
  faCode,
  faTerminal,
  faArrowsLeftRightToLine,
} from '@fortawesome/free-solid-svg-icons';
export const services = [
  {
    id: 1,
    icon: faCode,
    name: 'Front End Development',
    des: 'I excel in frontend technologies such as HTML5, CSS3, JavaScript and React, ensuring your website delivers an immersive user experience and intuitive interface.',
  },
  {
    id: 2,
    icon: faTerminal,
    name: 'Back End Development',
    des: `My expertise lies primarily in Node.js, coupled with a deep understanding of MongoDB. I specialize in building robust server-side architectures that power websites and applications, focusing on creating efficient and scalable solutions tailored to meet your specific needs.`,
  },
  {
    id: 3,
    icon: faArrowsLeftRightToLine,
    name: 'Responsive Design',
    des: 'I employ CSS preprocessors like SASS or LESS and frameworks like Bootstrap or Tailwind CSS to ensure your website is flawlessly responsive across all devices and screen sizes.',
  },
];

import protfoliImg1 from '../../src/assets/scuba-logger.gif';
import protfoliImg2 from '../../src/assets/blog-demo.gif';
import protfoliImg3 from '../../src/assets/dream-travel.gif';
import protfoliImg4 from '../../src/assets/kalbos-delione-600x400.jpg';
import protfoliImg5 from '../../src/assets/gym-pulse-600x400.jpg';
export const portfolio = [
  {
    id: 1,
    img: protfoliImg1,
    name: 'Scuba Logger',
    des: `A full-stack web app that allows users to log their scuba diving experiences. Built using MongoDB, Express.js, EJS, and Node.js (MEEN stack). Styled with Tailwind CSS for a cohesive and responsive design.`,
    github: 'https://github.com/paskaeu25/diving-logbook',
    live: 'https://scuba-logger.onrender.com/',
  },
  {
    id: 2,
    img: protfoliImg2,
    name: 'Fit Blog',
    des: `Fit Blog is a sleek and efficient blogging platform designed to streamline content creation and sharing. Developed primarily with React and React Router, it ensures a smooth and responsive user experience.`,
    github: 'https://github.com/paskaeu25/fit-blog',
  },

  {
    id: 3,
    img: protfoliImg3,
    name: 'Power Pulse Gym Website',
    des: `A website which is tailored to showcase the gym's facilities, services, and offer vital information to both potential and existing members.`,
    github: 'https://github.com/paskaeu25/power-pulse-gym',
    live: 'https://paskaeu25.github.io/power-pulse-gym/',
  },
  {
    id: 4,
    img: protfoliImg4,
    name: 'Speech Therapy - Kalbos Delione',
    des: `A website spotlighting the company's expertise and services, catering to those seeking solutions for speech and language challenges.`,
    live: 'https://kalbosdelione.lt/',
  },

  {
    id: 5,
    img: protfoliImg5,
    name: 'Dream Travel Website',
    des: 'The website is designed to showcase the services offered by a travel agency and provide essential information to prospective and existing clients.',
    github: 'https://github.com/paskaeu25/travel-website',
    live: 'https://paskaeu25.github.io/travel-website/',
  },
];

import avatar1 from '../../src/assets/avatar1.png';
import avatar2 from '../../src/assets/avatar2.png';
import avatar3 from '../../src/assets/avatar3.png';
import avatar4 from '../../src/assets/avatar4.png';
export const testimonials = [
  {
    id: 1,
    img: avatar1,
    name: 'Alex Thompson',
    des: 'Hiring Pavelas was one of the best decisions for our startup. His coding prowess, reliability, and dedication to meeting deadlines were instrumental in bringing our product to life.',
  },
  {
    id: 2,
    img: avatar2,
    name: 'Mark Rodriguez',
    des: `I've collaborated with many developers, but Pavelas stands out. His coding expertise and problem-solving skills are unmatched. He delivered beyond expectations and contributed immensely to our project's success.`,
  },
  {
    id: 3,
    img: avatar3,
    name: 'Arjun Patel',
    des: `As a fellow developer, I can attest to the remarkable skills and dedication of Pavelas. His problem-solving abilities and commitment to clean, efficient code have greatly contributed to our project's success.`,
  },
  {
    id: 4,
    img: avatar4,
    name: 'Vikram Sharma',
    des: `I had the pleasure of collaborating with developer Pavelas on a demanding project. His expertise in web development, combined with a proactive approach, made a significant impact on our team's productivity and project milestones.`,
  },
];
