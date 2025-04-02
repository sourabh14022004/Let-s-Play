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




const body = document.querySelector('body');

const q = document.getElementById('q');
const w = document.getElementById('w');
const e = document.getElementById('e');
const r = document.getElementById('r');
const t = document.getElementById('t');
const y = document.getElementById('y');
const u = document.getElementById('u');
const i = document.getElementById('i');
const o = document.getElementById('o');
const p = document.getElementById('p');
const a = document.getElementById('a');
const s = document.getElementById('s');
const d = document.getElementById('d');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const z = document.getElementById('z');
const x = document.getElementById('x');
const c = document.getElementById('c');
const v = document.getElementById('v');
const b = document.getElementById('b');
const n = document.getElementById('n');
const m = document.getElementById('m');
console.log(q);

body.addEventListener('keydown', (xy) => {
    if(xy.key === 'q') {
        q.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        q.style.transition = 'transform 0.2s ease-in-out';
        q.style.transform = 'scale(1.1)';
        const key01 = new Audio('../../audio/piano/key01.mp3');
        key01.play();
        body.style.backgroundColor = 'violet';
        setTimeout(() => {
            q.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            q.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'w') {
        w.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        w.style.transition = 'transform 0.2s ease-in-out';
        w.style.transform = 'scale(1.1)';
        const key02 = new Audio('../../audio/piano/key02.mp3');
        key02.play();
        body.style.backgroundColor = 'blue';
        setTimeout(() => {
            w.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            w.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'e') {
        e.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        e.style.transition = 'transform 0.2s ease-in-out';
        e.style.transform = 'scale(1.1)';
        const key03 = new Audio('../../audio/piano/key03.mp3');
        key03.play();
        body.style.backgroundColor = 'green';
        setTimeout(() => {
            e.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            e.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'r') {
        r.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        r.style.transition = 'transform 0.2s ease-in-out';
        r.style.transform = 'scale(1.1)';
        const key04 = new Audio('../../audio/piano/key04.mp3');
        key04.play();
        body.style.backgroundColor = 'yellow';
        setTimeout(() => {
            r.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            r.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 't') {
        t.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        t.style.transition = 'transform 0.2s ease-in-out';
        t.style.transform = 'scale(1.1)';
        const key05 = new Audio('../../audio/piano/key05.mp3');
        key05.play();
        body.style.backgroundColor = 'orange';
        setTimeout(() => {
            t.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            t.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'y') {
        y.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        y.style.transition = 'transform 0.2s ease-in-out';
        y.style.transform = 'scale(1.1)';
        const key06 = new Audio('../../audio/piano/key06.mp3');
        key06.play();
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            y.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            y.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
        
    } else if (xy.key === 'u') {
        u.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        u.style.transition = 'transform 0.2s ease-in-out';
        u.style.transform = 'scale(1.1)';
        const key07 = new Audio('../../audio/piano/key07.mp3');
        key07.play();
        body.style.backgroundColor = 'purple';
        setTimeout(() => {
            u.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            u.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'i') {
        i.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        i.style.transition = 'transform 0.2s ease-in-out';
        i.style.transform = 'scale(1.1)';
        const key08 = new Audio('../../audio/piano/key08.mp3');
        key08.play();
        body.style.backgroundColor = 'pink';
        setTimeout(() => {
            i.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            i.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'o') {
        o.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        o.style.transition = 'transform 0.2s ease-in-out';
        o.style.transform = 'scale(1.1)';
        const key09 = new Audio('../../audio/piano/key09.mp3');
        key09.play();
        body.style.backgroundColor = 'brown';
        setTimeout(() => {
            o.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            o.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'p') {
        p.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        p.style.transition = 'transform 0.2s ease-in-out';
        p.style.transform = 'scale(1.1)';
        const key10 = new Audio('../../audio/piano/key10.mp3');
        key10.play();
        body.style.backgroundColor = 'grey';
        setTimeout(() => {
            p.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            p.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'a') {
        a.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        a.style.transition = 'transform 0.2s ease-in-out';
        a.style.transform = 'scale(1.1)';
        const key11 = new Audio('../../audio/piano/key11.mp3');
        key11.play();
        body.style.backgroundColor = 'violet';
        setTimeout(() => {
            a.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            a.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
        
    } else if (xy.key === 's') {
        s.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        s.style.transition = 'transform 0.2s ease-in-out';
        s.style.transform = 'scale(1.1)';
        const key12 = new Audio('../../audio/piano/key12.mp3');
        key12.play();
        body.style.backgroundColor = 'blue';
        setTimeout(() => {
            s.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            s.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'd') {
        d.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        d.style.transition = 'transform 0.2s ease-in-out';
        d.style.transform = 'scale(1.1)';
        const key13 = new Audio('../../audio/piano/key13.mp3');
        key13.play();
        body.style.backgroundColor = 'green';
        setTimeout(() => {
            d.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            d.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'f') {
        f.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        f.style.transition = 'transform 0.2s ease-in-out';
        f.style.transform = 'scale(1.1)';
        const key14 = new Audio('../../audio/piano/key14.mp3');
        key14.play();
        body.style.backgroundColor = 'yellow';
        setTimeout(() => {
            f.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            f.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'g') {    
        g.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        g.style.transition = 'transform 0.2s ease-in-out';
        g.style.transform = 'scale(1.1)';
        const key15 = new Audio('../../audio/piano/key15.mp3');
        key15.play();
        body.style.backgroundColor = 'orange';
        setTimeout(() => {
            g.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            g.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)        
    } else if (xy.key === 'h') {
        h.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        h.style.transition = 'transform 0.2s ease-in-out';
        h.style.transform = 'scale(1.1)';
        const key16 = new Audio('../../audio/piano/key16.mp3');
        key16.play();
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            h.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            h.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)        
    }else if (xy.key === 'j') {
        j.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        j.style.transition = 'transform 0.2s ease-in-out';
        j.style.transform = 'scale(1.1)';
        const key17 = new Audio('../../audio/piano/key17.mp3');
        key17.play();
        body.style.backgroundColor = 'purple';
        setTimeout(() => {
            j.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            j.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)        
    }else if (xy.key === 'k') {
        k.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        k.style.transition = 'transform 0.2s ease-in-out';
        k.style.transform = 'scale(1.1)';
        const key18 = new Audio('../../audio/piano/key18.mp3');
        key18.play();
        body.style.backgroundColor = 'pink';
        setTimeout(() => {
            k.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            k.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)        
    }else if (xy.key === 'l') {
        l.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        l.style.transition = 'transform 0.2s ease-in-out';
        l.style.transform = 'scale(1.1)';
        const key19 = new Audio('../../audio/piano/key19.mp3');
        key19.play();
        body.style.backgroundColor = 'brown';
        setTimeout(() => {
            l.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            l.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)        
    }else if (xy.key === 'z') {
        z.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        z.style.transition = 'transform 0.2s ease-in-out';
        z.style.transform = 'scale(1.1)';
        const key20 = new Audio('../../audio/piano/key20.mp3');
        key20.play();
        body.style.backgroundColor = 'grey';
        setTimeout(() => {
            z.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            z.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'x') {
        x.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        x.style.transition = 'transform 0.2s ease-in-out';
        x.style.transform = 'scale(1.1)';
        const key21 = new Audio('../../audio/piano/key21.mp3');
        key21.play();
        body.style.backgroundColor = 'violet';
        setTimeout(() => {
            x.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            x.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'c') {
        c.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        c.style.transition = 'transform 0.2s ease-in-out';
        c.style.transform = 'scale(1.1)';
        const key22 = new Audio('../../audio/piano/key22.mp3');
        key22.play();
        body.style.backgroundColor = 'blue';
        setTimeout(() => {
            c.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            c.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'v') {
        v.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        v.style.transition = 'transform 0.2s ease-in-out';
        v.style.transform = 'scale(1.1)';
        const key23 = new Audio('../../audio/piano/key23.mp3');
        key23.play();
        body.style.backgroundColor = 'green';
        setTimeout(() => {
            v.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            v.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'b') {
        b.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        b.style.transition = 'transform 0.2s ease-in-out';
        b.style.transform = 'scale(1.1)';
        const key24 = new Audio('../../audio/piano/key24.mp3');
        key24.play();
        body.style.backgroundColor = 'yellow';
        setTimeout(() => {
            b.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            b.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'n') {
        n.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        n.style.transition = 'transform 0.2s ease-in-out';
        n.style.transform = 'scale(1.1)';
        const key25 = new Audio('../../audio/piano/key20.mp3');
        key25.play();
        body.style.backgroundColor = 'orange';
        setTimeout(() => {
            n.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            n.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    } else if (xy.key === 'm') {
        m.style.boxShadow = '0 20px 100px 20px rgb(255, 255, 255)';
        m.style.transition = 'transform 0.2s ease-in-out';
        m.style.transform = 'scale(1.1)';
        const key26 = new Audio('../../audio/piano/key10.mp3');
        key26.play();
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            m.style.transform = 'scale(1)';
            body.style.backgroundColor = 'black';
            m.style.boxShadow = '0px 0px 100px 20px rgba(233, 34, 34, 0.766)';
        },200)
    }
});