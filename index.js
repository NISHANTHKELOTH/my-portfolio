
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else if (targetId === 'home') {
            document.querySelector('#home').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// project GitHub buttons
const portfolioBtn = document.querySelector(".button1");
const ticTacToeBtn = document.querySelector(".button2");

portfolioBtn.addEventListener("click", () => {
    window.open("https://github.com/yourusername/portfolio", "_blank");
});

ticTacToeBtn.addEventListener("click", () => {
    window.open("https://github.com/yourusername/tic-tac-toe", "_blank");
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";

        if (link.getAttribute("href") === `#${current}`) {
            link.style.color = "#38BDF8";
        }
    });
});