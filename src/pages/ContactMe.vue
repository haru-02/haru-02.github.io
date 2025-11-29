<template>
  <div class="terminal-card">
    <div class="contact-container">
      <h1>Get in Touch</h1>
      <p class="contact-intro">
        Whether you're seeking to network, collaborate, or to share technical insights, I'm always
        eager to connect with driven individuals and innovative teams. Let's explore new
        opportunities together. Feel free to reach out to discuss projects, share ideas, or just say
        hello via these platforms.
      </p>

      <div class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-card"
        >
          <span class="icon" v-html="link.icon"></span>
          <span class="label">{{ link.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/haru02',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.609 2.922-1.609 2.135 0 3.751 1.393 3.751 4.385v5.61zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.712 0-.953.771-1.713 1.96-1.713 1.188 0 1.915.76 1.94 1.713 0 .953-.752 1.712-1.985 1.712zm1.946 11.597H3.392V9.683h3.891v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/haru-02',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  },
]
</script>

<style scoped>
.terminal-card {
  width: 95vw;
  height: auto;
  max-width: 700px;

  background: rgba(0, 0, 0, 0.541);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(8px);

  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  box-sizing: border-box;
}

.contact-container h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1;
}

.contact-intro {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0 0 2rem 0;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;

  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.social-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.icon {
  font-size: 2rem;
}

.label {
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .terminal-card {
    padding: 2rem 1rem;
  }

  .contact-container h1 {
    font-size: 1.8rem;
  }

  .social-links {
    flex-direction: column;
  }
}
</style>
