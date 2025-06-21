// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    const sectionsToReveal = document.querySelectorAll('section');
    sectionsToReveal.forEach(section => {
        revealObserver.observe(section);
    });


    const internalLinks = document.querySelectorAll('.menu-box a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const header = document.querySelector('#box-cabecalho');
    const scrollThreshold = 50; 

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    });

});