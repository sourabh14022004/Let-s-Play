document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const exitButton = document.querySelector(".exit-btn");
  const body = document.querySelector("body");

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
      exitButton.style.display = navLinks.classList.contains("active") ? "none" : "flex";
  });

  document.addEventListener("click", (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active");
          exitButton.style.display = "flex";
      }
  });

  const keyMap = {
      q: { note: "Sa", sound: "A2" },
      w: { note: "Re♭", sound: "A3" },
      e: { note: "Re", sound: "Ab2" },
      r: { note: "Ga♭", sound: "Ab3" },
      t: { note: "Ga", sound: "B2" },
      y: { note: "Ma", sound: "B3" },
      u: { note: "Ma♯", sound: "Bb2" },
      i: { note: "Pa", sound: "Bb3" },
      o: { note: "Dha♭", sound: "C2" },
      p: { note: "Dha", sound: "C3" },
      a: { note: "Ni♭", sound: "C4" },
      s: { note: "Ni", sound: "D2" },
      d: { note: "Sa'", sound: "Db2" },
      f: { note: "Re'", sound: "Db3" },
      g: { note: "Re♭'", sound: "Db4" },
      h: { note: "Ga'", sound: "E2" },
      j: { note: "Ga♭'", sound: "E3" },
      k: { note: "Ma'", sound: "E4" }
  };

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
      box.addEventListener("mousedown", () => {
          const keyId = box.id;
          if (keyMap[keyId]) {
              const { note, sound } = keyMap[keyId];
              box.classList.add("pressed");
              // Play the sound
              const audio = new Audio(`../../audio/harmonium/${sound}.mp3`);
              audio.play();
          }
      });

      box.addEventListener("mouseup", () => {
          box.classList.remove("pressed");
      });

      box.addEventListener("mouseleave", () => {
          box.classList.remove("pressed");
      });
  });

  body.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      if (keyMap[key]) {
          const { note, sound } = keyMap[key];
          const element = document.getElementById(key);
          if (element) {
              element.classList.add("pressed");
              // Play the sound
              const audio = new Audio(`../../audio/harmonium/${sound}.mp3`);
              audio.play();
          }
      }
  });

  body.addEventListener("keyup", (e) => {
      const key = e.key.toLowerCase();
      if (keyMap[key]) {
          const element = document.getElementById(key);
          if (element) {
              element.classList.remove("pressed");
          }
      }
  });
});