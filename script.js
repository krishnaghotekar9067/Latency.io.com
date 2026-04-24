 // Initialize Lucide Icons
    lucide.createIcons();
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to("#heroBadge", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to("#heroTitle", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
          .to("#heroDesc", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to("#heroCta", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to("#heroStats", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
    
    // Scroll Reveal Animations
    gsap.utils.toArray('.reveal').forEach(element => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
    
    // Counter Animation
    gsap.utils.toArray('.counter').forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      gsap.to(counter, {
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out"
      });
    });
    
    // Cursor Glow Effect
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });
    
    function animateCursor() {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      cursorGlow.style.left = currentX + 'px';
      cursorGlow.style.top = currentY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('shadow-lg', 'shadow-indigo-500/5');
      } else {
        navbar.classList.remove('shadow-lg', 'shadow-indigo-500/5');
      }
      
      lastScroll = currentScroll;
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          mobileMenu.classList.add('hidden');
        }
      });
    });
    
    // Magnetic Button Effect
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
    
    // Parallax Effect for Orbs
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to('.orb-1', { x: x * 2, y: y * 2, duration: 2, ease: "power2.out" });
      gsap.to('.orb-2', { x: -x * 2, y: -y * 2, duration: 2, ease: "power2.out" });
      gsap.to('.orb-3', { x: x * 3, y: -y * 3, duration: 2, ease: "power2.out" });
    });