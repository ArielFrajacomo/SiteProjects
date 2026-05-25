// --- DYNAMIC PORTFOLIO CONTROLLER ---
import { projects } from './projects.js';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- PRELOADER & ENTRANCE TIMELINE ---
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('preloader-progress');
  const preloader = document.getElementById('preloader');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Complete loading & Fade out preloader
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            preloader.style.display = 'none';
            initAnimations();
          }
        });
        
        tl.to(preloader, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut'
        });
      }, 300);
    }
    progressBar.style.width = `${progress}%`;
  }, 80);

  // Initialize mouse glow tracking
  initMouseGlow();
  
  // Render Projects from projects.js
  renderProjects();
});

// --- MOUSE SPOTLIGHT TRACKING (Cozy desk lamp feel) ---
function initMouseGlow() {
  const spotlight = document.getElementById('spotlight');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY + window.scrollY; // adjust for scroll position
  });

  // Smooth interpolation for fluid light motion
  function animateSpotlight() {
    const ease = 0.08;
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    spotlight.style.setProperty('--mouse-x', `${currentX}px`);
    spotlight.style.setProperty('--mouse-y', `${currentY}px`);

    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();
}

// --- DYNAMIC PROJECTS RENDERING ---
function renderProjects() {
  const container = document.getElementById('projects-container');
  const list = projects();
  
  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-neutral-500 font-mono text-sm">
        Nenhum projeto encontrado no momento.
      </div>
    `;
    return;
  }

  container.innerHTML = ''; // Clear loading placeholder

  list.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'floating-card-setup p-6 flex flex-col justify-between relative overflow-hidden group min-h-[360px]';
    
    // Index number with absolute opacity
    const formattedIndex = String(index + 1).padStart(2, '0');
    
    // Tech badges builder
    let techStackHtml = '';
    if (proj.TechStack && proj.TechStack.length > 0) {
      proj.TechStack.forEach(tech => {
        techStackHtml += `<span class="px-2 py-1 text-[10px] font-mono uppercase bg-neutral-900/50 border border-white/5 text-neutral-400 group-hover:text-cyan-400 group-hover:border-cyan-800/30 transition-colors">${tech}</span>`;
      });
    }

    // Determine Action Button (Link vs In Development)
    let actionBtnHtml = '';
    if (proj.Link && proj.Link.trim() !== '') {
      actionBtnHtml = `
        <a href="${proj.Link}" target="_blank" class="w-full mt-6 py-3 border border-white/10 hover:border-cyan-400 bg-black/20 hover:bg-cyan-950/20 text-center text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
          Acessar Projeto
          <iconify-icon icon="lucide:external-link" class="text-sm"></iconify-icon>
        </a>
      `;
    } else {
      actionBtnHtml = `
        <div class="w-full mt-6 py-3 border border-dashed border-neutral-800 bg-neutral-900/10 text-center text-xs font-bold uppercase tracking-wider text-neutral-600 cursor-not-allowed flex items-center justify-center gap-2">
          Em Desenvolvimento
          <iconify-icon icon="lucide:lock" class="text-sm"></iconify-icon>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-sheen"></div>
      <div class="relative z-10 space-y-4">
        <!-- Top Card Row -->
        <div class="flex justify-between items-start">
          <span class="text-xs font-mono text-[#f59e0b] badge-gold px-2 py-0.5">${proj.CompletionDate || 'Futuro'}</span>
          <span class="text-3xl font-mono text-white/5 font-bold group-hover:text-cyan-500/10 transition-colors">${formattedIndex}</span>
        </div>

        <!-- Project Title -->
        <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          ${proj.Name}
        </h3>

        <!-- Description -->
        <p class="text-neutral-400 text-sm font-light leading-relaxed min-h-[72px]">
          ${proj.Description}
        </p>

        <!-- Tech Stack Container -->
        <div class="flex flex-wrap gap-2 pt-2">
          ${techStackHtml}
        </div>
      </div>

      <!-- Action Footer -->
      <div class="relative z-10 pt-4">
        ${actionBtnHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

// --- CORE GSAP SCROLL TRIGGERS ---
function initAnimations() {
  // Hero Text reveal
  gsap.from('#hero h1', {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  });
  
  gsap.from('#hero h2', {
    y: 40,
    opacity: 0,
    duration: 1.5,
    delay: 0.2,
    ease: 'power4.out'
  });

  gsap.from('#hero p, #hero .flex', {
    y: 30,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    stagger: 0.1,
    ease: 'power3.out'
  });

  // ScrollReveal for sections
  gsap.utils.toArray('.reveal-content').forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Stagger reveal on dynamic project cards after they render
  gsap.from('.floating-card-setup', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 75%'
    }
  });
}
