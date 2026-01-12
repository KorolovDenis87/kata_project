const openButton = document.getElementById("openButton")
const closeButton = document.getElementById("closeButton")
const aside = document.getElementById("myAside")

openButton.addEventListener("click", () => {
  aside.style.display = "block"
})

closeButton.addEventListener("click", () => {
  if (window.innerWidth <= 1120) {
    aside.style.display = "none"
  }
})

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 /*  scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});

const button = document.querySelector('.brand__show-hide');
const hiddenCards = document.querySelectorAll('.hidden-card');

button.addEventListener('click', () => {
    hiddenCards.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });

    if (button.textContent === 'Показать все') {
        button.textContent = 'Скрыть';
    } else {
        button.textContent = 'Показать все';
    }
});
