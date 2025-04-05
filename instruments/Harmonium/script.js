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



document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector('.body') || document.body;
    let sa = document.querySelector('#sa');
    let re = document.querySelector('#re');
    let ga = document.querySelector('#ga');
    let ma = document.querySelector('#ma');
    let pa = document.querySelector('#pa');
    let dha = document.querySelector('#dha');
    let ni = document.querySelector('#ni');
    let sa2 = document.querySelector('#sa2');
  
    
    let noteSa = new Audio('../../audio/harmonium/key01.mp3');
    let noteRe = new Audio('../../audio/harmonium/key02.mp3');  
    let noteGa = new Audio('../../audio/harmonium/key04.mp3');
    let noteMa = new Audio('../../audio/harmonium/key05.mp3');
    let notePa = new Audio('../../audio/harmonium/key01.mp3');
    let noteDha = new Audio('../../audio/harmonium/key06.mp3');
    let noteNi = new Audio('../../audio/harmonium/key07.mp3');
    let noteSa2 = new Audio('../../audio/harmonium/key02.mp3');
  

    function addKeyPressEffect(element) {
      if (element) {
        element.classList.add('active', 'flash');
        setTimeout(() => {
          element.classList.remove('active', 'flash');
        }, 300);
      }
    }
  

    if (body) {
      body.addEventListener('keypress', function (event) {

        noteSa.pause(); noteSa.currentTime = 0;
        noteRe.pause(); noteRe.currentTime = 0;
        noteGa.pause(); noteGa.currentTime = 0;
        noteMa.pause(); noteMa.currentTime = 0;
        notePa.pause(); notePa.currentTime = 0;
        noteDha.pause(); noteDha.currentTime = 0;
        noteNi.pause(); noteNi.currentTime = 0;
        noteSa2.pause(); noteSa2.currentTime = 0;
        

        if (event.key === 'a' && sa) {
          sa.style.backgroundColor = '#FFA500'; 
          addKeyPressEffect(sa);
          console.log('Playing Sa note');
          noteSa.play();
        }
        if (event.key === 's' && re) {
          re.style.backgroundColor = '#87CEEB'; 
          addKeyPressEffect(re);
          noteRe.play();
        }
        if (event.key === 'd' && ga) {
          ga.style.backgroundColor = '#90EE90'; 
          addKeyPressEffect(ga);
          noteGa.play();
        }
        if (event.key === 'f' && ma) {
          ma.style.backgroundColor = '#FF6347'; 
          addKeyPressEffect(ma);
          noteMa.play();
        }
        if (event.key === 'g' && pa) {
          pa.style.backgroundColor = '#FFD700'; 
          addKeyPressEffect(pa);
          notePa.play();
        }
        if (event.key === 'h' && dha) {
          dha.style.backgroundColor = '#DDA0DD'; 
          addKeyPressEffect(dha);
          noteDha.play();
        }
        if (event.key === 'j' && ni) {
          ni.style.backgroundColor = '#00FFFF'; 
          addKeyPressEffect(ni);
          noteNi.play();
        }
        if (event.key === 'k' && sa2) {
          sa2.style.backgroundColor = '#FF69B4'; 
          addKeyPressEffect(sa2);
          noteSa2.play();
        }
      });
    }
  

    if (sa) {
      sa.addEventListener('click', function() {
        noteSa.pause(); noteSa.currentTime = 0;
        sa.style.backgroundColor = '#FFA500';
        addKeyPressEffect(sa);
        noteSa.play();
      });
    }
  
    if (re) {
      re.addEventListener('click', function() {
        noteRe.pause(); noteRe.currentTime = 0;
        re.style.backgroundColor = '#87CEEB';
        addKeyPressEffect(re);
        noteRe.play();
      });
    }
  
    if (ga) {
      ga.addEventListener('click', function() {
        noteGa.pause(); noteGa.currentTime = 0;
        ga.style.backgroundColor = '#90EE90';
        addKeyPressEffect(ga);
        noteGa.play();
      });
    }
  
    if (ma) {
      ma.addEventListener('click', function() {
        noteMa.pause(); noteMa.currentTime = 0;
        ma.style.backgroundColor = '#FF6347';
        addKeyPressEffect(ma);
        noteMa.play();
      });
    }
  
    if (pa) {
      pa.addEventListener('click', function() {
        notePa.pause(); notePa.currentTime = 0;
        pa.style.backgroundColor = '#FFD700';
        addKeyPressEffect(pa);
        notePa.play();
      });
    }
  
    if (dha) {
      dha.addEventListener('click', function() {
        noteDha.pause(); noteDha.currentTime = 0;
        dha.style.backgroundColor = '#DDA0DD';
        addKeyPressEffect(dha);
        noteDha.play();
      });
    }
  
    if (ni) {
      ni.addEventListener('click', function() {
        noteNi.pause(); noteNi.currentTime = 0;
        ni.style.backgroundColor = '#00FFFF';
        addKeyPressEffect(ni);
        noteNi.play();
      });
    }
  
    if (sa2) {
      sa2.addEventListener('click', function() {
        noteSa2.pause(); noteSa2.currentTime = 0;
        sa2.style.backgroundColor = '#FF69B4';
        addKeyPressEffect(sa2);
        noteSa2.play();
      });
    }
  

    if (body) {
      body.addEventListener('keyup', function(event) {
        if (event.key === 'a' && sa) sa.style.backgroundColor = 'ivory';
        if (event.key === 's' && re) re.style.backgroundColor = 'ivory';
        if (event.key === 'd' && ga) ga.style.backgroundColor = 'ivory';
        if (event.key === 'f' && ma) ma.style.backgroundColor = 'ivory';
        if (event.key === 'g' && pa) pa.style.backgroundColor = 'ivory';
        if (event.key === 'h' && dha) dha.style.backgroundColor = 'ivory';
        if (event.key === 'j' && ni) ni.style.backgroundColor = 'ivory';
        if (event.key === 'k' && sa2) sa2.style.backgroundColor = 'ivory';
      });
    }
  });