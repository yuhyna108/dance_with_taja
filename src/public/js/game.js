const now = document.querySelector('#now');
const next = document.querySelector('#next');
const nowinput = document.querySelector('#nowinput');
const nextinput = document.querySelector('#nextinput');

let nowkeyword = "My name is Suyeon";
let nextkeyword = "My name is hyuna";
let alp = "";
let keywords = "";
let alpLength = 0;

function change(){
    now.innerText = nowkeyword;
    next.innerText = nextkeyword;
}
nowinput.oninput = function(){
    document.addEventListener("keydown",isRight, false);
    let inputvalue = nowinput.value;
    alp = (inputvalue||"").split("");
    keywords = (nowkeyword||"").split("");
    if(alp[alp.length-1]!=keywords[alp.length-1]){
        //한 글자의 색만 바꾸기
    }else{

    }

}

function isRight(){

}

change();