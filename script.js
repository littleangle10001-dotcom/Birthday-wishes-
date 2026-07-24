function openGift(){

    document.getElementById("intro").style.display="none";

    document.getElementById("main").classList.remove("hidden");

    let music = document.getElementById("music");
    music.play();

    createHearts();
    createSparkles();
    createRoses();

    startCountdown();
}



function startCountdown(){

    let count = document.getElementById("count");

    let numbers = ["3","2","1"];

    let i = 0;

    let timer = setInterval(()=>{

        count.innerHTML = numbers[i];

        i++;

        if(i >= numbers.length){

            clearInterval(timer);

            setTimeout(()=>{

                document.getElementById("countdown").style.display="none";

                createConfetti();

                fireworks();

                typeMessage();

            },1000);

        }

    },1000);

}



function typeMessage(){

let text = `Soooo Happiest birthday payri bulbul 🥳❤️

Today is the day when a pyariiiiiii and purest soul was born ❤️

Wishing you a fantastic day once again 🥰❤️

Mata Rani bless you 🌻❤️

Hamesha khush raho aur ese hi muskurate raho ❤️`;


let box = document.getElementById("message");

let i = 0;


function typing(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,50);

    }

}

typing();

}



function createHearts(){

setInterval(()=>{

let h=document.createElement("div");

h.innerHTML="❤️";

h.className="heart";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);


setTimeout(()=>h.remove(),8000);


},700);

}



function createSparkles(){

setInterval(()=>{

let s=document.createElement("div");

s.innerHTML="✨";

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);


setTimeout(()=>s.remove(),3000);


},500);

}



function createRoses(){

setInterval(()=>{

let r=document.createElement("div");

r.innerHTML="🌹";

r.className="rose";

r.style.left=Math.random()*100+"vw";

document.body.appendChild(r);


setTimeout(()=>r.remove(),10000);


},800);

}



function createConfetti(){

for(let i=0;i<100;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

document.body.appendChild(c);

setTimeout(()=>c.remove(),5000);

}

}



function fireworks(){

for(let i=0;i<30;i++){

let f=document.createElement("div");

f.innerHTML="✨";

f.className="firework";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*70+"vh";

document.body.appendChild(f);

setTimeout(()=>f.remove(),2000);

}

}
