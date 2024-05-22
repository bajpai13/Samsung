function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 3+"px"
    crsr.style.top = dets.y + 3+"px"
})

var tl5 = gsap.timeline()

tl5.to("#loader h1",{
    scale:1.3,
    delay:0.4,
    duration:0.3
})
tl5.to("#loader",{
    top: "-100vh",
    delay: 0.6,
    duration: 0.7
})

gsap.from(".page1 h1,.page1 h2", {
    y: 100,
    rotate: 45,
    opacity: 0,
    delay: 1.6,
    duration: 0.6
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 47%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -300,
}, "anime")
tl.to(".page1 h2", {
    x: 300,
}, "anime")
tl.to(".page1 video", {
    width: "93%"
}, "anime")

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3-part1 img-1, .page3-part1 img-2",
    scroller: ".main",
    start: "top -360%",
    end: "top -420",
    scrub: 3,
  },
});

tl4.to(
  ".page3 .page3-part1 #img-1",
  {
    x: 200,
  },
  "anime"
);
tl4.to(
  ".page3 .page3-part1 #img-2",
  {
    x: -200,
  },
  "anime"
);


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -75%",
        end: "top -150%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "white",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -340%",
        end: "top -400%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


function SwiperAnim(){
    
 var swiper = new Swiper(".mySwiper", {
   slidesPerView: "auto",
   centeredSlides: true,
   spaceBetween: 80,
 });
}

SwiperAnim()

