import { nanoid } from 'nanoid';

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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'steamdeck.png',
    title: 'STEAMdeck',
    info: '',
    info2: '',
    url: 'https://steamdeck.herokuapp.com/',
    repo: 'https://github.com/victorzottmann/steamdeck', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gifs-n-stickers.png',
    title: 'GIFs-n-Stickers',
    info: '',
    info2: '',
    url: 'https://gifs-n-stickers.netlify.app/',
    repo: 'https://github.com/teraglin/Gifs-N-Stickers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'acoustics.png',
    title: 'Sound Level Calculator (Terminal-based)',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/victorzottmann/acoustics-calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio-2020.png',
    title: 'First Portfolio',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/victorzottmann/portfolio-2020', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
