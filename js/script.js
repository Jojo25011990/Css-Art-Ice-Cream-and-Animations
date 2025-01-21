"use strict";
/*
In this code, the throttle mechanism is a bit unnecessary, but I originally planned to add more animations to the top ice creams. However, I won’t be adding them anymore since the project is finished, and because I put effort into it, I don’t feel like rewriting it. 😂
*/

const bite03 = document.querySelector(".ice-cream__bite-03");
const bite04 = document.querySelector(".ice-cream__bite-04");
const melting = document.querySelector(".ice-cream__melting-01");
const splash = document.querySelector(".ice-cream__splash-base-01");
const windowHeight = 2650;
let scrolling = false;

const scrollFunction = () => {
	if (window.scrollY > windowHeight) {
		bite03.style.animation = "bite-animate 0.3s linear 0.3s forwards";
		bite04.style.animation = "bite-animate 0.3s linear 0.6s forwards";
		melting.style.animation = "tears-drop 5s linear forwards";
		splash.style.animation = "scale-splash 8s linear 4.5s forwards";
	}
};

window.addEventListener("scroll", () => {
	if (!scrolling) {
		scrolling = true;

		setTimeout(() => {
			scrollFunction();
			scrolling = false;
		}, 250);
	}
});
