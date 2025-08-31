let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');


btn.addEventListener("click", function(){
    lists = document.createElement('li');
    lists.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText= "Delete";
    delbtn.classList.add("Delete");
    lists.appendChild(delbtn);
    
    ul.appendChild(lists);
    inp.value = "";   // yaha empty string lagaya hai coz ek baar task add hone ke baad inp box auto empty hojaae

});


// ya wala jab hun use karre hai tab sirf jo phele se bana hai wo hi delete hora hai  therefore hum delbtn ke parent ko lege i.e li
// let delbtns = document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// };




ul.addEventListener("click",function(event){
    if(event.target.nodeName = "button"){
        let itemList = event.target.parentElement;
        itemList.remove();
    }
})
