document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const exitButton = document.querySelector(".exit-btn");

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

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');

let q = document.querySelector('.q');
let w = document.querySelector('.w');
let e = document.querySelector('.e');
let r = document.querySelector('.r');

let a = document.querySelector('.a');
let s = document.querySelector('.s');
let d = document.querySelector('.d');
let f = document.querySelector('.f');

let z = document.querySelector('.z');
let x = document.querySelector('.x');
let c = document.querySelector('.c');
let v = document.querySelector('.v');

let body = document.querySelector('.body');


let sound1 = new Audio('../../audio/guiter/1st.mp3');
let sound2 = new Audio('../../audio/guiter/2nd_String_B__64kb (mp3cut.net).mp3');
let sound3 = new Audio('../../audio/guiter/3rd.mp3');
let sound4 = new Audio('../../audio/guiter/4th_String_D_64kb (mp3cut.net).mp3');
let sound5 = new Audio('../../audio/guiter/5th_String_A_64kb (mp3cut.net).mp3');
let sound6 = new Audio('../../audio/guiter/6th_String_E_64kb (mp3cut.net).mp3');
let sound7 = new Audio('../../audio/guiter/C_64kb (mp3cut.net).mp3');
let sound8 = new Audio('../../audio/guiter/D_64kb (mp3cut.net).mp3');
let sound9 = new Audio('../../audio/guiter/Dm_64kb (mp3cut.net).mp3');
let sound10 = new Audio('../../audio/guiter/E_64kb (mp3cut.net).mp3');

const soundMap = {
  one: sound1,
  two: sound2,
  three: sound3,
  four: sound4,

  q: sound5,
  w: sound6,
  e: sound7,
  r: sound8,

  a: sound9,
  s: sound10,
  d: sound1,
  f: sound3,

  z: sound5,
  x: sound7,
  c: sound9,
  v: sound10
};

Object.keys(soundMap).forEach(id => {
  const element = document.querySelector(`.${id}`);
  
  if (element) {
    element.addEventListener('click', () => {
      // Pause all sounds
      Object.values(soundMap).forEach(sound => sound.pause());

      // Play selected sound
      element.style.backgroundColor = 'orange';
      soundMap[id].currentTime = 0;  // Reset sound
      soundMap[id].play();

      setTimeout(() => {
        element.style.backgroundColor = '';  // Remove highlight after sound
      }, 200);
    });
  }
});

body.addEventListener('keydown', function(event) {
  Object.values(soundMap).forEach(sound => sound.pause());

  if (event.key === '1') {
    one.style.backgroundColor = 'orange';
    sound1.play();
  }
  if (event.key === '2') {
    two.style.backgroundColor = 'orange';
    sound2.play();
  }
  if (event.key === '3') {
    three.style.backgroundColor = 'orange';
    sound3.play();
  }
  if (event.key === '4') {
    four.style.backgroundColor = 'orange';
    sound4.play();
  }
  if (event.key === 'q') {
    q.style.backgroundColor = 'orange';
    sound5.play();
  }
  if (event.key === 'w') {
    w.style.backgroundColor = 'orange';
    sound6.play();
  }
  if (event.key === 'e') {
    e.style.backgroundColor = 'orange';
    sound7.play();
  }
  if (event.key === 'r') {
    r.style.backgroundColor = 'orange';
    sound8.play();
  }
  if (event.key === 'a') {
    a.style.backgroundColor = 'orange';
    sound9.play();
  }
  if (event.key === 's') {
    s.style.backgroundColor = 'orange';
    sound10.play();
  }
  if (event.key === 'd') {
    d.style.backgroundColor = 'orange';
    sound1.play();
  }
  if (event.key === 'f') {
    f.style.backgroundColor = 'orange';
    sound3.play();
  }
  if (event.key === 'z') {
    z.style.backgroundColor = 'orange';
    sound5.play();
  }
  if (event.key === 'x') {
    x.style.backgroundColor = 'orange';
    sound7.play();
  }
  if (event.key === 'c') {
    c.style.backgroundColor = 'orange';
    sound9.play();
  }
  if (event.key === 'v') {
    v.style.backgroundColor = 'orange';
    sound10.play();
  }
});

body.addEventListener('keyup', function(event) {
  if (event.key === '1') {
    one.style.backgroundColor = '';
  }
  if (event.key === '2') {
    two.style.backgroundColor = ''; 
  }
  if (event.key === '3') {
    three.style.backgroundColor = '';
  }
  if (event.key === '4') {
    four.style.backgroundColor = '';
  }
  if (event.key === 'q') {
    q.style.backgroundColor = '';
  }
  if (event.key === 'w') {
    w.style.backgroundColor = '';
  }
  if (event.key === 'e') {
    e.style.backgroundColor = '';
  }
  if (event.key === 'r') {
    r.style.backgroundColor = '';
  }
  if (event.key === 'a') {
    a.style.backgroundColor = '';
  }
  if (event.key === 's') {
    s.style.backgroundColor = '';
  }
  if (event.key === 'd') {
    d.style.backgroundColor = '';
  }
  if (event.key === 'f') {
    f.style.backgroundColor = '';
  }
  if (event.key === 'z') {
    z.style.backgroundColor = '';
  }
  if (event.key === 'x') {
    x.style.backgroundColor = '';
  }
  if (event.key === 'c') {
    c.style.backgroundColor = '';
  }
  if (event.key === 'v') {
    v.style.backgroundColor = '';
  }
});