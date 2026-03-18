/* ── Mobile menu toggle ── */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

/* ── Active nav link on scroll ── */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;                   // FIX: was window.scrolly (lowercase y)
    let offset = sec.offsetTop - 150;           // FIX: was = 150 (assignment, not subtraction)
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {                // FIX: was forEach.apply with wrong syntax
        link.classList.remove('active');
      });
      let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100); // FIX: was window.scrolly

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/* ── Scroll Reveal ── */
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading',                                   { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img',                                                { origin: 'left' });
ScrollReveal().reveal('.about-content',                                            { origin: 'right' });

/* ── Typed.js ── */
const typed = new Typed('#multiple-text', {
  strings: ['Full-Stack Developer', 'Web Designer', 'Python Programmer'],
  typeSpeed: 70,       // FIX: was typedSpeed (incorrect property name)
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/* ── Read More / Show Less helpers ── */
function toggleReadMore(btnId, textId) {
  const btn = document.getElementById(btnId);
  const text = document.getElementById(textId);
  if (!btn || !text) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const isHidden = text.style.display === 'none' || text.style.display === '';
    text.style.display = isHidden ? 'inline' : 'none';
    this.textContent = isHidden ? 'Show Less' : 'Read More';
  });
}

// FIX: showBtn3 had a bug — it declared "moreText1" but then referenced "moreText2" (ReferenceError)
toggleReadMore('showBtn1', 'moreText1');
toggleReadMore('showBtn2', 'moreText');
toggleReadMore('showBtn3', 'moreText2'); // FIX: now correctly references moreText2
toggleReadMore('showBtn4', 'moreText3');