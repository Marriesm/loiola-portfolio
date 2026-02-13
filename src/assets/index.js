// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Repositórios GitHub',
    amount: 28,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Projetos Concluídos',
    amount: 47,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Clientes Satisfeitos',
    amount: 13,
    icon: <GroupLineIcon />,
  },
  {
  title: 'Certificados',
  amount: 32,
  icon: <AwardFillIcon />,
}
]


import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText = "Sou desenvolvedor full-stack apaixonado por tecnologia e pela criação de experiências digitais.Atuo tanto no back-end quanto no front-end, desenvolvendo aplicações completas, modernas e escaláveis. Tenho experiência com C#, .NET, Python e Django na construção de sistemas robustos e bem estruturados, além de criar interfaces dinâmicas e responsivas utilizando React e Next.js. Trabalho com PostgreSQL para modelagem eficiente de dados, utilizo Tailwind CSS para desenvolver layouts elegantes e performáticos, e o Figma para prototipação e design de interfaces intuitivas. Busco sempre unir performance, usabilidade e qualidade de código em cada projeto.";


export const experienceData = [
  {
    year: 2,
    title: 'Grupo Jaime Câmara ( 2021 - 2024)',
    education:
      'Faculdade : Anhnaguera e cursos Alura e Udemy.',
    experience: [
      '- Criação de artes para o jornal O Popular, e rádios. Utilizando ferramentas como Photoshop e Illustrator.',
      '- Criação de peças para os sites O Popular.',
    ],
  },
  {
    year: 2,
    title: 'Faculdade Engenharia de Software)',
    education:
      '.',
    experience: [
      '.',
      '.',
    ],
  },
  {
    year: 5,
    title: 'Building Expertise and Expanding Skills',
    education: 'Certifications: Obtain certifications in advanced web technologies.',
    experience: [
      '.',
      '.',
    ],
  },
  {
    year: 6,
    title: 'Mastery and Leadership',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      '.',
      '.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'AI',
    icon: '/skills/ai.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Marrie, Freelance Graphic Designer',
    comment:
      ". ",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Indaya, E-commerce Store Owner',
    comment:
      ".",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'Lu, CEO of Tech Startup',
    comment:
      ".",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Laryssa, Lifestyle Blogger',
    comment:
      ".",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'Josley, Director of Non-Profit Organization',
    comment:
      ".",
    stars: [1, 1, 1, 1, 1],
  },
]

// Projects
export const projectsData = [
  {
    name: 'Design Layout Imprensão 3d',
    desc: '',
    url: '/projects/image-1.jpg',
    tech: ['Figma', 'Photoshop', 'HTML'],
  },
  {
    name: '2',
    desc: '',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'Photoshop'],
  },
  {
    name: '1',
    desc: '.',
    url: '/projects/image-3.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: '4',
    desc: '',
    url: '/projects/image-4.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  },
  {
    name: '5',
    desc: '.',
    url: '/projects/image-5.jpg',
    tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
  },
  {
    name: '6',
    desc: '.',
    url: '/projects/image-6.jpg',
    tech: ['ReactJS', 'TailwindCSS', , 'CSS', 'FramerMotion'],
  },
  {
    name: '7',
    desc: '',
    url: '/projects/image-7.jpg',
    tech: ['NextJS', 'FramerMotion'],
  },
  {
    name: '8',
    desc: ' ',
    url: '/projects/image-8.jpg',
    tech: ['NextJS', 'ReactJS', 'FramerMotion'],
  },
  {
    name: '9',
    desc: '.',
    url: '/projects/image-9.jpg',
    tech: ['ReactJS', 'JavaScript', 'ThreeJS'],
  },
  {
    name: '10',
    desc: '',
    url: '/projects/image-10.jpg',
    tech: ['NextJS', 'ThreeJS'],
  },
]

export const projectsButton = [
  'All',
  'Figma',
  'Next',
  'React',
  'CSS',
  'JavaScript',
  'Typescript',
  'TailwindCSS',
  'NextJS',
  'C#',
  'Python',
]

// Pricing Plans
export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '',
    features: [
      '',
      '',
      ' ',
      '',
      '',
      '',
    ],
    recommended: '',
  },
  {
    title: 'Premium',
    pricing: '',
    features: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    recommended: '',
  },
  {
    title: '',
    pricing: '',
    features: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    recommended: '',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: '',
    answer:
      '',
  },
  {
    question: '',
    answer:
      ' ',
  },
  {
    question: '',
    answer:
      '',
  },
  {
    question: '',
    answer:
      '.',
  },
  {
    question: '',
    answer:
      '',
  },
  {
    question: '',
    answer:
      ' ',
  },
  {
    question: '',
    answer:
      '',
  },
  {
    question: '',
    answer:
      ' ',
  },
  {
    question: '',
    answer:
      '.',
  },
  {
    question: '',
    answer:
      '.',
  },
  {
    question: '',
    answer:
      '',
  },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'pricing',
    name: 'Pricing',
    icon: <PriceTag3LineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
