


var blurcrsr = document.querySelector("#cursor-blur")
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  console.log(dets)
  crsr.style.left = dets.x +20 + "px" 
  crsr.style.top = dets.y + "px" 

  blurcrsr.style.left = dets.x-125+ "px" 
  blurcrsr.style.top = dets.y-125+ "px" 
  
})
var navh4all = document.querySelectorAll("#nav h4")
navh4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border = "1px solid white"
    crsr.style.backgroundColor = "transparent"
  })
})

var navh4all = document.querySelectorAll("#nav h4")
navh4all.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger: {
      trigger:"#nav",
      scroller:"body",
    //   markers:"true",
      start:"top -10%",
      end:"end -11%",
      scrub:1
},
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
gsap.from("#about-us img ,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller:"body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
    stagger:0.1
  }
});
gsap.from(".card", {
  scale:0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller:"body",
    start: "top 70%",
    end: "top 65%",
    scrub:1,
    stagger:0.2
  }
});

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller:"body",
    start: "top 80%",
    end: "top 80%",
    scrub:3,
  }
})
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});