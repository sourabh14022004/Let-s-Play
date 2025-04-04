// DOMContentLoaded checks wheather the 

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const exitButton = document.getElementsByClassName("exit-btn")[0];


  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active"); 
      exitButton.style.display = 'none';

  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active");
      }
      if (navLinks.classList.contains("active")) {
          exitButton.style.display = 'none';
      } else {
          exitButton.style.display = 'block';
      }
  });
});


  // my code goes here -------------
  let items = document.getElementsByClassName("items")[0];
  items.addEventListener("click", (e) => {
    // here paragraph is targeted ----------------------------------
    if (e.target.children.length === 0) {
      e.target.parentNode.style.transform = "scale(1.2)";
      e.target.parentNode.style.transition = "transform 0.3s ease-in-out";
      setTimeout(() => {
        e.target.parentNode.style.transform = "scale(1)";
      }, 300);
      const audi = new Audio(`./drumAudio/${e.target.innerText}.mp3`);
      audi.play();
    } else if (e.target.children.length > 0 && e.target.children.length <= 1) {
      // here div is targeted---------------------------------------
      // console.log(e.target.children);
      e.target.style.transform = "scale(1.2)";
      e.target.style.transition = "transform 0.3s ease-in-out";
      setTimeout(() => {
        e.target.style.transform = "scale(1)";
      }, 300);
      const audi = new Audio(`../../audio/drumkit/${e.target.children[0].innerText}.mp3`);
      audi.play();
    }
  });
  // key press event ------------------------------------------------------------------------------------------
  let body = document.getElementsByTagName("body")[0];
  body.addEventListener("keydown", (e) => {
    let div = document.getElementsByClassName(`div${e.key}`)[0];
    div.style.transform = "scale(1.2)";
    div.style.transition = "transform 0.3s ease-in-out";
    setTimeout(() => {
      div.style.transform = "scale(1)";
    }, 300);
    const audi = new Audio(`../../audio/drumkit/${e.key}.mp3`);
    // console.log(`./drumAudio/${e.key}.mp3`);
    audi.play();
  });
  
  
  
  
  
  
  
  
  
  