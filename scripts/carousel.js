// Spiral Carousel Implementation
(function () {
    const carousel = document.getElementById('carousel');

    // Sample project data for carousel
    const carouselProjects = [
        {
            title: 'Project Alpha',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['React', 'Node.js', 'MongoDB'],
            color: '#a78bfa'
        },
        {
            title: 'Project Beta',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
            tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
            color: '#98ff98'
        },
        {
            title: 'Project Gamma',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
            tags: ['Angular', 'Express', 'PostgreSQL'],
            color: '#ffdab9'
        },
        {
            title: 'Project Delta',
            description: 'Duis aute irure dolor in reprehenderit in voluptate.',
            tags: ['Next.js', 'GraphQL', 'Prisma'],
            color: '#87ceeb'
        },
        {
            title: 'Project Epsilon',
            description: 'Excepteur sint occaecat cupidatat non proident.',
            tags: ['Svelte', 'Supabase', 'TypeScript'],
            color: '#ffb6c1'
        }
    ];

    // Create carousel items
    function createCarousel() {
        const itemCount = carouselProjects.length;
        const radius = 250;
        const angleStep = (2 * Math.PI) / itemCount;

        carouselProjects.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'carousel-item card';

            const angle = index * angleStep;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            item.innerHTML = `
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

            item.style.transform = `translateX(-50%) translateY(-50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle}rad)`;
            item.style.backgroundColor = project.color + '20';
            item.style.borderColor = project.color;

            carousel.appendChild(item);
        });
    }

    // Rotate carousel on scroll
    let currentRotation = 0;
    function rotateCarousel() {
        const scrollY = window.scrollY;
        const carouselSection = document.querySelector('.carousel-section');
        const sectionTop = carouselSection.offsetTop;
        const sectionHeight = carouselSection.offsetHeight;

        if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
            const scrollProgress = (scrollY - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);
            currentRotation = scrollProgress * 360;
            carousel.style.transform = `rotateY(${currentRotation}deg)`;
        }
    }

    // Initialize
    createCarousel();
    window.addEventListener('scroll', rotateCarousel);

    // Add click handlers to carousel items
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 500);
        });
    });
})();
