let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector('h3');
    let random = generateRandonNumber();
    h3.innerText = random;
    div.document.querySelector(".devi");
    div.style.backgroundColor = random;
    console.log("Value Updated");
})

function generateRandonNumber(){
    let red = (Math.floor(Math.random()*255));
    let green = (Math.floor(Math.random()*255));
    let blue = (Math.floor(Math.random()*255));

    let color = `rbg(${red}, ${green} ,${blue})`;
    return color;
};