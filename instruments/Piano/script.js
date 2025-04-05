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


// new styling is added
const keyMap = {
    a: { color: 'violet', sound: 'key01' },
    b: { color: 'indigo', sound: 'key02' },
    c: { color: 'blue', sound: 'key03' },
    d: { color: 'green', sound: 'key04' },
    e: { color: 'yellow', sound: 'key05' },
    f: { color: 'orange', sound: 'key06' },
    g: { color: 'red', sound: 'key07' },
    h: { color: 'pink', sound: 'key08' },
    i: { color: 'purple', sound: 'key09' },
    j: { color: 'brown', sound: 'key10' },
    k: { color: 'gold', sound: 'key11' },
    l: { color: 'teal', sound: 'key12' },
    m: { color: 'crimson', sound: 'key13' },
    n: { color: 'lime', sound: 'key14' },
    o: { color: 'silver', sound: 'key15' },
    p: { color: 'magenta', sound: 'key16' },
    q: { color: 'salmon', sound: 'key17' },
    r: { color: 'coral', sound: 'key18' },
    s: { color: 'skyblue', sound: 'key19' },
    t: { color: 'peachpuff', sound: 'key20' },
    u: { color: 'lightgreen', sound: 'key21' },
    v: { color: 'orchid', sound: 'key22' },
    w: { color: 'khaki', sound: 'key23' },
    x: { color: 'plum', sound: 'key24' },
    y: { color: 'cyan', sound: 'key20' },
    z: { color: 'tomato', sound: 'key10' }
};
console.log(q);


const keys = 'qwertyuiopasdfghjklzxcvbnm';
keys.split('').forEach(key => {
    window[key] = document.getElementById(key);
});

const sounds = {};
Object.keys(keyMap).forEach(key => {
    const file = keyMap[key].sound;
    sounds[key] = new Audio(`../../audio/piano/${file}.mp3`);
});

const box = document.querySelectorAll('.box');
console.log("this is box",box)
const body = document.querySelector('body'); 

box.forEach(key => {
    console.log("this is key : ",key);
    key.addEventListener('mousedown', (e) => {
    console.log("key pressed : ",e.target);
        const { color, sound } = keyMap[key.id];
        const element = document.getElementById(key.id);
        element.classList.add('pressed');
        const audio = new Audio(`../../audio/piano/${sound}.mp3`);
        body.style.backgroundColor = color;
        audio.play();
    });
    key.addEventListener('mouseup', () => {
        console.log("this is mouse up");
        key.classList.remove('pressed');
        body.style.backgroundColor = 'black';

    })
  
    key.addEventListener('mouseleave', () => {
        key.classList.remove("pressed");
        body.style.backgroundColor = 'black';
    })

});
  
body.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
        const { color, sound } = keyMap[key];
        const element = document.getElementById(key);
        element.classList.add('pressed');
        const audio = new Audio(`../../audio/piano/${sound}.mp3`);
        body.style.backgroundColor = color;
        audio.play();
    }
});

body.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
        const element = document.getElementById(key);
        element.classList.remove('pressed');
        body.style.backgroundColor = 'black';
    }
})

body.addEventListener('keypress', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
        const element = document.getElementById(key);
        const { color, sound } = keyMap[key];
        element.classList.add('pressed');
        const audio = new Audio(`../../audio/piano/${sound}.mp3`);
        body.style.backgroundColor = color;
        audio.play();
    }
    // element.classList.remove('pressed');
})