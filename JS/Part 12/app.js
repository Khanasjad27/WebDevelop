// // // 1
// // function getNumber(){
// //     return new Promise ((resolve, reject)=>{
// //         setTimeout(()=>{
// //             let num = Math.floor(Math.random()*10)+1;
// //             console.log(num);
// //             resolve()
// //         },1000)
// //     })
    
// // }
// // async function demo() {
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// //     await getNumber();
// // }
// // demo();

// // 2
// h1 = document.querySelector('h1');
// function changeColor(color, delay,){
//     return new Promise((resolve,reject) => {
//         let num = Math.floor(Math.random()*5)+1;
//         if(num>3){
//             reject("promise rejected")
//         }
//         setTimeout(()=>{
//             h1.style.color = color;
//             console.log(`color changed to ${color}`)
//             resolve("Color Changed");
//         },delay)
//     });
// }
// async function call (){
//     try{
//         await changeColor("red",1000)
//         await changeColor("purple",1000)
//         await changeColor("yellow",1000)
//         await changeColor("green",1000)
//     }
//     catch(error){
//         console.log("error :", error)
//     }
// }
// call()

// First API request
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response)
//     return response.json()       //response.json isse apna response readable banajaata hai
// })
// .then((data)=>{     
//     console.log(data);
// })
// .catch((error)=>{
//     console.log('error: ',error)
// })

// Using fetch in async-await
let url = "https://catfact.ninja/fact";
async function grtFact(){
    try{
        let res = await fetch(url);
        let finalRes = await res.json();
        console.log(finalRes.fact);
    }
    catch(error){
        console.log("error: ", error)
    }
}
grtFact();