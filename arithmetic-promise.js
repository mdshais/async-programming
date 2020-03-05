let add = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(a+b);
        },3000);
    });
} 

let sub = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(a - b);
        },3000);
    });
} 

let mul = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(a * b);
        },10000);
    });
} 

let div = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(a / b);
        },1000);
    });
} 

add(10,15).then((res) => {
    console.log(res);
    return sub(res,5);
}).then((res1)=>{
    console.log(res1);
    return mul(3, res1);
}).then((res2)=>{
    console.log(res2);
    return div(res2, 4);
}).then((res3)=>{
    console.log(res3);
});