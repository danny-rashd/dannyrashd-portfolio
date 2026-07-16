// ─────────────────────────────────────────────
// DATES — the only thing you need to update
// when a milestone is hit. Everything else
// (certs, skills, projects, resume) switches
// automatically on the date you set here.
// ─────────────────────────────────────────────
const dates = {
  dp900:       "2026-08-12", // Azure DP-900 cert target — set to actual pass date
  databricks:  "2026-08-01", // Databricks cert target — also triggers resume switch + ML skill removal
  dePortfolio: "2099-01-01", // Change to today's date when de-portfolio project is shipped
};

const isAfter = (dateStr) => new Date() >= new Date(dateStr);

// ─────────────────────────────────────────────
// BIO
// ─────────────────────────────────────────────
export const bio = {
  name: "Danial Rashid",
  role: "Data Engineer",
  location: "Kuala Lumpur, Malaysia",
  summary:
    "Software engineer with a data engineering focus and ~4 years of experience building ETL pipelines, data models, and analytics solutions in Python and SQL. First Class Honours graduate in Business Intelligence and Analytics with hands-on delivery across healthcare, defence, and AI domains. Currently deepening expertise in cloud data infrastructure and modern data stack tooling.",
  email: "danny.rashd@gmail.com",
  github: "https://github.com/danny-rashd",
  linkedin: "https://www.linkedin.com/in/dannyrashd/",
};

// Resume switches on dates.databricks automatically
export const resumeConfig = {
  before: "/resume_before.pdf",
  after: "/resume_after.pdf",
  switchDate: dates.databricks,
};

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    company: "Mindmatics Sdn Bhd",
    url: "https://mindmatics.my/",
    logo: "/images/mindmatics.webp",
    role: "Software Engineer — Data Engineering Focus",
    period: "Sep 2022 – Present",
    description:
      "Designed and maintained automated daily ETL batch jobs ingesting from legacy databases, REST APIs, and CSV/Excel files — including deduplication logic for patient records — delivering processed data to a target database powering downstream dashboards. Designed a military healthcare relational database spanning ~230 tables across 20+ modules. Owned the full data layer for Power BI dashboards across multiple military health units — SQL query writing, data transformation, and dashboard publishing.",
    tags: ["Python", "SQL", "PostgreSQL", "ETL", "Power BI", "Data Modelling"],
  },
  {
    company: "Selangor Human Resource Development Centre (SHRDC)",
    url: "https://www.shrdc.org.my/",
    logo: "/images/shrdc.png",
    role: "Data Science Trainee",
    period: "Jun 2022 – Aug 2022",
    description:
      "Built and evaluated machine learning models using Scikit-learn for structured data classification tasks. Performed exploratory data analysis and preprocessing using Python and SQL to prepare training datasets. Developed data visualisations and analytical dashboards to communicate model insights to non-technical stakeholders.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "SQL"],
  },
  {
    company: "Skymind CNS Sdn Bhd",
    url: "https://skymind.global/",
    logo: "/images/skymind.png",
    role: "Junior AI Engineer",
    period: "Mar 2022 – May 2022",
    description:
      "Developed a deep learning web application for Malay-language sentiment analysis on Twitter data using TensorFlow. Automated database cleaning and population workflows via Python scripting. Designed and deployed RESTful APIs for an internal admin dashboard.",
    tags: ["Python", "TensorFlow", "NLP", "REST APIs"],
  },
  {
    company: "Mesiniaga Berhad",
    url: "https://www.mesiniaga.com.my/",
    logo: "/images/mesiniaga.png",
    role: "IT Support Engineer (Intern)",
    period: "Feb 2021 – Aug 2021",
    description:
      "Provided on-site IT support and maintained technical documentation for UEM Sunrise Berhad's IT operations.",
    tags: ["IT Support", "Technical Documentation"],
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    institution: "International Islamic University Malaysia (IIUM)",
    degree: "Bachelor of Information Technology (Hons) — First Class",
    major: "Business Intelligence and Analytics",
    period: "Jan 2017 – Sep 2021",
    note: "CGPA 3.85 · Dean's List — 4 Semesters",
  },
];

// ─────────────────────────────────────────────
// CERTIFICATIONS
// DP-900 appears after dates.dp900
// Databricks appears after dates.databricks
// ─────────────────────────────────────────────
export const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google Career Certificates",
  },
  {
    title: "Certified Engineer in Computer Vision",
    issuer: "Skymind Education Group",
  },
  isAfter(dates.dp900) && {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
  },
  isAfter(dates.databricks) && {
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
  },
].filter(Boolean);

// ─────────────────────────────────────────────
// SKILLS
// "in progress" entries drop off when their
// cert is earned. ML/AI skills drop off when
// both certs are live (they dilute DE signal).
// ─────────────────────────────────────────────
export const skills = {
  "data engineering": [
    "Python",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Pandas",
    "NumPy",
    "ETL / Batch Processing",
    "Data Modelling",
    "Power BI",
    "Tableau",
  ],
  "engineering": [
    "Git",
    "Docker",
    ...(!isAfter(dates.databricks) ? ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision"] : []),
  ],
  "in progress": [
    ...(!isAfter(dates.dp900)      ? ["Azure (DP-900)"] : []),
    "Apache Airflow",
    "dbt",
    "PySpark",
    ...(!isAfter(dates.databricks) ? ["Databricks"] : []),
  ],
};

// ─────────────────────────────────────────────
// PROJECTS
// de-portfolio appears after dates.dePortfolio
// ─────────────────────────────────────────────
export const projects = [
  isAfter(dates.dePortfolio) && {
    title: "de-portfolio",
    description:
      "End-to-end data pipeline ingesting Twitter data, processing sentiment scores with a Python NLP model, orchestrated with Apache Airflow, loaded into PostgreSQL, transformed with dbt, and visualised in Power BI.",
    tech: ["Python", "Apache Airflow", "PostgreSQL", "dbt", "Power BI", "NLP"],
    github: "https://github.com/danny-rashd/de-portfolio",
    demo: "",
  },
  {
    title: "lexio",
    description:
      "Full-stack language learning application with a FastAPI backend, JWT authentication, and relational data modelling via SQLAlchemy. Implements spaced repetition logic for vocabulary retention.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "React.js"],
    github: "https://github.com/danny-rashd/lexio",
    demo: "",
  },
  {
    title: "malaya-twitter-sentiment",
    description:
      "End-to-end pipeline that ingests Malay-language tweets, runs them through a TensorFlow sentiment classification model, and serves predictions via a Java web application. Covers data ingestion, model inference, and result delivery in a single flow.",
    tech: ["Python", "TensorFlow", "NLP", "Java"],
    github: "https://github.com/danny-rashd/malaya-twitter-sentiment",
    demo: "",
  },
].filter(Boolean);
