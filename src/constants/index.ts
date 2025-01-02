export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Oasis Hotel Website',
    desc: 'Developed a modern, interactive website for The Wild Oasis, a luxury hotel. We utilized Server-Side Rendering (SSR) to improve performance and SEO, ensuring fast load times. The site offers a seamless user experience with dynamic content and real-time updates.',
    subdesc:
      'Built with Next.js, Supabase, and Tailwind for optimal performance and a luxury feel.',
    href: 'https://the-wild-oasis-website-rust.vercel.app',
    github: 'https://github.com/AbdoAhmed-Khalifa/the-wild-oasis-website',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/nextjs.png' },
      { id: 2, name: 'Supabase', path: '/assets/supabase.png' },
      { id: 3, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Oasis Hotel Dashboard',
    desc: 'Hotel management dashboard with real-time data updates, interactive charts, detailed reservation and guest management, and a user-friendly interface.',
    subdesc:
      'Built with React.js, Styled Components, React Hook Form, React Query, Supabase, and Recharts to enable comprehensive data visualization and management.',
    href: 'https://main--oasis-hotel-dashboard.netlify.app/',
    github: 'https://github.com/AbdoAhmed-Khalifa/the-wild-oasis-dashboard',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      {
        id: 2,
        name: 'Styled Components',
        path: '/assets/styled-components.jpeg',
      },
      { id: 3, name: 'React Query', path: '/assets/react-query.svg' },
      { id: 4, name: 'Supabase', path: '/assets/supabase.png' },
    ],
  },
  {
    title: 'Home Service Appointment',
    desc: 'The Home Service Appointment project is a Next.js platform using SSR for easy booking and management of home services like cleaning and repair. It features a user-friendly interface, real-time scheduling, and a responsive design for all devices. Additionally, a React Native version is available for mobile users.',
    subdesc:
      'Built with Next.js, React Native, Expo, TypeScript, Tailwind, and Firebase to create an integrated web and mobile experience.',
    github: 'https://github.com/AbdoAhmed-Khalifa/Home-Service',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/nextjs.png' },
      { id: 2, name: 'React Native', path: '/assets/react-native.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Firebase', path: '/assets/firebase.png' },
      { id: 5, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Amazon Clone',
    desc: 'The Amazon Clone is a React-based web application replicating the core features of the Amazon e-commerce platform. It includes product browsing, user authentication, and a dynamic shopping cart. The platform provides a responsive design for seamless use across various devices.',
    subdesc:
      'Built with React.js, Tailwind, Firebase for authentication and database management, and payment integration. Hosted on Netlify for a fast and reliable experience.',
    href: 'https://main--cloning-amazon-website.netlify.app',
    github: 'https://github.com/AbdoAhmed-Khalifa/Gradution-Project',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 4, name: 'Firebase', path: '/assets/firebase.png' },
      { id: 5, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

export const technologies = [
  {
    name: 'HTML 5',
    icon: '/tech-logos/html.png',
  },
  {
    name: 'CSS 3',
    icon: '/tech-logos/css.png',
  },
  {
    name: 'JavaScript',
    icon: 'tech-logos/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: 'tech-logos/typescript.png',
  },
  {
    name: 'React JS',
    icon: 'tech-logos/reactjs.png',
  },
  {
    name: 'Next JS',
    icon: 'tech-logos/nextjs.png',
  },
  {
    name: 'Angular',
    icon: 'tech-logos/angular.png',
  },
  {
    name: 'React Native',
    icon: 'tech-logos/react-native.png',
  },
  {
    name: 'Redux Toolkit',
    icon: 'tech-logos/redux.png',
  },
  {
    name: 'Redux Query',
    icon: 'tech-logos/react-query.svg',
  },
  {
    name: 'NgRx',
    icon: 'tech-logos/ngrx.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tech-logos/tailwind.png',
  },
  {
    name: 'Sass',
    icon: 'tech-logos/sass.png',
  },
  {
    name: 'Styled Components',
    icon: 'tech-logos/styled-components.jpeg',
  },
  {
    name: 'Firebase',
    icon: 'tech-logos/firebase.png',
  },
  {
    name: 'Supabase',
    icon: 'tech-logos/supabase.png',
  },
  {
    name: 'Node JS',
    icon: 'tech-logos/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: 'tech-logos/mongodb.png',
  },
  {
    name: 'git',
    icon: 'tech-logos/git.png',
  },
  {
    name: 'Jest',
    icon: 'tech-logos/Jest.png',
  },
];
