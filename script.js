

var p=document.querySelector('p');
gsap.from('p',{
    opacity:0,
    y:150,
    stagger:.5,
    duration:1,
    rotate:30,
})

var center=document.querySelector(".center");
var centerbtm=document.querySelector(".centerbtm");

center.addEventListener("mouseenter",function(){
    gsap.from('.centerbtm',{
        opacity:0,
        y:100,
        duration:2,
        delay:1,
        
    })
})

var head=document.querySelector("header");
gsap.from('header',{
    opacity:0,
    y:-100,
    duration:1.5,
    // delay:1,
    
})
var h5=document.querySelectorAll(".h5");
gsap.from('h5',{
    opacity:0,
    x:150,
    duration:1,
    // delay:1,
    
})
var vertualcard=document.querySelectorAll(".vertualcard");
gsap.from('.vertualcard',{
    opacity:0,
    y:100,
    duration:1,
    delay:4,
    
})
