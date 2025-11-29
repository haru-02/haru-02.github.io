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
        <h3>Core Concepts</h3>
        <div class="pill-row">
          <span class="pill" v-for="c in skills.concepts" :key="c">{{ c }}</span>
        </div>

        <h3>Programming Languages</h3>
        <div class="pill-row">
          <span class="pill" v-for="l in skills.languages" :key="l">{{ l }}</span>
        </div>

        <h3>Tools & Frameworks</h3>
        <div class="pill-row">
          <span class="pill" v-for="t in skills.tools" :key="t">{{ t }}</span>
        </div>
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
      'Developed a secure internal auditing platform improving turnaround by 20%.',
      'Designed REST API specifications following OpenAPI standards.',
      'Built with ReactJS, Spring Boot, MongoDB in an Agile development environment.',
    ],
  },
]

const skills = {
  concepts: [
    'Interpreters',
    'SAT Solving',
    'Functional Programming',
    'Cybersecurity',
    'Web Development',
    'Operating Systems',
    'Machine Learning',
    'AI',
    'Probability & Statistics',
    'Agile Methodologies',
    'Software Testing',
    'Software engineering',
    'System Design',
  ],
  languages: ['C/C++', 'Python', 'Java', 'OCaml', 'SQL', 'TypeScript'],
  tools: [
    'Git',
    'Linux',
    'Docker',
    'Dune',
    'Alcotest',
    'Spring Boot',
    'ReactJS',
    'VueJS',
    'Cloudflare Workers',
    'Cloudflare Pages',
  ],
}

const education = [
  {
    degree: 'MSc Advanced Computer Science (Computer Security)',
    institution: 'University of Manchester',
    location: 'Manchester, UK',
    year: 'Dec 2024',
    details:
      'Graduated with Merit (2:1). Focused on cybersecurity research, systems, and formal verification.',
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
