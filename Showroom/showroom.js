function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 3 + "px";
  crsr.style.top = dets.y + 3 + "px";
});

var tl5 = gsap.timeline();

tl5.to("#loader h1", {
  scale: 1.3,
  delay: 0.4,
  duration: 0.3,
});
tl5.to("#loader", {
  top: "-100vh",
  delay: 0.6,
  duration: 0.7,
});

function SwiperAnim() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
  });
}

SwiperAnim();


