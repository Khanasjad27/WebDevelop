let n = 10;

for(let i=0;i<n;i++){
    console.log("Hello",i);
}


let arg = process.argv;

for(let i=2;i<arg.length;i++){
    console.log("Hello to", arg[i]);
}

