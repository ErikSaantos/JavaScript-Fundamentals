let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tween = gsap.to(".box1", {
    y: -200,
    duration: 5,
    backgroundColor: "red",
});

play.addEventListener("click", () => tween.play()) //Built-in method, already exists
pause.addEventListener("click", () => tween.pause()) 
restart.addEventListener("click", () => tween.restart())