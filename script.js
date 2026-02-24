// Data
const skills = {
  technical: [
    { name: 'AutoCAD', level: 90 },
    { name: 'AutoCAD Architecture', level: 85 },
    { name: 'Programming in Python', level: 60 },
    { name: 'Autodesk Revit', level: 78 },
    { name: 'Structural Layout Plans', level: 88 },
    { name: 'Quantity Estimation', level: 82 }
    ,{ name: 'STAAD . Pro', level: 80 },
    { name: 'Microsoft Project', level: 80 }
  ],
  
};

const projects = [
  {
    title: 'Flow Together – Ooty',
    description: 'Proposed a river interlinking and check-dam system to stabilize flows and deliver sustainable water management for hilly terrains.',
    category: 'Water Resources'
  },
  {
    title: 'Landslide Data Analysis Kerala & Wayanad',
    description: 'Mapped landslide-prone zones using Google Earth and ML-driven sediment transport prediction workflows.',
    category: 'Geotechnical Analysis'
  },
  {
    title: 'Walk & Watts',
    description: 'Developed a piezoelectric flooring concept that converts footsteps into usable micro-energy for campus walkways.',
    category: 'Sustainable Infrastructure'
  }
];

const experiences = [
  {
    title: 'Intern',
    company: 'GeoCare Engineering Consultancy',
    location: 'Coimbatore',
    duration: 'Internship',
    responsibilities: [
      'Coordinated with the site team during soil investigation work ' ,
      'Assisted in conducting Standard Penetration Tests (SPT) at project sites.'
    ]
  },
  {
    title: 'Intern',
    company: 'W4 - Wall Four Interior Architects',
    location: 'Coimbatore',
    duration: 'Internship',
    responsibilities: [
      'Learned fundamentals of interior design including spatial planning, material selection, and aesthetic detailing',
      'Supported the design team with drafting exercises and client presentation decks',
      'Coordinated on-site interior setup and ensured deliverables matched specifications'
    ]
  },
  {
    title: 'Intern',
    company: 'Kaveri Construction',
    location: 'Gobichettipalayam',
    duration: 'Internship',
    responsibilities: [
      'Worked on both site and software aspects, including AutoCAD drafting and structural layout plans',
      'Participated in site supervision, documenting construction processes and safety practices',
      'Prepared daily progress notes and assisted engineers with quantity tracking'
    ]
  },
  {
    title: 'Intern',
    company: 'Om Namachivaya Construction',
    location: 'Avinashi',
    duration: 'Internship',
    responsibilities: [
      'Gained hands-on exposure to real-time site execution and structural procedures',
      'Assisted engineers during daily inspections, logging observations and issues',
      'Performed basic quantity estimation and material tracking tasks'
    ]
  }
  
  
];

// DOM Elements
const technicalSkillsContainer = document.getElementById('technical-skills');
const projectsContainer = document.getElementById('projects-container');
const experienceContainer = document.getElementById('experience-container');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Render Functions
function renderSkills() {
  // Render technical skills
  technicalSkillsContainer.innerHTML = skills.technical.map(skill => `
    <div class="border border-gold-500 p-6">
      <div class="text-white font-semibold mb-4">${skill.name}</div>
      <div class="w-full bg-gray-800 h-2">
        <div class="h-full bg-gold-500 transition-all duration-1000 ease-in-out" style="width: 0" data-width="${skill.level}%"></div>
      </div>
      <div class="text-gold-500 text-sm mt-2">${skill.level}%</div>
    </div>
  `).join('');

  // Soft skills removed — no rendering required
}

function renderProjects() {
  projectsContainer.innerHTML = projects.map(project => `
    <div class="border border-gold-500 p-6 hover:bg-gold-500 hover:text-black transition-colors group">
      <div class="text-xs font-bold text-gold-500 group-hover:text-black mb-2 uppercase">${project.category}</div>
      <h3 class="text-xl font-bold mb-4">${project.title}</h3>
      <p class="text-gray-400 group-hover:text-black">${project.description}</p>
    </div>
  `).join('');
}

function renderExperience() {
  experienceContainer.innerHTML = experiences.map(exp => `
    <div class="border border-gold-500 p-6 md:p-8">
      <h3 class="text-2xl font-bold text-white mb-2">${exp.title}</h3>
      <div class="text-xl text-gold-500 font-semibold mb-2">${exp.company}</div>
      <div class="flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm text-gray-400 mb-4">
        <span>${exp.location}</span>
        <span class="hidden sm:inline">•</span>
        <span>${exp.duration}</span>
      </div>
      <ul class="space-y-2">
        ${exp.responsibilities.map(resp => `
          <li class="flex items-start gap-3 text-gray-300">
            <span class="text-gold-500 mt-1">•</span>
            <span>${resp}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

const scrollAnimationSelectors = [
  '.scroll-animate',
  '.scroll-fade-left',
  '.scroll-fade-right',
  '.scroll-scale',
  '.scroll-rotate',
  '.scroll-blur',
  '.scroll-bounce',
  '.scroll-flip',
  '.scroll-wave',
  '.scroll-glow',
  '.scroll-clip',
  '.scroll-draw-border',
  '.scroll-reveal-text',
  '.scroll-sticky',
  '.scroll-progress',
  '.scroll-animate',
  '.scroll-stagger',
  '.scroll-parallax'
];

function setupScrollAnimations() {
  const elements = document.querySelectorAll(scrollAnimationSelectors.join(','));

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

// Event Listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    updateActiveNavLink();
    updateScrollProgress();
  });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100;
  
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-gold-500', 'border-b-2', 'border-gold-500');
        link.classList.add('text-gray-400');
      });
      
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.remove('text-gray-400');
        activeLink.classList.add('text-gold-500', 'border-b-2', 'border-gold-500');
      }
    }
  });
}

// Animate skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll('[data-width]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Update scroll progress bar
function updateScrollProgress() {
  const scrollProgress = document.querySelector('.scroll-progress');
  if (!scrollProgress) return;
  
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}

// Initialize the application
function init() {
  renderSkills();
  renderProjects();
  renderExperience();
  setupEventListeners();
  setupScrollAnimations();

  // Small delay to ensure DOM is fully rendered
  setTimeout(() => {
    updateActiveNavLink();
    animateSkillBars();
    updateScrollProgress();
  }, 100);
}

// Start the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
