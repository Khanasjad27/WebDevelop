let gameSeq = [];
let userSeq = [];
let btnColor = ["red", "green", "yellow", "purple"];

let h3 = document.querySelector('h3');
let body = document.querySelector('body');

let level = 0;
let Started = false;
document.addEventListener( "keypress", function () {
    if(Started == false){
        console.log("Game Started");
        Started = true;
    };

    levelUp();
}); 


// function for flasing btn
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");    // jase hi flash hoga waise hi hum usko 0.25s ke baad remove kardege to stop flash
    }, 50);
};

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");    // jase hi flash hoga waise hi hum usko 0.25s ke baad remove kardege to stop flash
    }, 50);
};
function levelUp() {
    userSeq = [];  // jaise hi level up hua user sequence khali hojaega aur user ko suru se start karna parega   jab tak pura sequence nahi daalega user jab tak level up nahi hoga
    level++;
    h3.innerText = `level ${level}`;
    
    let ranIdx = Math.floor(Math.random()*4);   // koi char box me se koi ek random number select hoga
    let ranCol = btnColor[ranIdx];      // yaha pe ek randon color ka variable hai jisme btn me se koi randon index i.e random color select hoga
    let ranBtn = document.querySelector(`.${ranCol}`);   // yaha randon color ki class select hojaaegi
    gameSeq.push(ranCol);
    console.log(gameSeq);
    gameFlash(ranBtn);
};

function checkAns(idx){
    
    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){    // yaha check karre hai ki lagar dono ki length same hai to matlab wo last indx pe hai therefore hum levelup karege
            setTimeout(levelUp,1000);    // ya kiya hai q ki jab levelup hora hai tab flash hote huwe nahi dekh raha ha hai
        }else{        // else matlab hum kahi beach me hai 
        }
    } else{
        h3.innerHTML = `Game Over !! <br> Your Score: <b> ${level} </b> <br> Press any key to Start game Again`
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function (){
            document.querySelector('body').style.backgroundColor  = "white";
        }, 150)
        reset();
    }
}

// ya function banare taki user click kar pai
function btnPress() {
   // console.log(this); // isse, kon sa button pressed hua wo pata chalega
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");   // jo id HTML me banaya hai wo ishi keliya banaya tha
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtn = document.querySelectorAll('.btn');

for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}


function reset(){
    Started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;

}
