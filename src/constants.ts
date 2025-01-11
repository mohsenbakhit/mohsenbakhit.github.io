import {
  email,
  github,
  linkedin,
  ubc,
  cibc,
  unitrack,
  portrait,
} from "./assets/index";

const contacts = [
  {
    icon: email,
    title: "bakhitmohsen@proton.me",
  },
  {
    icon: linkedin,
    title: "https://www.linkedin.com/in/mohsenbakhit/",
  },
  {
    icon: github,
    title: "https://github.com/mohsenbakhit",
  },
];

const aboutInfo = {
  description: `I'm a  CS undergraduate student from the University of British Columbia.
    With a year's worth of industrial software engineering experience, in form on co-ops and internships in startup and corporate environments, I have developed a strong foundation in backend development, data engineering, and cloud computing.
    Beyond coding, I enjoy practicing my C&J and slide tackling strangers on weekends. You may also find me at the local cinema, watching the latest indie flick or planning a tour of a historical city across the ocean.`,
  picture: portrait,
};

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "project",
    title: "Project",
  },
];

const experiences = [
  {
    title: "Application Developer Co-Op",
    company_name: "CIBC - Alternate Solutions Group",
    icon: cibc,
    date: "May 2023 - July 2023",
    points: [
      "Designed and Engineered a micro-service that interfaces with the client database, systematically extracting and compiling comprehensive hourly and daily reports.",
      "Streamlined secure file transfers by implementing an internal tool using Go’s SSH library, reducing manual intervention by 99%.",
      "Engineered an API to extract transaction data from the VISA card network and transform payload into a SQL entry, reducing processing latency by 15%.",
      "Automated SQL query generation for 10K+ rows, accelerating database population for SIT and UAT environments using Python and pandas.",
    ],
    tech: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    title: "Backend Engineer / Research Assistant",
    company_name: "University of British Columbia",
    icon: ubc,
    date: "May 2024 - Sep 2024",
    points: [
      "Developed a web application using FastAPI to establish communication protocols and manage job queuing for Psi4.",
      "Configured web server and HTTPS proxy on an EC2 instance, allowing up to 1024 concurrent requests using NGINX.",
      "Automated SLURM bash script generation for molecular calculations, result parsing for QCEngine, and file transfers to S3.",
    ],
    tech: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Bash",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Codecertain",
    icon: "",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Formulated and tested hypotheses regarding the impact of pull request characteristics (e.g., number of changed lines, merge conflicts, issue attachment) on the likelihood of introducing bugs.",
      "Utilized statistical analysis and hypothesis testing to refine bug-prediction models, boosting their accuracy by 7%.",
      "Engineered an API that scraped and curated pull request, gitdiff and commit hash information for big datasets of Java bugs (i.e. Bugswarm, Defects4j) using Python, BeautifulSoup, and Pandas.",
    ],
    tech: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "sci-kit learn",
        color: "orange-text-gradient",
      },
    ],
  },
];

const educations = [
  {
    name: "University of British Columbia",
    icon: ubc,
    degree: "Bachelors of Science in Computer Science",
    years: "2021 - 2026",
    awards: [
      "Dean’s Honor Roll 2021, 2023",
      "Trek Excellence Scholarship for Continuing Students 2021 (Top 5% in faculty)",
    ],
    involvements: ["UBC Chess Club", "UBC Persian Students Club "],
    courses: [
      "CPSC 340 (Machine Learning and Data Mining), CPSC 317 (Internet Computing), CPSC 320 (Algorithm Design & Analysis)",
      "CPSC 313 (Computer Hardware & Operating Systems), CPSC 304 (Relational Databases), CPSC 310 (Software Engineering)",
      "CPSC 322 (Introduction to Artificial Intelligence), CPSC 436Q (Quantum Computing)",
    ],
  },
];

const certs = [];

const projects = [
  {
    name: "UniTrack",
    description:
      "A web application that helps students track their courses and grades",
    tech: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: " C#",
        color: "purple-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: unitrack,
    source: "https://github.com/mohsenbakhit/can-i-grad",
  },
  {
    name: "Enigmafy",
    description:
      "An iOS application that encrypts and decrypts messages using the Enigma algorithm",
    tech: [
      {
        name: "Swift",
        color: "orange-text-gradient",
      },
    ],
    image: "",
    source: "https://github.com/mohsenbakhit/enigmafy-ios",
  },
  {
    name: "Brainfuck Compiler",
    description: "A Brainfuck compiler that converts Brainfuck code to binary",
    tech: [
      {
        name: "C",
        color: "white-text",
      },
    ],
    image: "",
    source: "https://github.com/mohsenbakhit/brainfuckpiler",
  },
];

export {
  contacts,
  aboutInfo,
  navLinks,
  experiences,
  educations,
  certs,
  projects,
};
