


gsap.to("#page3 h1",
{
   
    transform:"translateX(-180%)",
    scrollTrigger:{
     
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true,


    }


});


gsap.to("#page3img img",{
    width:"100%",
    scrollTrigger:{
        
        start:"top 0%",
        end:"top -100%",
        trigger:"#page3img",
        scroller:"body",
        scrub:5,
        pin:true


    }

})



gsap.to("#page4 h1",{

    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,


    }


})


gsap.to("#page4img img",{

    width:"100%",
    scrollTrigger:{
     
        start:"top 0%",
        end:"top -100%",
        trigger:"#page4img",
        scroller:"body",
        scrub:5,
        pin:true


    }

})

gsap.to("#page5 h1",{

    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,


    }


})


gsap.to("#page5img img",{

    width:"100%",
    scrollTrigger:{
        
        start:"top 0%",
        end:"top -100%",
        trigger:"#page5img",
        scroller:"body",
        scrub:5,
        pin:true


    }

})



var tl = gsap.timeline();


tl.fromTo("#nav #navpart1 img", {
    y: -100
}, {
    y: 0,
    duration: 1,
    stagger:1 // Stagger by 0.5 seconds
});

tl.fromTo("#nav #navpart1 h4", {
    y: -100
}, {
    y: 0,
    duration: 1,
    stagger:1 // Stagger by 0.5 seconds
});

// Animate #navpart2 from y: -100 to y: 10
tl.fromTo("#nav #navpart2 h3", {
    y: -100,
    opacity:-1
}, {
    opacity:1,
    y: 10,
    duration: 0.2,
    stagger: 0.5 
});


tl.fromTo("#page1content #h201", {
    x: "-200%",
    
}, {
    
    x: 0,
    duration: 0.5,
    stagger: 0.5 
}); 

tl.fromTo("#page1content #h202", {
    x: "200%",
    
}, {
    
    x: 0,
    duration: 0.5,
    stagger: 0.5 
}); 


tl.fromTo("#page1content img", {
    opacity:0
    
}, {
    
    opacity:1,
    duration: 1.5,
    stagger: 0.5 
});

tl.fromTo("#scrolldown", {
    opacity:0
    
}, {
    
    opacity:1,
    duration: 1,
    stagger: 0.5 
}); 
