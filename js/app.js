
window.addEventListener('load', function () {
  const loader = document.getElementById('loading');
  loader.classList.add('hidden');
});


const bars = document.getElementById('bars');

const close = document.getElementById('close');
const navbar = document.querySelector('nav');
bars.addEventListener('click', () => {
  navbar.style.display = 'block';
})
close.addEventListener('click', () => {
  navbar.style.display = 'none';
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});