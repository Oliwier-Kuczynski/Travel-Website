let controller;
let slideScene;

function animatedSlides() {
  //Init Controler
  controller = new ScrollMagic.Controller();
  //Select some thing
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop over each slide
  sliders.forEach((slide) => {
    const revealImg = document.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.55");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.7");
    //Create Scene
  });
}

animatedSlides();
