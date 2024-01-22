const call =()=>{
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // --- RED PANEL ---
    gsap.from(".line-1", {
      scrollTrigger: {
        trigger: ".line-1",
        scroller: "#main",
        scrub: true,
        start: "top bottom",
        end: "top top",
        onUpdate: self => console.log(self.direction)
      },
      scaleX: 0,
      transformOrigin: "left center", 
      ease: "none"
    });
    
    
    // --- ORANGE PANEL ---
    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scroller: "#main",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },
      scaleX: 0, 
      transformOrigin: "left center", 
      ease: "none"
    });
    
    
    // --- PURPLE/GREEN PANEL ---
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".purple",
          scroller: "#main",
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=100%"
        }
      });
    
    tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
      .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
      .to(".purple", {backgroundColor: "#28a92b"}, 0);
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
     
}
call()
// SHERY JS 
Shery.mouseFollower();
Shery.makeMagnet(".magnet-target",{
    scale:5
})
Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["../images/shop2.jpg","../images/catering.jpg","../images/impact.jpg","../images/stories.jpg", "../images/about.jpg","../images/contact.jpg"] /*OR*/,
   
  });
Shery.imageEffect((".img"),{
  style:3,
  debug:true,
  gooey:true,
  config:{"uFrequencyX":{"value":2.68,"range":[0,100]},"uFrequencyY":{"value":3.57,"range":[0,100]},"uFrequencyZ":{"value":36.61,"range":[0,100]},"geoVertex":{"range":[1,64],"value":51.06},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.0749941807562902},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})
  Shery.imageMasker(".img-card" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "BUY",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
// GSAP 
gsap.from(".card",{
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        // markers:"true",
        start:"1180px 40%",
        end:"top ",
        scroller:"#main",
    }
})

var timeline = gsap.timeline();
timeline.from("header",{
    y:-400,
})
timeline.from(".main-heading h1",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.9,
    stagger:0.2
})
gsap.to(".logo svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        // markers:"true",
        start:"200 -10",
        end:"bottom 30",
        // scrub:true,
        scroller:"#main",

    }
})

const menu = document.getElementsByClassName("menu-line");
menu[0].addEventListener('click',()=>{
    gsap.to(".onclick-bars",{
      top:"0",
      borderRadius:"0",
  // position:"fixed",
  
    })
    gsap.to(".right-nav-item a",{
        color:"white",
    })
    gsap.to(".logo svg",{
        color:"white",
    })
})
const menu_close = document.getElementsByClassName("ri-arrow-up-double-line");
menu_close[0].addEventListener('click',()=>{
    gsap.to(".onclick-bars",{
        top:"-949px",
      borderRadius:"100%",
    })
    gsap.to(".right-nav-item a",{
        color:"black",
    })
    gsap.to(".logo svg",{
        color:"black",
    })
})

const text = document.getElementsByClassName("text");
text[0].innerHTML = text[0].innerText.split("").map(
    (char,i)=>
     `<span style = "transform:rotate(${i*10.8}deg)">${char}</span>`
    ).join("")


    const secnd_col_first = document.getElementsByClassName("wrap-first-col");
    const secnd_col_second = document.getElementsByClassName("wrap-second-col");
    const secnd_col_third = document.getElementsByClassName("wrap-third-col");
const wrap_first = document.getElementsByClassName("wrap-first");
const wrap_second = document.getElementsByClassName("wrap-second");
const wrap_third = document.getElementsByClassName("wrap-third");
const secnd_col = document.getElementsByClassName("scnd-col");
// let arr_secnd = Array.from(secnd_col);
// console.log(arr_secnd);

  wrap_first[0].addEventListener('mouseenter',()=>{
   gsap.to('.wrap-first-col',{
      height:"auto"
    })
});
wrap_second[0].addEventListener('mouseenter',()=>{
  gsap.to('.wrap-second-col',{
     height:"auto"
   })
});
wrap_third[0].addEventListener('mouseenter',()=>{
  gsap.to('.wrap-third-col',{
     height:"auto"
   })
});

const main_container=document.getElementsByClassName("navigation-card");
let main_arr = Array.from(main_container);
console.log(main_arr)
main_arr.forEach((main_container)=>{
  main_container.addEventListener('mouseleave',()=>{
    gsap.to('.scnd-col',{
      // opacity:"1",
      height:"0"
    })
  });
});

gsap.from('.line',{
  width:"0",
  
  scrollTrigger:{
    scroller:"#main",
    start:"1150px 40%",
    end:"top ",
    // markers:true,
  }
})
gsap.from('.product-card',{
  opacity:"0",
  
  scrollTrigger:{
    scroller:"#main",
    start:"35% top",
    end:"top ",
    // markers:true,
    stagger:1,
  }
})
gsap.from('.logo-footer',{
  opacity:"0",
  
  scrollTrigger:{
    scroller:"#main",
    start:"86% top",
    end:"top ",
    // markers:true,
    stagger:1,
  }
})


// SWIPER 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

const wrap_send =  document.getElementsByClassName("wrap-scnd");
const main_div_send = document.getElementsByClassName("button-send");
wrap_send[0].addEventListener('click',()=>{
  gsap.to('.wrap-scnd',{
    height:"auto",
  })
})
wrap_send[0].addEventListener('mouseleave',()=>{
  gsap.to('.wrap-scnd',{
    height:"52px",
  })
})