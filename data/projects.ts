export interface Project {
  slug: string;
  number: string;
  total: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  architecture: string[];
  diff: {
    from: string;
    to: string;
    label: string;
  };
  tags: string[];
  tone: 'cloud' | 'ml' | 'resume' | 'social' | 'insurance' | 'hotel' | 'tourism';
  githubUrl: string;
  keyFeatures: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'cloud-guard',
    number: '01',
    total: '07',
    title: 'Cloud Guard',
    category: 'Cloud Security · DevSecOps',
    role: 'Security Researcher & Developer',
    timeline: '2025',
    description:
      'A cloud infrastructure security scanner designed to inspect AWS resource misconfigurations, enforce IAM least-privilege policies, and provide early posture awareness for developers.',
    longDescription:
      'Cloud Guard was developed to address common security oversights in cloud environments, where misconfigured IAM roles, exposed S3 storage buckets, and overly permissive security groups frequently create severe attack vectors. The tool conducts automated scans against infrastructure definitions and AWS APIs, highlighting deviations from CIS benchmarks and generating actionable remediation reports.',
    problem:
      'Developers moving fast often create overly permissive IAM policies (e.g. Action: "*") and inadvertently leave cloud storage buckets readable to the public internet.',
    solution:
      'A modular Python auditing daemon that traverses AWS configurations, evaluates access policies against least-privilege rules, and reports compliance status prior to production deployment.',
    architecture: [
      'AWS IAM Policy Evaluator and Role Traversal Module',
      'S3 Bucket ACL and Public Access Block Verifier',
      'Security Group Ingress/Egress Rule Inspector',
      'JSON/YAML Compliance Report Generator',
    ],
    diff: {
      from: 'Unverified Posture',
      to: 'Zero Misconfig',
      label: 'IAM & S3 Policy Compliance',
    },
    tags: ['Python', 'Cloud Security', 'AWS', 'JSON/YAML', 'DevSecOps', 'Docker'],
    tone: 'cloud',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Automated scanning for wildcard IAM permissions',
      'S3 bucket policy auditing and public access verification',
      'Security group port range and CIDR ingress inspection',
      'Exportable JSON and terminal compliance matrices',
    ],
  },
  {
    slug: 'fake-news-detection',
    number: '02',
    total: '07',
    title: 'Fake News Detection',
    category: 'Applied AI · Natural Language Processing',
    role: 'Machine Learning Developer',
    timeline: '2024 — 2025',
    description:
      'An NLP classification pipeline trained on verified news datasets. Extracts linguistic features and TF-IDF n-grams to identify misinformation and assess statement credibility.',
    longDescription:
      'With the exponential surge of digital misinformation, distinguishing credible journalism from fabricated narratives requires automated, data-driven linguistic verification. This project implements a machine learning pipeline that preprocesses raw textual content, extracts n-gram TF-IDF representations, and classifies articles using trained statistical classifiers with high benchmark precision.',
    problem:
      'Manual news verification cannot scale to real-time digital feeds where misinformation spreads faster than human fact-checkers can respond.',
    solution:
      'An end-to-end NLP classification pipeline that processes article headlines and body text, removes noise and stopwords, calculates n-gram weights, and predicts credibility with ~94% validation accuracy.',
    architecture: [
      'Text Preprocessing (Tokenization, Lemmatization, Stopwords)',
      'TF-IDF Vectorization with Unigram and Bigram Feature Extraction',
      'Supervised Classification Model (Scikit-Learn Logistic Regression & Passive Aggressive)',
      'REST API Endpoint built with Flask for live text scoring',
    ],
    diff: {
      from: '68% Baseline',
      to: '94.2% Accuracy',
      label: 'TF-IDF NLP Benchmark',
    },
    tags: ['Python', 'Scikit-Learn', 'NLP', 'NLTK', 'Flask API', 'Pandas'],
    tone: 'ml',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Trained on 40,000+ benchmark labeled news articles',
      'High-precision TF-IDF feature extraction with n-gram weighting',
      'Real-time confidence scoring and classification breakdown',
      'Lightweight Flask inference API for easy client integration',
    ],
  },
  {
    slug: 'resume-extraction',
    number: '03',
    total: '07',
    title: 'Resume Extraction Engine',
    category: 'Information Extraction · Document Parsing',
    role: 'ML & Automation Engineer',
    timeline: '2024',
    description:
      'An intelligent document processor that ingests multi-format CVs, parses semi-structured content, and scores candidate experience, skills, and education against role requirements.',
    longDescription:
      'Recruitment pipelines receive thousands of heterogeneous resumes across PDF, DOCX, and plain-text formats. This automated parsing engine leverages regex patterns and natural language entity recognition to extract applicant contact information, educational history, technical competencies, and work experience, converting unstructured files into clean JSON payloads.',
    problem:
      'Recruiters spend an average of 6–10 minutes manually skimming each resume to extract basic qualification data.',
    solution:
      'An automated document extraction pipeline that parses resumes in under 500ms, mapping skills and qualifications into structured JSON for automated screening and role matching.',
    architecture: [
      'Document Ingestion & Text Extraction (PyPDF, pdfminer, docx2txt)',
      'Named Entity Recognition & Regex Pattern Matcher for Contact Details',
      'Skill Ontology Tokenizer and Educational Degree Normalizer',
      'Candidate Scoring and Role-Fit Matching Module',
    ],
    diff: {
      from: 'Manual Screen',
      to: '< 500ms Parse',
      label: 'Structured JSON Pipeline',
    },
    tags: ['Python', 'Regex', 'SpaCy / NLP', 'PyPDF', 'Data Extraction', 'JSON'],
    tone: 'resume',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Multi-format support: PDF, DOCX, and TXT parsing',
      'Automated extraction of Name, Email, Phone, Skills, and Education',
      'Configurable skill ontology matching role requirements',
      'JSON output schema ready for ATS ingestion',
    ],
  },
  {
    slug: 'closekeep',
    number: '04',
    total: '07',
    title: 'CloseKeep',
    category: 'Frontend & Mobile · Social Architecture',
    role: 'Frontend Architect',
    timeline: '2024',
    description:
      'A friendship-focused social platform built around private inner circles. Emphasizes meaningful touchpoints, shared memory timelines, and quiet activity feeds over algorithmic noise.',
    longDescription:
      'Modern social media platforms optimize for infinite scrolling, ad engagement, and algorithmic virality rather than fostering genuine relationships. CloseKeep was designed as an antidote: a quiet, intentional space for close friends and families to share milestones, track shared memories, and maintain contact without vanity metrics or behavioral loops.',
    problem:
      'Conventional social networks are crowded with algorithmic recommendations, ads, and passive engagement that erode real interpersonal bonds.',
    solution:
      'A private, circle-first social PWA providing chronological timelines, shared memory scrapbooks, and gentle contact reminder prompts.',
    architecture: [
      'React 19 Frontend with Tailwind CSS and responsive layout',
      'Firebase Authentication and Realtime Firestore synchronization',
      'Circle-based access control and encrypted media storage',
      'Offline-capable Progressive Web Application (PWA) manifest',
    ],
    diff: {
      from: 'Algorithmic Noise',
      to: 'Realtime Circles',
      label: 'Private Touchpoints',
    },
    tags: ['React', 'Firebase', 'Tailwind CSS', 'PWA / Mobile', 'TypeScript'],
    tone: 'social',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Invite-only private friendship circles',
      'Chronological activity feed with zero ads or recommendations',
      'Shared group memory timeline and photo scrapbooks',
      'Mobile-first responsive interface with tactile touch gestures',
    ],
  },
  {
    slug: 'insurance-system',
    number: '05',
    total: '07',
    title: 'Insurance Management System',
    category: 'Enterprise Software · InsureTech',
    role: 'Software Engineer',
    timeline: '2023 — 2024',
    description:
      'An end-to-end insurance operations system designed for underwriting workflows, policy lifecycle tracking, claim submission validation, and role-based agent authorizations.',
    longDescription:
      'Insurance administration involves complex multi-party workflows between policyholders, insurance agents, adjusters, and underwriters. This web application provides a structured enterprise portal managing policies across automotive, health, and property lines, complete with automated claim validation and audit trail recording.',
    problem:
      'Paper-based or fragmented insurance records lead to delayed claim processing, documentation loss, and compliance tracking difficulties.',
    solution:
      'A centralized database and web portal that digitizes the policy lifecycle, provides real-time claim status tracking, and enforces role-based access for staff.',
    architecture: [
      'Relational Database Schema with ACID transaction guarantees',
      'Underwriting State Machine (Draft → Under Review → Approved → Active)',
      'Claims Intake and Document Verification Pipeline',
      'Role-Based Access Control (Admin, Underwriter, Agent, Customer)',
    ],
    diff: {
      from: 'Paper Claims',
      to: 'Automated Intake',
      label: 'Underwriting State Machine',
    },
    tags: ['Web Application', 'Database Design', 'Business Logic', 'SQL', 'Security'],
    tone: 'insurance',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'End-to-end policy issuance and premium tracking',
      'Multi-stage claim verification and payment disbursement',
      'Granular role-based authorization ensuring data privacy',
      'Exportable financial auditing and client status ledgers',
    ],
  },
  {
    slug: 'hotel-reservation',
    number: '06',
    total: '07',
    title: 'Hotel Reservation System',
    category: 'Desktop Engineering · Systems Architecture',
    role: 'Lead C# Developer',
    timeline: '2023 — 2024',
    description:
      'A high-performance desktop application for hotel guest management. Handles real-time room occupancy state machines, dynamic pricing, and edge-case cancellation handling.',
    longDescription:
      'Desktop systems in hospitality require zero latency, offline reliability, and bulletproof database synchronization. Built in C# .NET with SQL Server, this system models hotel room availability across multiple wings, tracking check-ins, early departures, billing folios, and housekeeping maintenance statuses with transactional integrity.',
    problem:
      'Front-desk double-booking errors and manual room ledger discrepancies cause customer dissatisfaction and lost revenue.',
    solution:
      'A high-speed desktop application featuring an interactive room occupancy matrix that updates room states in real time with transactional locking.',
    architecture: [
      'C# .NET Architecture with Model-View-Controller (MVC) separation',
      'Room State Machine (Available, Reserved, Occupied, Maintenance)',
      'SQL Server Database with stored procedures for transaction locking',
      'Guest Billing Folio and Printable Receipt Generator',
    ],
    diff: {
      from: 'Manual Log',
      to: 'Realtime Grid',
      label: 'Room State Machine',
    },
    tags: ['C#', '.NET', 'WPF / WinForms', 'SQL Server', 'OOP Design', 'Desktop'],
    tone: 'hotel',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Visual multi-floor room occupancy matrix',
      'Real-time reservation booking, modification, and cancellation',
      'Automated bill calculation including room rate, amenities, and taxes',
      'Daily occupancy statistics and financial summary reporting',
    ],
  },
  {
    slug: 'tourism-management',
    number: '07',
    total: '07',
    title: 'Tourism Management System',
    category: 'Full-Stack Web · E-Commerce',
    role: 'Backend & Web Developer',
    timeline: '2023',
    description:
      'A web portal connecting travelers with regional tours, historical attractions, and local hospitality providers across Ethiopia, featuring tour booking and guide assignments.',
    longDescription:
      'Ethiopia boasts unique historical and natural destinations—from the rock-hewn churches of Lalibela to the peaks of the Simien Mountains. This web application provides a centralized booking and catalog platform where tourists can discover verified itineraries, book licensed local guides, and manage travel reservations.',
    problem:
      'Tourists struggle with fragmented tour information and unreliable booking channels when arranging trips to regional heritage sites.',
    solution:
      'A responsive web platform showcasing curated itineraries with online booking, guide scheduling, and customer support coordination.',
    architecture: [
      'PHP Backend with MySQL Database Management',
      'Destination Catalog with Dynamic Filter and Category Search',
      'Reservation Booking Cart and Tour Date Scheduler',
      'Administrative Content Management System for Tour Guides',
    ],
    diff: {
      from: 'Fragmented Info',
      to: 'Unified Portal',
      label: 'E-Commerce & Booking',
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5 / CSS3', 'REST API', 'Responsive'],
    tone: 'tourism',
    githubUrl: 'https://github.com/dagneget',
    keyFeatures: [
      'Interactive destination explorer for Ethiopian heritage sites',
      'Direct tour booking and guide reservation workflow',
      'Admin portal for managing tour availability and customer bookings',
      'Responsive design for both desktop visitors and mobile travelers',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
