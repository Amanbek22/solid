const sidebarCircles = document.getElementsByClassName("sidebarCircle");
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

// Function to change position of sidebar's circles
function changeCirclePosition() {
	let scrollval = 0;
	let step = window.scrollY / (window.innerHeight / 100);

	for (let i = 0; i < sidebarCircles.length; i++) {
		let a = sidebarCircles[i].getCTM().a;
		let b = sidebarCircles[i].getCTM().b;
		let c = sidebarCircles[i].getCTM().c;
		let d = sidebarCircles[i].getCTM().d;
		let e = sidebarCircles[i].getCTM().e;
		let f = sidebarCircles[i].getCTM().f;

		if (step < 19.3) {
			sidebarCircles[i].setAttribute(
				"transform",
				`matrix(${a}, ${b}, ${c}, ${d},
			120, ${step * 9})`
			);
		}
		if (step >= 19.3 && step < 19.5) {
			if (scrollval > window.scrollY) {
				sidebarCircles[i].setAttribute(
					"transform",
					`matrix(${a}, ${b}, ${c}, ${d},
				${e + step}, ${f})`
				);
			} else
				sidebarCircles[i].setAttribute(
					"transform",
					`matrix(${a}, ${b}, ${c}, ${d},
				${2400 / step - step * 2}, ${f})`
				);
		}

		if (step >= 19.5) {
			sidebarCircles[i].setAttribute(
				"transform",
				`matrix(${a}, ${b}, ${c}, ${d},
			38, ${step * 9})`
			);
		}
	}
	// console.log(q);
	scrollval = window.scrollY;
}

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
	changeCirclePosition();
	hideBurgerOnScroll();
});

window.addEventListener("resize", hideBurgerOnDesktop);

// scroll parallax
window.addEventListener("scroll", () => {
	if(document.getElementById("parallaxSky")){
		document.getElementById("parallaxSky").style = `top: ${-100 + (window.pageYOffset/2)}px`
		document.getElementById("parallaxMountains").style = `top: ${350 + (window.pageYOffset/2)}px`
		document.getElementById("parallaxBottom").style = `bottom: ${-400 + (window.pageYOffset/1)}px`
	}
})

const coursesArr = [
	{
		id: 1,
		icon: "",
		name: "Front-End разработка",
		description: "Экстремальный курс от Solid Academy \"FRONT-END DEVELOPING\" с нуля🔥💻. Освойте профессию разработчика с нуля до специалиста за 6 месяцев Почему Front-End? Пишешь код и сразу видишь результат Портфолио визуализировано для заказчика Зная Front-End можно перейти в любую область разработки Ты научишься создавать сайты и интерфейсы с использованием HTML и CSS Освоишь один из самых востребованных языков — JavaScript."
	},
	{
		id: 2,
		icon: "",
		name: "Back-End разработка",
		description: "Экстремальный курс от Solid Academy \"FRONT-END DEVELOPING\" с нуля🔥💻. Освойте профессию разработчика с нуля до специалиста за 6 месяцев Почему Front-End? Пишешь код и сразу видишь результат Портфолио визуализировано для заказчика Зная Front-End можно перейти в любую область разработки Ты научишься создавать сайты и интерфейсы с использованием HTML и CSS Освоишь один из самых востребованных языков — JavaScript."
	},
	{
		id: 3,
		icon: "",
		name: "Mobile-Dev разработка",
		description: "Экстремальный курс от Solid Academy \"FRONT-END DEVELOPING\" с нуля🔥💻. Освойте профессию разработчика с нуля до специалиста за 6 месяцев Почему Front-End? Пишешь код и сразу видишь результат Портфолио визуализировано для заказчика Зная Front-End можно перейти в любую область разработки Ты научишься создавать сайты и интерфейсы с использованием HTML и CSS Освоишь один из самых востребованных языков — JavaScript."
	},
]

const chooseCourse = (index) => {
	let course = document.getElementById("course");
	course ? course.innerHTML = `
	<b>${coursesArr[index].name}</b>
	<br />
	${coursesArr[index].description}
	<a href="#" class="u-text-blue">View More</a>
	` : null
	const sidebarLinks = document.querySelectorAll(".sidebar a");
	sidebarLinks.forEach((item) => item.classList.remove("active"))
	sidebarLinks[index] ? sidebarLinks[index].className += "active" : null
}

const setSidebar = () => {
	coursesArr.forEach((item, index) => {
		document.getElementById("bar")
		?.insertAdjacentHTML('beforeend',
		 `<a id="${item.name}" onclick="chooseCourse(${index})"><i class="fab fa-node-js"></i></a>`)
	})
}

const setCoursesMobile = () => {
	coursesArr.forEach((item, index) => {
		document.getElementById("coursesContainer")
		?.insertAdjacentHTML("beforeend", 
		`
		<div class="courses-inner courses-inner-mobile">
		<div class="courses-info">
			<div id="course" class="courses-content">
				<b>${item.name}</b>
				<br>
				${item.description}
			</div>
		</div>
		<div class="courses-logo">
			<img src="./images/Business-meeting.svg" alt="" srcset="" />
		</div>
	</div>
		`
		)
	})
}

window.addEventListener("load", () => {
	setSidebar()
	chooseCourse(0)
	setCoursesMobile()
})
