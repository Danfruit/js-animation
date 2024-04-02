let burgerBtn = document.querySelector('.burger');
let burgerPopup = document.querySelector('.burger-popup');

burgerBtn.addEventListener('click', function() {
  burgerPopup.classList.toggle('burger-popup--active');
  burgerBtn.classList.toggle('burger--active');
})

burgerBtn.onclick = function () {
  gsap.fromTo(".burger-popup--active .burger-popup__top", {duration: 2, opacity: 0, y: "-50", ease: "back.out(1.7)"}, {opacity: 1, y: 0});
  gsap.fromTo(".burger-popup--active .burger-popup__bottom", {duration: 2, opacity: 0, y: "200", ease: "back.out(1.7)"}, {opacity: 1, y: 0, delay: 0.2});
  gsap.fromTo(".burger-popup--active .burger-nav__big-list", {duration: 2, opacity: 0, y: "50", ease: "back.out(1.7)"}, {opacity: 1, y: 0, delay: 0.5});
  gsap.fromTo(".burger-popup--active .burger-socials", {duration: 2, opacity: 0, y: "50", ease: "back.out(1.7)"}, {opacity: 1, y: 0, delay: 1});
  gsap.fromTo(".burger-popup--active .burger-map", {duration: 2, opacity: 0, y: "50", ease: "back.out(1.7)"}, {opacity: 1, y: 0, delay: 1.5});
}

gsap.from(".hero__title, .hero__btn", {duration: 1, y: "100", opacity: 0});
gsap.from(".hero__descr", {duration: 1, opacity: 0, delay: 1});
gsap.from(".hero__img", {duration: 1, delay: 1.3, opacity: 0, stagger: 0.3});
gsap.from(".hero__text", {duration: 1.5, delay: 2, opacity: 0});
