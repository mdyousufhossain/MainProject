import sat from '../assets/satisfaction.svg';
import time from '../assets/time.svg';
import top from '../assets/top.svg';
import ThemeIcon from './darkmodUI';

export const menu = [
  {
    id: 1,
    titile: 'Home',
    icon: null,
    link: '/',
  },
  {
    id: 2,
    titile: 'Product',
    icon: null,
    link: 'product',
  },
  {
    id: 3,
    titile: 'Service',
    icon: null,
    link: 'service',
  },
  {
    id: 4,
    titile: 'Contract',
    icon: null,
    link: 'contract',
  },
  {
    id: 5,
    titile: null,
    icon: <ThemeIcon />,
    link: 'contract',
  },
];

export const productPrompt = [
  {
    id: 1,
    title: "Air Conditionar Part's",
    src: '',
  },
  {
    id: 2,
    title: "Fridge Part's",
    src: '',
  },
  {
    id: 3,
    titile: "AC/Fridge Repire Service's",
    src: '',
  },
];

export const heroSection = {
  titile: '35 years of experience',
  details: 'For dacads Yousuf refrigeration have been trusted choices for reliability and safety in Air-conditioning, heating parts and service\'s. ',
};

export const promotion = [
  {
    id: 1,
    titile: '100% Satisfaction',
    icon: sat,
  },

  {
    id: 2,
    titile: 'Long Tearm Services',
    icon: time,
  },
  {
    id: 3,
    titile: 'Top quality',
    icon: top,
  },
];

