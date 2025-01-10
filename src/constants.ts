import { email, github, linkedin, portrait, ubc, cibc } from "./assets/index";

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
  description: `
      I'm currently a Senior Computer Science student from the University of British Columbia (Vancouver).
      In the past year, as part of UBC's co-op program, I've had the opportunity to work in the industry
      and have gained crucial experience
      `,
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
];

const experiences = [
  {
    title: "Application Developer Co-Op",
    company_name: "CIBC - Alternate Solutions Group",
    icon: cibc,
    date: "September 2024 - May 2025",
    points: [
      "• Designed and Engineered a microservice that interfaces with the client database, systematically extracting and compiling comprehensive hourly and daily reports.",
      "• Streamlined secure file transfers by implementing an internal tool using Go’s SSH library, reducing manual intervention by 99%.",
      "• Engineered an API to extract transaction data from the VISA card network and transform payload into a SQL entry, reducing processing latency by 15%.",
      "• Automated SQL query generation using Python and pandas, accelerating database population by 70% for SIT and UAT environments.",
    ],
    tech: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "dark-blue-gradient",
      },
    ],
  },
  {
    title: "Backend Developer Co-Op",
    company_name: "UBC - Department of Chemistry",
    icon: ubc,
    date: "May 2024 - August 2024",
    points: [
      "• Developed a RESTful API in Python using Flask to interface with the department’s database, enabling researchers to access and modify data.",
      "• Engineered a data pipeline to process and analyze raw data from scientific instruments, reducing processing time by 50%.",
      "• Implemented a web interface using React to visualize data and generate reports, improving data accessibility and analysis.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Codecertain",
    icon: null,
    date: "January 2024 - April 2024",
    points: [
      "• Engineered a data pipeline to process and analyze raw data from scientific instruments, reducing processing time by 50%.",
      "• Implemented a web interface using React to visualize data and generate reports, improving data accessibility and analysis.",
    ],
  },
];

const educations = [
  {
    name: "University of British Columbia",
    icon: ubc,
    degree: "Bachelors in Science - Computer Science",
    years: "2021 - 2026",
    awards: [
      "Dean’s Honor Roll 2021, 2023",
      "Trek Excellence Scholarship for Continuing Students 2021 (Top 5% in faculty)",
    ],
    courses: [
      "CPSC 340 (Machine Learning and Data Mining), CPSC 322 (Introduction to Artificial Intelligence)",
      "CPSC 330 (Applied Machine Learning), CPSC 317 (Internet Computing), CPSC 320 (Algorithm Design & Analysis)",
      "CPSC 313 (Computer Hardware & Operating Systems), CPSC 304 (Relational Databases), CPSC 310 (Software Engineering)",
    ],
  },
];

const projects = [];

export { contacts, aboutInfo, navLinks, experiences, educations, projects };
