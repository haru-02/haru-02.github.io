<template>
  <div class="careers-container terminal-card">
    <h1>Career Overview</h1>

    <!-- Work Experience -->
    <div class="section">
      <h2>Work Experience</h2>
      <div class="card" v-for="job in work" :key="job.role">
        <h3>{{ job.role }}</h3>
        <p class="inst">{{ job.company }}</p>
        <p class="meta">{{ job.location }} • {{ job.period }}</p>
        <ul>
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>
    </div>

    <!-- Skills -->
    <div class="section">
      <h2>Skills</h2>
      <div class="card">
        <template v-for="(items, category) in skills" :key="category">
          <h3>{{ category }}</h3>
          <div class="pill-row">
            <span class="pill" v-for="s in items" :key="s">{{ s }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- Education -->
    <div class="section">
      <h2>Education</h2>
      <div class="card" v-for="edu in education" :key="edu.degree">
        <h3>{{ edu.degree }}</h3>
        <p class="inst">{{ edu.institution }}</p>
        <p class="meta">{{ edu.location }} • {{ edu.year }}</p>
        <p class="details">{{ edu.details }}</p>
      </div>
    </div>

    <!-- Certifications -->
    <div class="section">
      <h2>Certifications</h2>
      <div class="card" v-for="cert in certifications" :key="cert.name">
        <h3>{{ cert.name }}</h3>
        <p class="meta">{{ cert.issuer }} — {{ cert.year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const work = [
  {
    role: 'Founding Software Engineer (Security Engineering)',
    company: 'Jaunt',
    location: 'remote',
    period: 'Feb 2026 – Aug 2026',
    bullets: [
      'Owned the end-to-end content ingestion and data-processing pipeline for ~40,000 locations across London and New York, transforming heterogeneous external sources into production-ready geographic, historical, and venue data used by the consumer navigation application.',
      'Designed automated Python workflows to scrape, clean, validate, geotag, deduplicate, and enrich location records using source-of-truth data from multiple external databases and APIs, improving overall data production readiness from 40% to 95%.',
      'Built an AWS ingestion pipeline using Lambda, SQS, and S3 to asynchronously process and store generated content for downstream retrieval by the application.',
      'Integrated Gemini models on Google Cloud with contextual web search to generate and validate location descriptions, historical stories, opening hours, ticket information, accessibility metadata, and other structured attributes while retaining source provenance.',
      'Reduced a largely manual data processing workflow from approximately one month to three days by developing reusable automation that queried PostgreSQL records, identified missing or inconsistent fields, and orchestrated targeted cleanup and enrichment workflows.',
      'Developed validation and regression tests for data-processing scripts and introduced guardrails to detect malformed records, unintended data loss, and incorrect transformations before publishing results to production.',
      'Built a historian-facing timeline and fact-checking workflow to surface chronological inconsistencies and contested facts in AI-enriched data before downstream use.',
      'Extended the ingestion pipeline to support geospatial navigation waypoints and polygon-based geographic data for additional cities, enabling reuse of the same processing architecture across new datasets and product features.',
      'Developed data classification and filtering workflows for food-tour experiences, processing restaurant pricing, cuisine, menus, and other attributes to support personalized tour experiences ranging from grab-and-go to fine dining.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Al Sabahia Trading and Business LLC',
    location: 'Muscat, Oman',
    period: 'Jan 2025 – Feb 2026',
    bullets: [
      'Designed and implemented secure internal software and automation workflows for a 20-employee organization, replacing manual paper-based processes with centralized digital systems.',
      'Built automated reconciliation and logging workflows that reduced manual processing effort by approximately 65–70%, allowing a process previously requiring three people to be completed by one.',
      'Designed and implemented a hybrid backup and disaster-recovery strategy for up to 1 TB of company data, defining a one-working-day recovery point and recovery time objective.',
      'Managed access controls and investigated security incidents across internal systems, performing root-cause analysis on suspicious activity and network alerts using Microsoft security tooling.',
      "Established operational processes for data handling, permissions, backup, incident response, and system maintenance across the organization's internal technology environment.",
    ],
  },
  {
    role: 'Google Summer of Code Mentee',
    company: 'GNU Radio',
    location: 'Remote',
    period: 'Jun 2023 – Aug 2023',
    bullets: [
      'Engineered a standalone GRC component while preserving commit history.',
      'Applied an Agile–Waterfall hybrid process for structured delivery.',
      'Published weekly technical updates via blog posts and GitHub gists.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'John Deere India Pvt. Ltd.',
    location: 'Pune, India',
    period: 'May 2022 – Jul 2022',
    bullets: [
      'Led a team of three interns developing an internal software-audit platform for engineering repositories, providing a centralized view of active repositories, technology stacks, contributors, and maintenance activity.',
      'Designed REST APIs using Java Spring Boot, GitHub Enterprise APIs, and OpenAPI/Swagger, enabling repository metadata to be queried and presented through a web interface.',
      'Implemented chronological ordering and filter-based views over repository data using appropriate data structures and sorting logic to efficiently organize large result sets for analysis.',
      'Built the frontend using React, providing an interactive interface for engineers to explore repositories and identify ownership and maintenance patterns.',
    ],
  },
]

const skills = {
  'Programming Languages': ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'OCaml'],

  'Web & Backend': [
    'React',
    'Spring Boot',
    'Hono',
    'REST APIs',
    'OpenAPI',
    'Swagger',
    'Cloudflare Workers',
    'Serverless Applications',
  ],

  'Cloud & Infrastructure': [
    'AWS',
    'AWS Lambda',
    'Amazon SQS',
    'Amazon S3',
    'GCP',
    'Docker',
    'Linux',
    'Cloudflare',
  ],

  'AI & Developer Productivity': [
    'AI Agents',
    'AI/LLM Integration',
    'MCP',
    'Model Context Protocol',
    'Prompt Engineering',
    'AI-Assisted Development',
    'AI/LLM Guardrails',
    'Context Engineering',
    'Workflow Automation',
    'AI-Assisted Data Processing',
  ],

  'Testing & Software Quality': [
    'Unit Testing',
    'Regression Testing',
    'Test Automation',
    'Mutation Testing',
    'Static Analysis',
    'Data Validation',
    'Input Validation',
    'Failure Handling',
    'Edge Case Testing',
    'Production Readiness',
  ],

  'Data & Databases': [
    'PostgreSQL',
    'SQL',
    'Data Processing',
    'Data Cleaning',
    'Data Validation',
    'Data Enrichment',
    'Geospatial Data',
    'Geospatial Processing',
  ],

  'Software Engineering': [
    'Data Structures & Algorithms',
    'Distributed Systems',
    'API Design',
    'Debugging',
    'Root-Cause Analysis',
    'System Design',
    'Secure Software Engineering',
    'Automation',
    'Code Review',
    'Production Troubleshooting',
  ],

  'Security Operations': [
    'SIEM Detection Engineering',
    'Threat Hunting & Triage',
    'Phishing Analysis',
    'Incident Response',
    'VAPT',
    'Active Directory Security',
    'Backup & Disaster Recovery (3-2-1)',
  ],

  'Security & Verification': [
    'Formal Verification',
    'Applied Cryptography',
    'Static Analysis',
    'Software Security',
    'Security Testing',
    'Vulnerability Detection',
    'Security Automation',
  ],

  'Tools & Platforms': [
    'Git',
    'GitHub Enterprise',
    'Claude Code',
    'GitHub Copilot',
    'Microsoft Defender',
    'Microsoft Sentinel',
    'Azure Active Directory',
    'Entra ID PIM',
    'Nmap',
    'Wireshark',
    'Metasploit',
    'tcpdump',
    'KQL',
  ],

  'Operating Systems': ['Linux', 'Arch Linux', 'Debian', 'Windows'],
}

const education = [
  {
    degree: 'MSc Advanced Computer Science (Computer Security)',
    institution: 'University of Manchester',
    location: 'Manchester, UK',
    year: 'Dec 2024',
    details:
      'Graduated with Merit (2:1).Focused on computer security, systems, formal verification, and secure software engineering.',
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'NIT Rourkela',
    location: 'Odisha, India',
    year: 'May 2023',
    details:
      'Graduated First Class with strong foundations in systems and computer science fundamentals.',
  },
]

const certifications = [
  {
    name: 'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
    issuer: 'Microsoft',
    year: 'AUG 2026',
  },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: 'Mar 2025' },
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', year: 'Mar 2024' },
]
</script>

<style scoped>
.careers-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Sections */
.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Each card */
.card {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.5rem;
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.7rem;
  margin-top: 1rem;
}

h3 {
  margin: 0;
  font-size: 1.3rem;
}

.inst {
  opacity: 0.85;
}

.meta {
  opacity: 0.75;
  font-size: 0.9rem;
}

/* Skill Pills */
.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.pill {
  background: rgba(255, 255, 255, 0.17);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  white-space: nowrap;
  backdrop-filter: blur(6px);
  transition: background 0.2s ease;
}

.pill:hover {
  background: rgba(255, 255, 255, 0.27);
}

/* Lists */
ul {
  padding-left: 1.2rem;
  margin: 0;
}

li {
  opacity: 0.9;
  margin-bottom: 0.4rem;
}

.terminal-card {
  width: 95vw;
  height: auto;
  max-width: 1100px;

  background: rgba(0, 0, 0, 0.35); /* transparent dark overlay */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(8px);

  border-radius: 1.5rem; /* soft rounded corners */
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  padding: 2.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  box-sizing: border-box;
}
</style>
