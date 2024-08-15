
var cross = document.querySelector("#menucross");
var menu = document.querySelector("#menubutton");


menu.addEventListener("click", function() {
    gsap.to(".menudiv",{
        transform: "translateX(0%)",
        duration: 0.5,
        ease: "power2.inOut",
    })
});

cross.addEventListener("click", function() {
    gsap.to(".menudiv",{
        transform: "translateX(100%)",
        duration: 0.5,
        ease: "power2.inOut",
    })
});