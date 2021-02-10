//global variables
const navList = document.getElementById('nav-list');
const sections = document.getElementsByTagName('section');
const pageHeader = document.querySelector('.page-header');

//setting the navigation links,adding event listeners, appending to main navbar
for (let section = 0; section < sections.length; section++) {
    let addNav = document.createElement('li');
    let data = sections[section].getAttribute('data-nav');
    addNav.setAttribute("class", "menu-link");
    addNav.textContent = data;
    addNav.addEventListener('click', scrollTO);
    navList.appendChild(addNav);
}

//scroll function to view target link section
function scrollTO(e) {
    let removeClass = document.querySelector('.active-class');
    removeClass.classList.toggle("active-class");
    let sectionName = e.path[0].innerText;
    let searchName = (sectionName.slice(0, 7) + sectionName.slice(8)).toLowerCase();
    let searchSection = document.getElementById(searchName);
    searchSection.classList.toggle("active-class");
    let viewSection = searchSection.parentElement.previousElementSibling;
    viewSection.scrollIntoView({ behavior: "smooth", inline: "center", block: "center"});
}


//collapsible section variables
let coll = document.getElementsByClassName("collapsible");
let i;

//collapsible section event listener
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}

//Scroll to top button

//Get the button
const topButton = document.getElementById("topBtn");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

}

// When the user clicks on the top button, scroll to the top of the document
topButton.addEventListener('click', topFunction);
let rootElement = document.documentElement;
function topFunction() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}