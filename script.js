function openGift(){

    document.getElementById("intro").style.display="none";

    document.getElementById("main").classList.remove("hidden");


    let music = document.getElementById("music");

    music.play();


    startCountdown();

}



function startCountdown(){

    let count = document.getElementById("count");

    let number = 3;


    let timer = setInterval(()=>{

        number--;

        if(number > 0){

            count.innerHTML = number;

        }
        else{

            clearInterval(timer);

            document.getElementById("countdown").style.display="none";

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

        setTimeout(typing,50);

    }

}


typing();

}
