const floatingNavs = document.querySelectorAll(".floating-nav a");

floatingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    var activeNav = document.querySelector(".floating-nav a.active");
    activeNav.classList.remove("active");
    nav.classList.add("active");
  });
});

const resumeRight = document.querySelector(".resume-right");

const experienceContent = `
           <h4>Experience</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

          <ul>
            <li>
              <h6>2020 - 2022</h6>
              <h5>felan</h5>
              <p>game company</p>
            </li>
            <li>
              <h6>2022 - 2024</h6>
              <h5>pspss</h5>
              <p>mobile company</p>
            </li>
            <li>
              <h6>2024 - 2025</h6>
              <h5>elmos</h5>
              <p>koskhol company</p>
            </li>
            <li>
              <h6>2024 - 2025</h6>
              <h5>elmos</h5>
              <p>koskhol company</p>
            </li>
          </ul>

`;
const educationContent = `
<h4>Education</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores.</p>
                <ul>
                    <li>
                        <h5>College Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Frontend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Backend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                </ul>
                `;
const skillsContent = `
<h4>Skills</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li><img src="./assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="./assets/next.png" alt="NextJS logo"></li>
                    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="./assets/prisma.png" alt="Prisma logo"></li>
                    <li><img src="./assets/mongo.jpg" alt="MongoDB logo"></li>
                    <li><img src="./assets/jwt.png" alt="JWT logo"></li>
                    <li><img src="./assets/node.png" alt="NodeJS logo"></li>
                </ul>
                `;
const aboutContent = `
<h4>About me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis excepturi quibusdam.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Ernest Achiever</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>6+ years</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>youremail@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Ghanaian</h5>
                    </li>
                    <li>
                        <h6>Freelance & collabs:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>+233557097546</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@yourhandle</h5>
                    </li>
                </ul>
                `;
const experienceBtn = document.querySelector(".exp-btn");
const educationBtn = document.querySelector(".edu-btn");
const skillsBtn = document.querySelector(".ski-btn");
const aboutBtn = document.querySelector(".abo-btn");

experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume-right";
  experienceBtn.classList.add("btn-primary");
  educationBtn.classList.remove("btn-primary");
  skillsBtn.classList.remove("btn-primary");
  aboutBtn.classList.remove("btn-primary");
});
educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume-right";
  resumeRight.classList.add("education");
  educationBtn.classList.add("btn-primary");
  experienceBtn.classList.remove("btn-primary");
  skillsBtn.classList.remove("btn-primary");
  aboutBtn.classList.remove("btn-primary");
});
skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  resumeRight.className = "resume-right";
  resumeRight.classList.add("skills");
  skillsBtn.classList.add("btn-primary");
  educationBtn.classList.remove("btn-primary");
  experienceBtn.classList.remove("btn-primary");
  aboutBtn.classList.remove("btn-primary");
});
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume-right";
  resumeRight.classList.add("about");
  aboutBtn.classList.add("btn-primary");
  educationBtn.classList.remove("btn-primary");
  skillsBtn.classList.remove("btn-primary");
  experienceBtn.classList.remove("btn-primary");
});

const containerElement = document.querySelector(".project-container");
let mixer = mixitup(containerElement, {
  animation: {
    enable: false,
  },
});
mixer.filter("*");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const faqs = document.querySelectorAll(".faqs-item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const p = faq.querySelector("p");
    const icon = faq.querySelector(".faqs-icon");
    p.classList.toggle("show");
    if (p.classList.contains("show")) {
      icon.innerHTML = `<span class="faqs-icon"><i class="uil uil-angle-up"></i>`;
    } else {
      icon.innerHTML = `<span class="faqs-icon"><i class="uil uil-angle-down"></i>`;
    }
  });
});

const themeTogller = document.querySelector(".nav-btn");
const themeBtn = document.querySelector(".nav-btn i");
themeTogller.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-var");
  if (document.body.classList == "") {
    themeBtn.classList = ["uil, uil-sun"];
    window.localStorage.setItem("portfolio-theme", "");
  } else {
    themeBtn.classList = ["uil, uil-moon"];
    window.localStorage.setItem("portfolio-theme", "dark-theme-var");
  }
});

document.body.className = window.localStorage.getItem("portfolio-theme");
