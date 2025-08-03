document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav ul li a');
    const sections = document.querySelectorAll('.section');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(id).classList.add('active');
    }

    function setActiveLink(link) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            showSection(targetId);
            setActiveLink(this);
        });
    });

    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            showSection(targetId);
            
            navLinks.forEach(navLink => {
                if(navLink.getAttribute('href') === targetId) {
                    setActiveLink(navLink);
                }
            });
        });
    });

    // Muestra la sección de inicio por defecto
    showSection('#inicio');
});