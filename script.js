// DOMContentLoaded checks wheather the 

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active"); 
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});


const items = document.querySelectorAll('.instrument h1');
        const progressBar = document.querySelector('.progress-bar');
        const infoBoxes = document.querySelectorAll('.info-box');
        
        items.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                progressBar.style.height = `${(index + 1) * 25}%`;
                document.querySelector('.info-box.active').classList.remove('active');
                document.getElementById(item.dataset.target).classList.add('active');
            });
        });
// piano na
const pianoElement=document.getElementsByClassName("piano")[0];
pianoElement.addEventListener("click",function(){
    window.location.href='./instruments/Piano/index.html';
})
// guiter navigation
const guitarElement=document.getElementsByClassName("guitar")[0];
guitarElement.addEventListener("click",function(){
    window.location.href='./instruments/Guiter/index.html';
})