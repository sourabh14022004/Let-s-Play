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

let f = document.querySelector('.f')
let fag = document.querySelector('.fag')
let fsharpag = document.querySelector('.fsharpag')
let fsharp = document.querySelector('.fsharp')
let g = document.querySelector('.g')
let gsharp = document.querySelector('.gsharp')
let c = document.querySelector('.c')
let csharp = document.querySelector('.csharp')
let d = document.querySelector('.d')
let dsharp = document.querySelector('.dsharp')
let b = document.querySelector('.b')
let bsharp = document.querySelector('.bsharp')
let a = document.querySelector('.a')
let e = document.querySelector('.e')
let gsharpag = document.querySelector('.gsharpag')
let body = document.querySelector('.body')
let dsharphash = document.querySelector('.dsharphash')

let sound1 = new Audio('../../audio/guiter/1st.mp3')
let sound2 = new Audio('../../audio/guiter/2nd_String_B__64kb (mp3cut.net).mp3')
let sound3 = new Audio('../../audio/guiter/3rd.mp3')
let sound4 = new Audio('../../audio/guiter/4th_String_D_64kb (mp3cut.net).mp3')
let sound5 = new Audio('../../audio/guiter/5th_String_A_64kb (mp3cut.net).mp3')
let sound6 = new Audio('../../audio/guiter/6th_String_E_64kb (mp3cut.net).mp3')
let sound7 = new Audio('../../audio/guiter/C_64kb (mp3cut.net).mp3')
let sound8 = new Audio('../../audio/guiter/D_64kb (mp3cut.net).mp3')
let sound9 = new Audio('../../audio/guiter/Dm_64kb (mp3cut.net).mp3')
let sound10 = new Audio('../../audio/guiter/E_64kb (mp3cut.net).mp3')

const soundMap = {
  f: sound1,
  fsharp: sound2,
  g: sound3,
  gsharp: sound4,
  c: sound5,
  csharp: sound6,
  d: sound7,
  dsharp: sound8,
  b: sound9,
  bsharp: sound10,
  a: sound3,
  e: sound6,
  gsharpag: sound6,
  fag: sound9,
  dsharphash: sound2,
};

Object.keys(soundMap).forEach(id => {
  const element = document.querySelector(`.${id}`);
  
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
});

body.addEventListener('keydown', function(event) {
  sound1.pause();
  sound2.pause();
  sound3.pause();
  sound4.pause();
  sound5.pause();
  sound6.pause();
  sound7.pause();
  sound8.pause();
  sound9.pause();
  sound10.pause();

  if (event.key == 'a') {
    f.style.backgroundColor = 'orange';
    sound1.play();
  }
  if (event.key == 's') {
    fsharp.style.backgroundColor = 'orange';
    sound2.play();
  }
  if (event.key == 'd') {
    g.style.backgroundColor = 'orange';
    sound3.play();
  }
  if (event.key == 'f') {
    gsharp.style.backgroundColor = 'orange';
    sound4.play();
  }
  if (event.key == 'g') {
    c.style.backgroundColor = 'orange';
    sound5.play();
  }
  if (event.key == 'h') {
    csharp.style.backgroundColor = 'orange';
    sound6.play();
  }
  if (event.key == 'j') {
    d.style.backgroundColor = 'orange';
    sound7.play();
  }
  if (event.key == 'k') {
    dsharp.style.backgroundColor = 'orange';
    sound8.play();
  }
  if (event.key == 'l') {
    b.style.backgroundColor = 'orange';
    sound9.play();
  }
  if (event.key == 'q') {
    bsharp.style.backgroundColor = 'orange';
    sound10.play();
  }
  if (event.key == 'w') {
    a.style.backgroundColor = 'orange';
    sound3.play();
  }
  if (event.key == 'e') {
    gsharpag.style.backgroundColor = 'orange';
    sound6.play();
  }
  if (event.key == 'r') {
    fag.style.backgroundColor = 'orange';
    sound9.play();
  }
  if (event.key == 't') {
    fsharpag.style.backgroundColor = 'orange';
    sound1.play();
  }
  if (event.key == 'y') {
    dsharphash.style.backgroundColor = 'orange';
    sound7.play();
  }
  if (event.key == 'u') {
    e.style.backgroundColor = 'orange';
    sound2.play();
  }
});

body.addEventListener('keyup', function(event) {
  if (event.key == 'a') {
    f.style.backgroundColor = '';
  }
  if (event.key == 's') {
    fsharp.style.backgroundColor = '';
  }
  if (event.key == 'd') {
    g.style.backgroundColor = '';
  }
  if (event.key == 'f') {
    gsharp.style.backgroundColor = '';
  }
  if (event.key == 'g') {
    c.style.backgroundColor = '';
  }
  if (event.key == 'h') {
    csharp.style.backgroundColor = '';
  }
  if (event.key == 'j') {
    d.style.backgroundColor = '';
  }
  if (event.key == 'k') {
    dsharp.style.backgroundColor = '';
  }
  if (event.key == 'l') {
    b.style.backgroundColor = '';
  }
  if (event.key == 'q') {
    bsharp.style.backgroundColor = '';
  }
  if (event.key == 'w') {
    a.style.backgroundColor = '';
  }
  if (event.key == 'e') {
    gsharpag.style.backgroundColor = '';
  }
  if (event.key == 'r') {
    fag.style.backgroundColor = '';
  }
  if (event.key == 't') {
    fsharpag.style.backgroundColor = '';
  }
  if (event.key == 'y') {
    dsharphash.style.backgroundColor = '';
  }
  if (event.key == 'u') {
    e.style.backgroundColor = '';
  }
});