import { nanoid } from 'nanoid';
import getEmail from '../../public/email';

// HEAD DATA
export const headData = {
  title: 'Victor Zottmann | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile4.jpg',
  paragraphOne:
    'I’m a junior web developer and audio engineer with a passion for the creative arts and education.',
  paragraphTwo:
    'I have completed a Master’s of Architectural Science with specialisation in Audio and Acoustics in 2020, where the intention was to transition into acoustic consulting. However, since I have focused much more on the technology side of things during the course, I decided to take a shot at pursuing a career in software development instead.',
  paragraphThree:
    "Based in Sydney, Australia, I'm skilled in HTML, CSS / SASS, Bootstrap, Ruby on Rails and PostgreSQL. I'm also currently learning JavaScript and React.js",
  paragraphFour:
    "Aside from coding, I'm passionate about filmmaking, tennis, hiking, and travelling. I've also been trying to get into a daily running routine.",

  resume: 'Resume_VictorZottmann.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'steamdeck.png',
    title: 'STEAMdeck',
    info: 'A two-sided marketplace focused on affordable academic book rentals, built with Ruby on Rails and PostgreSQL.',
    info2:
      'Since academic books tend to be quite expensive, especially those related to science and technology, the idea was to make it possible for users to either share or rent books in their local area. The app features maps integration for visualizing store location and opening hours.',
    url: 'https://steamdeck.herokuapp.com/',
    repo: 'https://github.com/victorzottmann/steamdeck', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gifs-n-stickers.png',
    title: 'GIFs-n-Stickers',
    info: 'Built with vanilla JavaScript, GIFs-n-Stickers is a simple web app that allows you to search for GIFs or stickers. Search results are always limited to 10 items.',
    info2: 'This project was made in a two-day hackathon hosted at Coder Academy (Sydney).',
    url: 'https://gifs-n-stickers.netlify.app/',
    repo: 'https://github.com/teraglin/Gifs-N-Stickers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'acoustics.png',
    title: 'Sound Level Calculator (Terminal-based)',
    info: 'This is an interactive calculator of sound level and room acoustics parameters, made in Ruby. It only runs on the command line (CLI).',
    info2:
      "One of the projects for my master's degree involved designing the acoustics for about 15 rooms of an educational facility, and all the calculations were made in Microsoft Excel. The objective here was to convert that clunky Excel spreadsheet into a simple, user-friendly computer program.",
    url: '',
    repo: 'https://github.com/victorzottmann/acoustics-calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio-2020.png',
    title: 'First Portfolio',
    info: 'This was the first portfolio design I created when I started to learn programming. It was made only with HTML and CSS.',
    info2: '',
    url: '',
    repo: 'https://github.com/victorzottmann/portfolio-2020', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: getEmail,
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/vzcodes',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vzottmann/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/victorzottmann',
    },
  ],
};
