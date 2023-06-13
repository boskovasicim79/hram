/* menu icon navbar */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.menu')
let navbarli = document.querySelector(' li')

function toggleMenu() {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active5')
  navbarli.classList.toggle('active5')
}

/* SWIPPER INFINITE LOOP*/

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/*HEDER LOGO NA SCROOL DISPLAY NONE*/

const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  
  const scrolled = window.scrollY
  const mediaWidth = 991 // Maksimalna medijska širina

  if (scrolled > 1 && window.innerWidth >= mediaWidth) {
    logo.style.display ='none';
  }
    //header.style.backgroundColor = 'black'; // Promjena pozadinske boje na crnu
  
})

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  if (scrolled < 1) {
    logo.style.display = 'block'
  }
})

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  if (scrolled > 1) {
    menu.classList.add('active2')
  }
})

/*TESTIMONIAL 3*/

const galleryContainer = document.querySelector('.gallery-container')
const galleryControlsContainer = document.querySelector('.gallery-controls')
const galleryControls = ['previous', 'next']
const galleryItems = document.querySelectorAll('.gallery-item')

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container
    this.carouselControls = controls
    this.carouselArray = [...items]
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1')
      el.classList.remove('gallery-item-2')
      el.classList.remove('gallery-item-3')
      el.classList.remove('gallery-item-4')
      el.classList.remove('gallery-item-5')
    })

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`)
    })
  }

  setCurrentState(direction) {
    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop())
    } else {
      this.carouselArray.push(this.carouselArray.shift())
    }
    this.updateGallery()
  }

  useControls() {
    const body = document.querySelector('.body-forgallery')
    body.addEventListener('click', (e) => {
      e.preventDefault()
      this.carouselArray.push(this.carouselArray.shift())
      this.updateGallery()
    })
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
)

exampleCarousel.useControls()

/*DUGME UKLJUCI ISKLJUCI*/

window.onload = function () {
  var toggle = document.getElementById('toggle')
  var pozadina = document.querySelector('.pozadina')
  var originalnaSlika = pozadina.style.backgroundImage

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active')
    var trenutnaSlika = pozadina.style.backgroundImage
    if (trenutnaSlika === originalnaSlika) {
      if (window.innerWidth <= 550) {
        pozadina.style.backgroundImage = 'url(Sasvjetlom.jpg)'
      } else {
        pozadina.style.backgroundImage = 'url(Desctop_svjetlo_1.png)'
      }
    } else {
      pozadina.style.backgroundImage = originalnaSlika
    }
  })
}

/*POPUNJAVANJE FORME I THANK YOU STRANICA*/
const submitBtn = document.querySelector('.inputBox input[type="submit"]');
const form = document.querySelector('.form');
let errorMessage = null;

submitBtn.addEventListener('click', function(event) {
    const formInputs = form.querySelectorAll('input[required]');
    let isFormValid = true;

    formInputs.forEach(function(input) {
        if (input.value.trim() === '') {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        event.preventDefault();
        
        // Uklanjamo prethodnu poruku o grešci ako postoji
        if (errorMessage) {
            form.removeChild(errorMessage);
        }
        
        errorMessage = document.createElement('p');
        errorMessage.textContent = 'Нисте попунили форму!';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
    } else {
        // Uklanjamo prethodnu poruku o grešci ako postoji
        if (errorMessage) {
            form.removeChild(errorMessage);
            errorMessage = null;
        }
        
        window.location.href = 'thankyou.html';
    }
});