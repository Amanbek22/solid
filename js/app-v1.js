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

		if (step < 19.7) {
			sidebarCircles[i].setAttribute(
				"transform",
				`matrix(${a}, ${b}, ${c}, ${d},
			120, ${step * 9})`
			);
      if(step < 1){
        sidebarCircles[i].setAttribute(
          "transform",
          `matrix(${a}, ${b}, ${c}, ${d},
        120, -13)`
        );
      }
		}
		if (step >= 19.7 && step < 28.5) {
			if (scrollval > window.scrollY) {
				sidebarCircles[i].setAttribute(
					"transform",
					`matrix(${a}, ${b}, ${c}, ${d},
				${e + step}, ${f})`
				);
			} else{
        sidebarCircles[i].setAttribute(
					"transform",
					`matrix(${a}, ${b}, ${c}, ${d},
				${2800 / step - step * 2}, ${176})`
				);
      }
				
		}
		if (step >= 28.5) {
      
			sidebarCircles[i].setAttribute(
				"transform",
				`matrix(${a}, ${b}, ${c}, ${d},
			38, ${(step - 8.8) * 9})`
			);
		}
	}

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
	document.getElementById("parallaxSky").style = `top: ${-100 + (window.pageYOffset/2)}px`
	document.getElementById("parallaxMountains").style = `top: ${350 + (window.pageYOffset/2)}px`
	document.getElementById("parallaxBottom").style = `bottom: ${-400 + (window.pageYOffset/1)}px`
})

const coursesArr = [
	{
		id: 1,
		icon: "fab fa-react",
		name: "Front-End React.js разработка",
    department: "react.html",
		description: `Экстремальный курс от Solid Academy \"FRONT-END DEVELOPING\" с нуля🔥💻.
    Освойте профессию разработчика с нуля до специалиста за 6 месяцев <br>Почему Front-End? <br>
    Если вы любите технологии, получаете удовольствие от создания креативных пользовательских
    интерфейсов и ищете захватывающую карьеру с большим потенциалом роста, 
    то Front-end разработка может стать самым лучшим выбором.
    `
	},
	{
		id: 2,
		icon: "fab fa-node-js",
		name: "JavaScript Full Stack разработка",
    department: "full.html",
		description: `Экстремальный курс от Solid Academy \"JAVASCRIPT DEVELOPING\" с нуля🔥💻. 
    Получи профессию своей мечты JavaScript Full Stack разработчика <br>Почему JavaScript?<br>
    В процессе обучения вы получите фундаментальные знания Back-End и Front-End разработки,
    научитесь программировать на JavaScript, использовать современные инструменты для создания 
    Full Stack-приложений, включая React.js, Node.js, Express.js, PostgreSQL. 
    `
	},
	{
		id: 3,
		icon: "fab fa-android",
		name: "Mobile-Dev Java разработка",
    department: "full.html",
		description: `Выше отмечено, что Java относится к языкам программирования общего назначения. 
    Новичкам интересно знать, что конкретно пишут Java-программисты, чтобы определиться с выбором языка.
    По данным компании Oracle, программы на Java запускаются на 3 млрд девайсов. Это маркетинговое 
    сообщение сложно проверить. Тем не менее Java широко используется и входит в число самых востребованных 
    языков, это не вызывает сомнения.`
	},
  {
		id: 4,
		icon: "fab fa-python",
		name: "Back-End Python s разработка",
    department: "full.html",
		description: `Язык программирования Python 3 — это мощный инструмент для создания программ самого 
    разнообразного назначения, доступный даже для новичков. С его помощью можно решать задачи различных типов.
    Язык Python обладает некоторыми примечательными особенностями, которые обуславливают его широкое распространение.
    Вам точно стоит попробовать Python, если вы никогда не писали код, но хотите получить первую работающую
    программу как можно быстрее.`
	},
  {
		id: 5,
		icon: "far fa-gem",
		name: "UI/UX Design",
    department: "full.html",
		description: `На курсе «UX-дизайн» вы научитесь проектировать удобные и функциональные интерфейсы сайтов, 
    приложений и программ. Вы не только узнаете, как разрабатывать визуально привлекательные проекты,
    но и сможете создавать новый положительный опыт пользователей и менять мышление бизнеса об интерфейсах
    UX-дизайн — это проектирование интерфейса на основе исследований пользовательского опыта и поведения.`
	},
]

const chooseCourse = (index) => {
	document.getElementById("course").innerHTML = `
	<b>${coursesArr[index].name}</b>
	<br />
	${coursesArr[index].description}
	<a href="${coursesArr[index].department}" class="u-text-blue"><br>Узнать Больше</a>
	`
	const sidebarLinks = document.querySelectorAll(".sidebar a");
	sidebarLinks.forEach((item) => item.classList.remove("active"))
	sidebarLinks[index].className += "active"
}

const setSidebar = () => {
	coursesArr.forEach((item, index) => {
		document.getElementById("bar")
		.insertAdjacentHTML('beforeend',
		 `<a id="${item.name}" onclick="chooseCourse(${index})"><i class="${item.icon}"></i></a>`)
	})
}

const setCoursesMobile = () => {
	coursesArr.forEach((item, index) => {
		document.getElementById("coursesContainer")
		.insertAdjacentHTML("beforeend", 
		`
		<div class="courses-inner courses-inner-mobile">
		<div class="courses-info">
			<div id="course" class="courses-content">
				<b>${item.name}</b>
				<br>
				${item.description}
				<a href="${coursesArr[index].department}" class="u-text-blue"><br>Узнать Больше</a>
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

const setNavLinks = () => {
	coursesArr.forEach((item) => {
		document.querySelector(".nav-list").insertAdjacentHTML("beforeend", `
			<li class="nav-item nav--item--link">
				${item.name}
			</li>
		`)
	})
}

window.addEventListener("load", () => {
	setNavLinks()
	setSidebar()
	chooseCourse(0)
	setCoursesMobile()
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