document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.getElementById('theme-toggle').querySelector('i');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animate__pulse');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('animate__pulse');
    });

        // Project slider
        const projectsContainer = document.querySelector('.projects-container');
        const projectItems = document.querySelectorAll('.project-item');
        let currentIndex = 0;
    
        function showProject(index) {
            const offset = -index * 100;
            projectItems.forEach((item) => {
                item.style.transform = `translateX(${offset}%)`;
            });
        }
    
        projectsContainer.addEventListener('click', function(event) {
            if (event.target.closest('::before')) {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectItems.length - 1;
            } else if (event.target.closest('::after')) {
                currentIndex = (currentIndex < projectItems.length - 1) ? currentIndex + 1 : 0;
            }
            showProject(currentIndex);
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contact-form');
            const successMessage = document.getElementById('success-message');
        
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                
                // Tampilkan pesan sukses
                successMessage.style.display = 'block';
        
                // Reset form
                contactForm.reset();
        
                // Sembunyikan pesan sukses setelah beberapa detik (opsional)
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 10000); // 10 detik
            });
        
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
        
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.querySelector('i').classList.toggle('fa-bars');
                menuToggle.querySelector('i').classList.toggle('fa-times');
            });
        
            const themeToggle = document.getElementById('theme-toggle');
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                themeToggle.querySelector('i').classList.toggle('fa-moon');
                themeToggle.querySelector('i').classList.toggle('fa-sun');
            });
        });
        
    
});
