// // 1 (cat)
// let div = document.querySelector('div');
// let btn = document.querySelector('button');

// btn.addEventListener("click",  async ()=>{
//     let fact =  await grtFact();
//     console.log(fact);
//     div.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function grtFact(){
//     try{
//         let res = await axios.get(url);      /// axiox.get();=>  do line la kaam ek me hi hogaya hai
//         return res.data.fact;
//     }
//     catch(error){
//         return "Error 404, fact not found"
//     }
// }




// // 2 (Dog)

// let btn2 = document.querySelector("#Dog");
// let img = document.querySelector("img");

// btn2.addEventListener("click",  async ()=>{
//     let fact =  await getImg();
//     console.log(fact);
//     img.setAttribute("src", fact);
// });

// let Url2 = "https://dog.ceo/api/breeds/image/random";

// async function getImg(){
//     try{
//         let res = await axios.get(Url2);      /// axiox.get();=>  do line la kaam ek me hi hogaya hai
//         return res.data.message;
//     }
//     catch(error){
//         return "Error 404, fact not found"
//     }
// }


// 3(College by Country name)
let url3 = "http://universities.hipolabs.com/search?name=";
let inp = document.querySelector("input");
let btn3 = document.querySelector("#search") 
btn3.addEventListener("click", async ()=>{
    let country = inp.value;
    let res = await getCollege(country);
    // console.log(res);
    showList(res);
})

function showList(res){
    let list = document.querySelector("#list");
    list.innerText = " ";
    for(col of res){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
    
}


async function getCollege(country){
    try{
        let res = await axios.get(url3+country);
        return res.data;
    }
    catch(error){
            return "Error 404, fact not found";
    }
}