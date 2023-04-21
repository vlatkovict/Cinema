const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 1.50 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

