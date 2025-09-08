let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =() => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach( sec => {
    let top = window.scrolly;
    let offset = sec.offsetTop =150;
    let height= sec.offsetHeight;
    let id =sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach.apply(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
      });
    };
  });


  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrolly > 100);


  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
}

/*-------scroll reveal---------*/
ScrollReveal({
  distance: '80px',
  duration:2000,
  delay:200,
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact p, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


const typed = new Typed('#multiple-text',{
  strings:['Fullstack Developer','Web Designer'],
  typedSpeed: 70,
  backSpeed: 70,
  backDelay:1000,
  loop: true,
})

document.getElementById("showBtn2").addEventListener("click", function(e) {
  e.preventDefault(); // prevent jumping to top
  let moreText = document.getElementById("moreText");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    this.textContent = "Show Less";
  } else {
    moreText.style.display = "none";
    this.textContent = "Read More";
  }
});
document.getElementById("showBtn1").addEventListener("click", function(e) {
  e.preventDefault(); // prevent jumping to top
  let moreText1 = document.getElementById("moreText1");

  if (moreText1.style.display === "none") {
    moreText1.style.display = "inline";
    this.textContent = "Show Less";
  } else {
    moreText1.style.display = "none";
    this.textContent = "Read More";
  }
});
document.getElementById("showBtn3").addEventListener("click", function(e) {
  e.preventDefault(); // prevent jumping to top
  let moreText1 = document.getElementById("moreText2");

  if (moreText2.style.display === "none") {
    moreText2.style.display = "inline";
    this.textContent = "Show Less";
  } else {
    moreText2.style.display = "none";
    this.textContent = "Read More";
  }
});
document.getElementById("showBtn4").addEventListener("click", function(e) {
  e.preventDefault(); // prevent jumping to top
  let moreText3 = document.getElementById("moreText3");

  if (moreText3.style.display === "none") {
    moreText3.style.display = "inline";
    this.textContent = "Show Less";
  } else {
    moreText3.style.display = "none";
    this.textContent = "Read More";
  }
});
