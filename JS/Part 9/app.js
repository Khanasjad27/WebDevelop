console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#mainImg"));
console.dir(document.querySelector(".oldImg"));

let  links = document.querySelectorAll(".box a");
for(let i=0; i<links.length;i++){
    links[i].style.color = "yellow";
    links[i].style.backgroundColor = "green";
}
// let heading = document.querySelector("h1");
// heading.classList.add("green");
// heading.classList.add('underline');