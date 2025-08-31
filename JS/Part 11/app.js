// 1
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();



// 2
// h1 = document.querySelector('h1');
// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay)
// }
// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("purple", 1000)
//     })
// })

// 3
// function saveToDb(data, success, failuer){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failuer();
//     }
// }

// saveToDb(
//     "D1",
//     ()=>{
//         console.log("success1 : D1 Saved");
//         saveToDb("D2",
//             ()=>{
//                 console.log("success2 : D2 Saved");
//                 saveToDb("D3",
//                     ()=>{
//                         console.log("success3 : D3 Saved");
//                     },
//                     ()=>{
//                         console.log("failuer3 : Week Connection");
//                     })
//             },
//             ()=>{
//                 console.log("failuer2 : Week Connection");
//             }
//         )
//     },
//     ()=>{
//         console.log("failuer1 : Week Connection");
//     })

// 3(UP)
function saveToDb(data){
    return new Promise(
        (resolve, reject)=>{
            let internetSpeed = Math.floor(Math.random()*10)+1;
            if(internetSpeed>4){
                resolve("Success: Data Saved to Data Base")
            }
            else{
                reject("failuer: Week Connection")
            }
        }
    )
}
saveToDb("Data 1")
    .then((result)=>{      // result contain upar wala resolve ka statement i.e written in function
        console.log("Data1 Saved");
        console.log("Succes:", result);     
        return saveToDb("Hello World");   
    })
    .then((result)=>{   // ya then upar(Data 1) waale return pe laga hua hai
        console.log("Data2 Saved")
        console.log("Succes:", result);  
        return saveToDb("Apna College")
    })
    .then((result)=>{   // ya then upar(Data 2) waale return pe laga hua hai
        console.log("Data3 Saved")
        console.log("Succes:", result); 
    })
    .catch((result)=>{
        console.log("Promise rejected");
        console.log("failuer:", result); 
    })



// 2 (UP)

h1 = document.querySelector('h1');
function changeColor(color, delay,){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed");
        },delay)
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("Changrd to Red Color")
    return changeColor("purple",1000)
})
.then(()=>{
    console.log("Changrd to Purple Color")
    return changeColor("yellow",1000)
})
.then(()=>{
    console.log("Changrd to yellow Color")
})


