// Main Application Logic
(function () {

    // Sample project data
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built with modern web technologies for seamless shopping experience.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://via.placeholder.com/400x300/a78bfa/ffffff?text=E-Commerce'
        },
        {
            title: 'Task Management App',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Collaborative task tracking with real-time updates.',
            tags: ['Vue.js', 'Firebase', 'Vuex'],
            image: 'https://via.placeholder.com/400x300/98ff98/333333?text=Task+Manager'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Analytics and insights for social platforms.',
            tags: ['Angular', 'TypeScript', 'Chart.js'],
            image: 'https://via.placeholder.com/400x300/ffdab9/333333?text=Dashboard'
        },
        {
            title: 'Weather Forecast App',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Real-time weather data with beautiful visualizations.',
            tags: ['Next.js', 'API Integration', 'TailwindCSS'],
            image: 'https://via.placeholder.com/400x300/87ceeb/ffffff?text=Weather+App'
        },
        {
            title: 'Portfolio Builder',
            description: 'Excepteur sint occaecat cupidatat non proident. Create stunning portfolios with drag-and-drop interface.',
            tags: ['Svelte', 'DnD Kit', 'Supabase'],
            image: 'https://via.placeholder.com/400x300/ffb6c1/333333?text=Portfolio+Builder'
        },
        {
            title: 'Chat Application',
            description: 'Sunt in culpa qui officia deserunt mollit anim. Real-time messaging with end-to-end encryption.',
            tags: ['Socket.io', 'Express', 'Redis'],
            image: 'https://via.placeholder.com/400x300/e6e6fa/333333?text=Chat+App'
        }
    ];

    // Sample experience data
    const experiences = [
        {
            company: 'Tech Corp',
            role: 'Senior Software Engineer',
            duration: '2022 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leading development of scalable web applications and mentoring junior developers.'
        },
        {
            company: 'StartUp Inc',
            role: 'Full Stack Developer',
            duration: '2020 - 2022',
            description: 'Sed do eiusmod tempor incididunt ut labore. Built and maintained multiple client projects using modern frameworks.'
        },
        {
            company: 'Digital Agency',
            role: 'Frontend Developer',
            duration: '2018 - 2020',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation. Developed responsive websites and interactive user interfaces.'
        },
        {
            company: 'Freelance',
            role: 'Web Developer',
            duration: '2016 - 2018',
            description: 'Duis aute irure dolor in reprehenderit. Worked with various clients on web development projects and e-commerce solutions.'
        }
    ];

    // Generate project cards
    function generateProjects() {
        const grid = document.getElementById('projectsGrid');

        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

            // Add stagger animation
            card.style.animationDelay = `${index * 0.1}s`;

            grid.appendChild(card);
        });
    }

    // Generate experience timeline
    function generateExperience() {
        const timeline = document.getElementById('timeline');

        experiences.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 class="experience-company">${exp.company}</h3>
          <h4 class="experience-role">${exp.role}</h4>
          <p class="experience-duration">${exp.duration}</p>
          <p class="experience-description">${exp.description}</p>
        </div>
      `;

            // Add stagger animation
            item.style.animationDelay = `${index * 0.15}s`;

            timeline.appendChild(item);
        });
    }

    // Generate floating particles
    function generateParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';

            // Random animation delay and duration
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';

            particlesContainer.appendChild(particle);
        }
    }

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', () => {
        generateProjects();
        generateExperience();
        generateParticles();

        // Add glitch effect to hero title on hover
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.addEventListener('mouseenter', () => {
            heroTitle.classList.add('animate-glitch');
        });
        heroTitle.addEventListener('animationend', () => {
            heroTitle.classList.remove('animate-glitch');
        });
    });

})();
