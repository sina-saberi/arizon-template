import gsap from "gsap";

const container = "site-preloader";

(() => {

    const containerClass = "site-preloader";
    const elm = document.querySelector(`.${containerClass}`);
    if (!elm) return;

    const logoPart1 = elm.querySelector(`#Path_1013`);
    const logoPart2 = elm.querySelector(`#Path_1014`);
    const svg = elm.querySelector("svg");

    if (!logoPart1 || !logoPart2 || !svg) {
        return console.error("Required elements not found");
    }

    const tl = gsap.timeline();
    tl.fromTo(logoPart1,
        {
            transform: "translate(3749.41px, -19701.488px)"
        }, {
        transform: "translate(4674.41px, -19297.488px)",
        duration: 1.5,
        ease: "power1.inOut",
    },
        0) // Start at the beginning
        .fromTo(logoPart2,
            {
                transform: "translate(5589.433px, -19546.16px)"
            }, {
            transform: "translate(4674.433px, -19928.16px)",
            duration: 1.5,
            ease: "power1.inOut",
        }, 0)
        .to(svg, {
            rotation: 180,
            duration: 0.4,
            ease: "power1.inOut",
        })
        .to(svg, {
            scale: 1.08,
            duration: 0.3,
            ease: "power1.inOut",
        })
        .to(svg, {
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut",
        })
        .to(elm, {
            opacity: 0,
            duration: .3,
            ease: "power1.inOut",
            onComplete: () => {
                elm.remove()
            }
        });
})()