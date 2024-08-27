document.addEventListener('DOMContentLoaded', function () {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Actualización de clase activa en la navegación
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (scrollPosition >= section.offsetTop - 100 &&
                scrollPosition < (section.offsetTop + section.offsetHeight - 100)) {
                let currentId = section.id;
                removeAllActiveClasses();
                addActiveClass(currentId);
            }
        });
    });

    function removeAllActiveClasses() {
        document.querySelectorAll(".nav-link").forEach(el => {
            el.classList.remove("active");
        });
    }

    function addActiveClass(id) {
        let selector = `nav a[href="#${id}"]`;
        let activeLink = document.querySelector(selector);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Animación de tarjetas al hacer scroll
    const cards = document.querySelectorAll('.card');

    function animateCardsOnScroll() {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight * 0.9) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateCardsOnScroll);
    animateCardsOnScroll();

    // Efecto hover en elementos de trabajo
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '1';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Animación de elementos al hacer scroll
    const animatedElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementTop < viewportHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Efecto hover en elementos del carrusel
    const carouselItems = document.querySelectorAll('#heroCarousel .carousel-item');

    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.5s ease';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Animación de títulos de sección
    const sectionTitles = document.querySelectorAll('.section-title');

    function animateTitlesOnScroll() {
        const windowHeight = window.innerHeight;

        sectionTitles.forEach(title => {
            const titleTop = title.getBoundingClientRect().top;
            if (titleTop < windowHeight * 0.8) {
                title.classList.add('title-animate');
            }
        });
    }

    window.addEventListener('scroll', animateTitlesOnScroll);
    animateTitlesOnScroll();

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            document.getElementById('name-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('message-error').textContent = '';

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            if (name === '') {
                document.getElementById('name-error').textContent = 'Name is required.';
                isValid = false;
            }

            if (email === '') {
                document.getElementById('email-error').textContent = 'Email is required.';
                isValid = false;
            } else if (!validateEmail(email)) {
                document.getElementById('email-error').textContent = 'Invalid email format.';
                isValid = false;
            }

            if (message === '') {
                document.getElementById('message-error').textContent = 'Message is required.';
                isValid = false;
            }

            if (isValid) {
                alert("Form submitted successfully!");
                contactForm.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Modal de imagenes
    const images = document.querySelectorAll('.work-item')
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImg && closeBtn) {
        images.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target.tagName === 'IMG') {
                    modal.style.display = "block";
                    modalImg.src = e.target.src;
                }
            });
        });


        closeBtn.addEventListener('click', function () {
            modal.style.display = "none";
        });

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
    }
});
