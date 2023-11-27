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
    path: '/About',
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
    path: '/Contact',
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

import protfoliImg1 from '../../src/assets/p1.jpg';
import protfoliImg2 from '../../src/assets/p2.jpg';
import protfoliImg3 from '../../src/assets/p3.jpg';
export const portfolio = [
  {
    id: 1,
    img: protfoliImg1,
    name: 'Project-1',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
    github: '#',
  },
  {
    id: 2,
    img: protfoliImg2,
    name: 'Project-2',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
    github: '#',
  },
  {
    id: 3,
    img: protfoliImg3,
    name: 'Project-3',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
    github: '#',
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
    name: 'Dong Lee',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',
  },
  {
    id: 2,
    img: avatar2,
    name: 'Mohammed Habib',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',
  },
  {
    id: 3,
    img: avatar3,
    name: 'Jhon Alas',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',
  },
  {
    id: 4,
    img: avatar4,
    name: 'Irfan Nazir',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',
  },
];
