// Staggers -> Escalonar
// Its used for stagger the start of the animation of various elements, instead animate all at the same time 
// https://greensock.com/docs/v3/staggers

gsap.set(".box", {
    borderRadius: 0
});

gsap.to(".box", {
    borderRadius: 100,
    duration: 1,
    y: -100,
    ease: "power1",
    yoyo: true,
    repeat: -1,
    // Normally, you use "amount" or "each", not both
    stagger: {
        amount: 4, // Total time between the first and last element in seconds
        each: 0.5, // Delay between each element
        from: 0, // Position in array of some element
        //from: "center", "end", "start", "edges", "random", idx
    }
});