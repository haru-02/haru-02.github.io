<script setup lang="ts">
import { onMounted } from 'vue'

const roles = ['Software Engineer', 'Open-Source contributor', 'cybersec enthusiast', 'Gamer']
onMounted(() => {
  const textEl = document.querySelector('.typing-content') as HTMLElement | null
  if (!textEl) return
  let i = 0
  let j = 0
  let deleting = false

  function type() {
    const current = roles[i] ?? ''
    if (!textEl) return
    if (!deleting) {
      textEl.textContent = current.slice(0, j++)
      if (j > current.length) {
        deleting = true
        setTimeout(type, 1000)
        return
      }
    } else {
      textEl.textContent = current.slice(0, j--)
      if (j < 0) {
        deleting = false
        i = (i + 1) % roles.length
        j = 0
      }
    }
    setTimeout(type, deleting ? 40 : 70)
  }

  type()
})
</script>

<template>
  <nav class="glass-nav">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="/resume.pdf" target="_blank">Resume</a></li>
    </ul>
  </nav>
  <div class="app-bg">
    <div class="terminal-card">
      <div class="header">
        <img src="/src/assets/headshot.jpeg" class="hero-image" />
        <div class="header-text">
          <h1>Rahul Balaji</h1>
          <p class="typing-text">
            <span class="typing-content"></span><span class="typing-cursor"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-bg {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('./assets/background.jpg');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  padding-top: 4 rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 700px;
}

.hero-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  object-position: center top;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}

.header-text h1 {
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
}

.header-text p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.typing-text {
  font-size: 1.1rem;
  opacity: 0.9;
  display: inline-block;
  white-space: nowrap;
  min-width: 220px;
  min-height: 20px;
  width: auto;
  overflow: hidden;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 2px;
  animation: blink 0.8s infinite;
  vertical-align: middle;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.glass-nav {
  position: fixed;
  top: 1.2rem;
  left: 50%;
  transform: translateX(-50%);

  padding: 0.8rem 1.5rem;
  border-radius: 1rem;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);

  animation: navFadeIn 0.9s ease forwards;
  opacity: 0;
}

@keyframes navFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.glass-nav ul {
  list-style: none;
  display: flex;
  gap: 1.6rem;
  margin: 0;
  padding: 0;
}

.glass-nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 450;
  transition: 0.25s ease;
}

.glass-nav a:hover {
  color: #c4e3ff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header-text {
    align-items: center;
  }

  .header-text h1 {
    font-size: 1.5rem;
  }

  .header-text p {
    font-size: 0.9rem;
  }
}
</style>
