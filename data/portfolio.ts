export type Category = 'AI' | 'SaaS' | 'Mobile' | 'Web';

export interface Scene {
  label: string;
  tech: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  category: Category;
  company: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  scenes: Scene[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface Degree {
  school: string;
  degree: string;
  cgpa: string;
  period: string;
  location: string;
  status?: string;
}

export const settings = {
  showLoader: true,
  sceneSeconds: 2.6,
  hoverPreview: true,
};

export const profile = {
  name: 'Muhammad Haris Nadeem',
  firstName: 'Muhammad',
  lastName: ['Haris', 'Nadeem'] as const,
  shortName: 'M. Haris Nadeem',
  title: 'Full Stack AI Engineer',
  location: 'Karachi, Pakistan',
  email: 'harisnadeemshk@gmail.com',
  phone: '03133960313',
  linkedin: 'https://www.linkedin.com/in/mharis-nadeem/',
  linkedinLabel: 'in/mharis-nadeem',
  intro:
    'I design and ship AI voice agents, RAG services and multi-tenant SaaS, along with the dashboards and mobile apps that run on them. Backends in FastAPI, NestJS and Node.js; frontends in Next.js, Nuxt.js, React and React Native.',
};

export const rotatingWords = ['AI voice agents', 'RAG services', 'multi-tenant SaaS', 'admin dashboards', 'mobile apps'];

export const marquee = ['FastAPI', 'NestJS', 'Next.js', 'OpenAI', 'Weaviate', 'PostgreSQL', 'React Native', 'Vapi AI', 'MongoDB', 'Nuxt.js', 'Prisma', 'Docker'];

export const filters: Array<'All' | Category> = ['All', 'AI', 'SaaS', 'Mobile', 'Web'];

export const projects: Project[] = [
  {
    slug: 'ai-sales-pipeline', name: 'AI Sales Pipeline', category: 'AI', company: 'Servetech Global', year: '2026', role: 'Full Stack AI Engineer',
    stack: ['Python', 'FastAPI', 'Web scrapers', 'Fine-tuned LLMs', 'Voice AI', 'Google Meet'],
    summary: 'Architected an autonomous outbound AI sales pipeline using Python, FastAPI, web scrapers, and fine-tuned LLMs to extract executive leads and conduct multi-language voice calls for automated Google Meet scheduling.',
    scenes: [
      { label: 'Scrape', tech: 'Python scrapers', caption: 'Scrapers crawl company sources for executive contacts.' },
      { label: 'Qualify', tech: 'Fine-tuned LLM', caption: 'A fine-tuned LLM extracts and qualifies each executive lead.' },
      { label: 'Call', tech: 'Multi-language voice', caption: 'A voice agent calls the lead in their own language.' },
      { label: 'Book', tech: 'Google Meet', caption: 'Interested leads get a Google Meet booked automatically.' },
    ],
  },
  {
    slug: 'ready2go-ai-service', name: 'Ready2Go AI Service', category: 'AI', company: 'Servetech Global', year: '2026', role: 'Full Stack AI Engineer',
    stack: ['FastAPI', 'OpenAI', 'Weaviate', 'Vapi AI', 'RAG'],
    summary: 'Designed and integrated Ready2Go AI Service using FastAPI, OpenAI, and Weaviate vector databases for RAG-driven document analysis, alongside Vapi AI voice agents for automated emergency dispatching.',
    scenes: [
      { label: 'Ingest', tech: 'FastAPI', caption: 'Documents arrive through a FastAPI ingestion service.' },
      { label: 'Embed', tech: 'Weaviate', caption: 'Chunks are embedded and indexed in a Weaviate vector store.' },
      { label: 'Retrieve', tech: 'OpenAI + RAG', caption: 'OpenAI answers with context retrieved from the store.' },
      { label: 'Dispatch', tech: 'Vapi AI voice', caption: 'Vapi voice agents handle emergency dispatch calls.' },
    ],
  },
  {
    slug: 'fleetquix', name: 'FleetQuix', category: 'SaaS', company: 'Servetech Global', year: '2026', role: 'Full Stack AI Engineer',
    stack: ['NestJS', 'Microservices', 'PostgreSQL', 'Prisma', 'React', 'TypeScript', 'Vite'],
    summary: 'Engineered FleetQuix multi-tenant trucking SaaS using 9 NestJS microservices with PostgreSQL/Prisma DB-per-tenant isolation, 55+ permission RBAC, and a React + TypeScript (Vite) dispatch interface.',
    scenes: [
      { label: 'Tenant', tech: 'Trucking company', caption: 'Each trucking company signs in as its own tenant.' },
      { label: 'RBAC', tech: '55+ permissions', caption: 'Every request is checked against 55+ role permissions.' },
      { label: 'Services', tech: '9 NestJS microservices', caption: 'Nine NestJS microservices split the domain.' },
      { label: 'Isolate', tech: 'Postgres per tenant', caption: 'Data lands in a PostgreSQL database per tenant via Prisma.' },
      { label: 'Dispatch', tech: 'React + TS (Vite)', caption: 'Dispatchers run loads from a React + TypeScript interface.' },
    ],
  },
  {
    slug: 'ready2go-platform', name: 'Ready2Go Platform', category: 'Mobile', company: 'Servetech Global', year: '2026', role: 'Full Stack AI Engineer',
    stack: ['Expo', 'React Native', 'Next.js', 'MongoDB Atlas', 'Cloudinary', 'EAS'],
    summary: 'Developed the Ready2Go emergency platform end-to-end, encompassing an Expo/React Native mobile app, Next.js admin portal, MongoDB Atlas REST API, Cloudinary, and EAS over-the-air updates.',
    scenes: [
      { label: 'Mobile app', tech: 'Expo / React Native', caption: 'Users raise an emergency from the Expo mobile app.' },
      { label: 'REST API', tech: 'MongoDB Atlas', caption: 'A REST API on MongoDB Atlas records every incident.' },
      { label: 'Media', tech: 'Cloudinary', caption: 'Photos and files upload straight to Cloudinary.' },
      { label: 'Admin', tech: 'Next.js portal', caption: 'Operators manage incidents in a Next.js admin portal.' },
      { label: 'Updates', tech: 'EAS OTA', caption: 'Fixes ship to phones as EAS over-the-air updates.' },
    ],
  },
  {
    slug: 'fiverr-crm', name: 'Fiverr CRM', category: 'Web', company: 'Servetech Global', year: '2026', role: 'Full Stack AI Engineer',
    stack: ['Next.js', 'MariaDB'],
    summary: 'Built a custom internal Fiverr CRM using Next.js and MariaDB to centralize gig lead management, track buyer communication pipelines, and automate order fulfillment workflows.',
    scenes: [
      { label: 'Leads', tech: 'Gig inbox', caption: 'Gig leads from every account land in one place.' },
      { label: 'Pipeline', tech: 'Next.js', caption: 'Buyer conversations move through a tracked pipeline.' },
      { label: 'Orders', tech: 'MariaDB', caption: 'Accepted offers become orders stored in MariaDB.' },
      { label: 'Fulfil', tech: 'Automation', caption: 'Fulfilment steps run as automated workflows.' },
    ],
  },
  {
    slug: 'towcentric', name: 'TowCentric', category: 'Web', company: 'Swyft Logic', year: '2025', role: 'Software Engineer',
    stack: ['Nuxt.js', 'MSSQL'],
    summary: 'Working on the TowCentric project using Nuxt.js and MSSQL, developing both frontend and backend functionalities, including scalable UI implementation and database integration.',
    scenes: [
      { label: 'Request', tech: 'Tow job', caption: 'A tow job enters the system.' },
      { label: 'Interface', tech: 'Nuxt.js UI', caption: 'Staff work the job through a scalable Nuxt.js UI.' },
      { label: 'Backend', tech: 'Nuxt server', caption: 'Backend routes apply the business rules.' },
      { label: 'Store', tech: 'MSSQL', caption: 'Everything persists to MSSQL.' },
    ],
  },
  {
    slug: 'experihaus', name: 'Experihaus', category: 'SaaS', company: 'Swyft Logic', year: '2025', role: 'Software Engineer',
    stack: ['React', 'NestJS', 'PostgreSQL'],
    summary: 'Developed Experihaus using React + NestJS + PostgreSQL, focusing on backend APIs and system architecture.',
    scenes: [
      { label: 'Client', tech: 'React', caption: 'The React client calls a typed API.' },
      { label: 'API', tech: 'NestJS', caption: 'NestJS modules expose the backend APIs.' },
      { label: 'Domain', tech: 'Architecture', caption: 'Services keep the domain logic separated.' },
      { label: 'Data', tech: 'PostgreSQL', caption: 'PostgreSQL holds the relational model.' },
    ],
  },
  {
    slug: 'smart-parking', name: 'Smart Parking', category: 'Web', company: 'Swyft Logic', year: '2025', role: 'Software Engineer',
    stack: ['Nuxt.js', 'Payment gateways', 'REST APIs'],
    summary: 'Engineered full-stack features for the Smart Parking Web App using Nuxt.js, integrating secure payment gateways and API workflows to deliver seamless checkout experiences and optimized system performance.',
    scenes: [
      { label: 'Find', tech: 'Nuxt.js', caption: 'Drivers find an open spot in the web app.' },
      { label: 'Reserve', tech: 'API workflow', caption: 'The spot is held through an API workflow.' },
      { label: 'Pay', tech: 'Payment gateway', caption: 'Checkout runs through a secure payment gateway.' },
      { label: 'Park', tech: 'Confirmation', caption: 'The driver gets a confirmed booking.' },
    ],
  },
  {
    slug: 'global-ecommerce-alliance', name: 'Global Ecommerce Alliance', category: 'Web', company: 'Iberianz', year: '2025', role: 'Full Stack Developer',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    summary: 'Led full-stack development of Global Ecommerce Alliance, a web-based portal, using the MERN stack (Next.js, MongoDB, Express, and Node.js), and managed its CI/CD pipeline, servers, and cloud rollout.',
    scenes: [
      { label: 'Portal', tech: 'Next.js', caption: 'Members use the alliance through a web portal.' },
      { label: 'API', tech: 'Node.js + Express', caption: 'An Express API on Node.js serves the portal.' },
      { label: 'Records', tech: 'MongoDB', caption: 'Portal data is stored in MongoDB.' },
      { label: 'Ship', tech: 'CI/CD', caption: 'Releases go out through the deployment pipeline.' },
    ],
  },
  {
    slug: 'activesos', name: 'ActiveSOS', category: 'Mobile', company: 'Jumppace', year: '2024', role: 'Associate Software Engineer',
    stack: ['Node.js', 'MongoDB', 'Next.js', 'MUI'],
    summary: 'Built the backend and admin dashboard for the Child Tracing App (ActiveSOS) using Node.js, MongoDB, and Next.js with MUI, enabling seamless tracking and management.',
    scenes: [
      { label: 'Device', tech: 'Child tracing app', caption: 'The app reports a child’s location.' },
      { label: 'Backend', tech: 'Node.js', caption: 'A Node.js backend receives each update.' },
      { label: 'Store', tech: 'MongoDB', caption: 'Location history is stored in MongoDB.' },
      { label: 'Track', tech: 'Next.js + MUI', caption: 'Admins track and manage from the dashboard.' },
    ],
  },
  {
    slug: 'pley', name: 'Pley', category: 'Web', company: 'Jumppace', year: '2024', role: 'Associate Software Engineer',
    stack: ['Nest.js', 'MongoDB', 'Next.js', 'MUI'],
    summary: 'Designed and implemented the backend and admin dashboard for the Social Media Posting App (Pley) using Nest.js, MongoDB, and Next.js with MUI, facilitating content scheduling and posting.',
    scenes: [
      { label: 'Compose', tech: 'Pley app', caption: 'A post is written once.' },
      { label: 'Schedule', tech: 'Nest.js', caption: 'Nest.js schedules it for the right time.' },
      { label: 'Queue', tech: 'MongoDB', caption: 'Scheduled posts wait in MongoDB.' },
      { label: 'Publish', tech: 'Next.js + MUI', caption: 'Posts go out and are managed from the dashboard.' },
    ],
  },
  {
    slug: 'warrior-for-children', name: 'Warrior for Children', category: 'Web', company: 'Jumppace', year: '2024', role: 'Associate Software Engineer',
    stack: ['Express.js', 'MongoDB', 'Next.js', 'MUI'],
    summary: 'Led the backend and admin dashboard development for the Child Charity App (Warrior for Children) using Express.js, MongoDB, and Next.js with MUI, supporting donation management.',
    scenes: [
      { label: 'Donate', tech: 'Charity app', caption: 'A supporter makes a donation.' },
      { label: 'API', tech: 'Express.js', caption: 'An Express.js API records the gift.' },
      { label: 'Records', tech: 'MongoDB', caption: 'Donations are kept in MongoDB.' },
      { label: 'Manage', tech: 'Next.js + MUI', caption: 'The charity manages donations from the admin.' },
    ],
  },
  {
    slug: 'caribo', name: 'Caribo', category: 'Mobile', company: 'Jumppace', year: '2024', role: 'Associate Software Engineer',
    stack: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS'],
    summary: 'Developed the backend of the mobile app and admin dashboard for the Car and Boat Rental Platform (Caribo) using Node.js, Express, MongoDB, Next.js, and Tailwind CSS.',
    scenes: [
      { label: 'Browse', tech: 'Rental app', caption: 'A renter looks for a car or a boat.' },
      { label: 'Book', tech: 'Node.js + Express', caption: 'The Express API takes the booking.' },
      { label: 'Store', tech: 'MongoDB', caption: 'Listings and bookings are kept in MongoDB.' },
      { label: 'Admin', tech: 'Next.js + Tailwind', caption: 'Operators manage the fleet from the admin dashboard.' },
    ],
  },
  {
    slug: 'conversational-chatbots', name: 'Conversational Chatbots', category: 'AI', company: 'Increase Rev', year: '2023', role: 'Web Developer',
    stack: ['Python', 'Flask', 'FastAPI', 'NLP', 'BeautifulSoup', 'Scrapy'],
    summary: 'Engineered intelligent conversational chatbots using Python frameworks (Flask, FastAPI), leveraging machine learning and NLP analytics to continuously refine model accuracy and context handling.',
    scenes: [
      { label: 'Message', tech: 'User input', caption: 'A user sends a message.' },
      { label: 'Understand', tech: 'NLP', caption: 'NLP works out intent and context.' },
      { label: 'Respond', tech: 'Flask / FastAPI', caption: 'A Python service replies.' },
      { label: 'Refine', tech: 'Analytics', caption: 'Analytics feed back to improve accuracy.' },
    ],
  },
];

export const jobs: Job[] = [
  {
    company: 'Servetech Global', role: 'Full Stack AI Engineer', period: 'May 2026 – Present', location: 'Karachi, Pakistan',
    points: [
      'Architected an autonomous outbound AI sales pipeline using Python, FastAPI, web scrapers, and fine-tuned LLMs to extract executive leads and conduct multi-language voice calls for automated Google Meet scheduling.',
      'Designed and integrated Ready2Go AI Service using FastAPI, OpenAI, and Weaviate vector databases for RAG-driven document analysis, alongside Vapi AI voice agents for automated emergency dispatching.',
      'Engineered FleetQuix multi-tenant trucking SaaS using 9 NestJS microservices with PostgreSQL/Prisma DB-per-tenant isolation, 55+ permission RBAC, and a React + TypeScript (Vite) dispatch interface.',
      'Developed the Ready2Go emergency platform end-to-end, encompassing an Expo/React Native mobile app, Next.js admin portal, MongoDB Atlas REST API, Cloudinary, and EAS over-the-air updates.',
      'Built a custom internal Fiverr CRM using Next.js and MariaDB to centralize gig lead management, track buyer communication pipelines, and automate order fulfillment workflows.',
    ],
  },
  {
    company: 'Swyft Logic Pvt Ltd', role: 'Software Engineer', period: 'April 2025 – August 2026', location: 'Karachi, Pakistan',
    points: [
      'Working on the TowCentric project using Nuxt.js and MSSQL, developing both frontend and backend functionalities, including scalable UI implementation and database integration.',
      'Developed Experihaus using React + NestJS + PostgreSQL, focusing on backend APIs and system architecture.',
      'Engineered full-stack features for the Smart Parking Web App using Nuxt.js, integrating secure payment gateways and API workflows to deliver seamless checkout experiences and optimized system performance.',
    ],
  },
  {
    company: 'Iberianz Pvt Ltd', role: 'Full Stack Developer', period: 'December 2024 – November 2025', location: 'Karachi, Pakistan',
    points: [
      'Led the full-stack development of Global Ecommerce Alliance, a web-based portal, using the MERN stack (Next.js, MongoDB, Express, and Node.js) to ensure a robust and scalable architecture.',
      'Managed the entire deployment pipeline, including CI/CD automation, server management, and cloud infrastructure for smooth production rollouts.',
    ],
  },
  {
    company: 'Jumppace Pvt Ltd', role: 'Associate Software Engineer', period: 'December 2023 – December 2024', location: 'Karachi, Pakistan',
    points: [
      'Built backend systems and dashboards using Node.js, Express.js, Nest.js, MongoDB, Next.js.',
      'Built the backend and admin dashboard for the Child Tracing App (ActiveSOS) using Node.js, MongoDB, and Next.js with MUI, enabling seamless tracking and management.',
      'Designed and implemented the backend and admin dashboard for the Social Media Posting App (Pley) using Nest.js, MongoDB, and Next.js with MUI, facilitating content scheduling and posting.',
      'Led the backend and admin dashboard development for the Child Charity App (Warrior for Children) using Express.js, MongoDB, and Next.js with MUI, supporting donation management.',
      'Developed the backend of the mobile app and admin dashboard for the Car and Boat Rental Platform (Caribo) using Node.js, Express, MongoDB, Next.js, and Tailwind CSS.',
    ],
  },
  {
    company: 'Increase Rev', role: 'Web Developer', period: 'January 2023 – June 2023', location: 'Karachi, Pakistan',
    points: [
      'Engineered intelligent conversational chatbots using Python frameworks (Flask, FastAPI), leveraging machine learning and NLP analytics to continuously refine model accuracy and context handling.',
      'Built scalable web applications, including an interactive multiplayer gaming platform, and implemented automated web scraping pipelines using BeautifulSoup and Scrapy for data extraction.',
    ],
  },
];

export const stack: StackGroup[] = [
  { title: 'Languages & Frameworks', items: ['Node.js', 'JavaScript', 'TypeScript', 'Python', 'Express.js', 'Nest.js', 'Fastify', 'Next.js', 'Nuxt.js', 'Angular.js', 'Flask', 'Django', 'FastAPI'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MSSQL', 'MariaDB', 'MySQL', 'Redis', 'Weaviate', 'Prisma ORM'] },
  { title: 'Cloud & Services', items: ['AWS S3', 'Cloudinary', 'Twilio', 'Firebase FCM', 'Vapi AI', 'Azure AI Studio', 'EAS', 'GitHub Actions'] },
  { title: 'Developer Tools', items: ['Visual Studio Code', 'PyCharm', 'Postman', 'Jupyter Notebook', 'Google Colab', 'Docker Desktop', 'GitHub', 'Playwright'] },
];

export const education: Degree[] = [
  {
    school: 'NED University', degree: 'Master in Data Science', cgpa: '3.57',
    period: 'January 2026 – June 2027 (expected)', location: 'Karachi, Pakistan',
    status: 'In progress — 2nd semester, weekend program',
  },
  {
    school: 'Iqra University', degree: 'Bachelor of Computer Science', cgpa: '3.7',
    period: 'March 2021 – February 2025', location: 'Karachi, Pakistan',
  },
];

export const facts = [
  { value: '2023', label: 'Shipping production code since' },
  { value: '5', label: 'Engineering teams' },
  { value: String(projects.length), label: 'Products in this portfolio' },
  { value: '3.7', label: 'CGPA, BS Computer Science' },
];

export const pad = (n: number) => String(n).padStart(2, '0');
