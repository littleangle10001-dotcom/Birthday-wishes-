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

    let number = 3;

    let timer = setInterval(()=>{

        count.innerHTML = number;

        number--;

        if(number < 0){

            clearInterval(timer);

            document.getElementById("countdown").style.display="none";

            createConfetti();

            fireworks();

            typeMessage();

        }

    },1000);

}




function typeMessage(){

let text = `Soooo Happiest birthday payri bulbul 🥳❤️

Today is the day when a pyariiiiiii and purest soul was born ❤️

Wishing you a fantastic day once again 🥰❤️

Mata Rani bless you 🌻❤️

Hamesha khush raho aur ese hi muskurate raho ❤️`;


let i=0;

let box=document.getElementById("message");


function typing(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}


typing();

}




// Floating Hearts

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(3+Math.random()*5)+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},8000);


},500);

}




// Sparkles

function createSparkles(){

setInterval(()=>{

let star=document.createElement("div");

star.innerHTML="✨";

star.className="sparkle";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


document.body.appendChild(star);


setTimeout(()=>{

star.remove();

},3000);


},300);

}




// Confetti

function createConfetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.animationDuration=
(2+Math.random()*3)+"s";


document.body.appendChild(conf);


setTimeout(()=>{

conf.remove();

},5000);

}// Rose Petals

function createRoses(){

setInterval(()=>{

let rose=document.createElement("div");

rose.innerHTML="🌹";

rose.className="rose";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=
(5+Math.random()*5)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},10000);

},700);

}


// Fireworks

function fireworks(){

for(let i=0;i<30;i++){

let fire=document.createElement("div");

fire.innerHTML="✨";

fire.className="firework";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*70+"vh";

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},2000);

}

}

}
