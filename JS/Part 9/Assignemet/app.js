let para = document.createElement("p");
para.innerText = "Hi I'm Red";
document.querySelector('body').append(para);
para.classList.add("red");




let h3 = document.createElement("h3");
h3.innerText = " I'm blue h3";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
document.querySelector('body').append(div);
div.classList.add("borderNColor");
// creating h1
let h1 = document.createElement("h1");
h1.innerText ="I'm in a div";
div.append(h1);
// creating para
let p = document.createElement("p");
p.innerText = "ME TOO";
div.append(p);


