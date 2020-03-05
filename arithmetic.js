const add = (a, b, callback) => {
    setTimeout(()=>{
        callback(a+b);
    },3000)
}

const sub = (a, b, callback) => {
    setTimeout(()=>{
        callback(a-b);
    },6000)
}

const mul = (a, b, callback) => {
    setTimeout(()=>{
        callback(a*b);
    },10000)
}

const div = (a, b, callback) => {
    setTimeout(()=>{
        callback(a/b);
    },15000)
}


//calling async

add(11,5,(res)=>{
    console.log("Addition : ",res);
    sub(30,res,(res1)=>{
        console.log("substraction : ",res1);
        mul(6,res1,(res2)=>{
            console.log("Multiplication : ",res2);
            div(res2,3,(res3)=>{
                console.log("Division : ",res3);
                
            });
        });
    });
});