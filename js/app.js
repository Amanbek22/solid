const navbar = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const checkbox = document.getElementById("checkbox");
const menuToggle = document.querySelector(".menu-bars");

// Set active link
const sidebarLinks = document.querySelectorAll(".sidebar a");

for (let i = 0; i < sidebarLinks.length; i++) {
	sidebarLinks[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("active");
		if (current.length > 0)
			current[0].className = current[0].className.replace("active", "");
		this.className += "active";
	});
}

// Open or close burger menu
menuToggle.addEventListener("click", () => {
	navUl.classList.toggle("slide");
});


// Function to hide burger menu on large screens
function hideBurgerOnDesktop() {
	if (window.innerWidth > 576) {
		navUl.classList.remove("slide");
		checkbox.checked = false;
	}
}

// Function to hide burger on scroll event
function hideBurgerOnScroll() {
	if (window.scrollY > 0) {
		navbar.classList.add("nav-bg");
		navUl.classList.remove("slide");
		checkbox.checked = false;
	} else {
		navbar.classList.remove("nav-bg");
	}
}

window.addEventListener("scroll", function () {
	hideBurgerOnScroll();
});

window.addEventListener("resize", hideBurgerOnDesktop);

// scroll parallax
window.addEventListener("scroll", () => {
	document.getElementById("parallaxSky").style = `top: ${-100 + (window.pageYOffset/2)}px`
	document.getElementById("parallaxMountains").style = `top: ${350 + (window.pageYOffset/2)}px`
	document.getElementById("parallaxBottom").style = `bottom: ${-400 + (window.pageYOffset/1)}px`
})


const modal = document.getElementById("modalWrapper")
const openModal = () => {
	modal.style = "left: 0";
}

let btnWriteUs = document.getElementById("write_us");

btnWriteUs.addEventListener("click", () => {
	openModal();
})

document.getElementById("modalWrapper").addEventListener("click", function(evt) {
	var flyoutElement = document.getElementById('modal'),
		targetElement = evt.target;  // clicked element

	do {
		if (targetElement == flyoutElement) {
			// This is a click inside. Do nothing, just return.
			return;
		}
		// Go up the DOM
		targetElement = targetElement.parentNode;
	} while (targetElement);

	// This is a click outside.
	document.getElementById("modalWrapper").style = "left: -120%;"
});