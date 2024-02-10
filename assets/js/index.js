/*===================SERVICES MODAL =====================*/

const modals = document.querySelectorAll('.services__modal'),
      modalButtons = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let activeModal = (modalClick) => {
    modals[modalClick].classList.add('active-modal');
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i);
    });
});

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modals[i].classList.remove('active-modal');
    });
});

/*===================SWIPER TESTIMONIAL =====================*/

const swiperTestimonial = new Swiper('.testimonial__swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});

  

/*===================SHOW SCROLL UP =====================*/

const scrollUp =()=>{
    const scrollUp = document.getElementById('scroll-up')
// quand le scroll est plus que 350vh ajout la scroll fleche 
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
: scrollUp.classList.remove('show-scroll');

    
}
window.addEventListener('scroll', scrollUp);
