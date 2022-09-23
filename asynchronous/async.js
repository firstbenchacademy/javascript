
let callBackdemo = (x) => {
    setTimeout(() => {
        console.log(`Printed after ${x}  Seconds !!`);
    }, x);
}

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success !!");
        // reject("Failed !!");
    }, 1000);
});

let runMyPromise = () => {
    myPromise.then(message => {
        console.log("runMyPromise Message : ", message);
    })
    .catch(error => {
        console.log("runMyPromise Catch : ", error);
    })
    .finally(() => {
        console.log("runMyPromise Finally : Executed no matter what !!");
    })
}


let asyncawait = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success !!");
            // reject("Failed !!");
        }, 1000);
    });
}

// async function executeAsyncAwait() {
let executeAsyncAwait = async () => {
    try{
        let message = await asyncawait();
        console.log("executeAsyncAwait Message : ", message);
    }catch(error){
        console.log("executeAsyncAwait Catch : ", error);
    }finally{
        console.log("executeAsyncAwait Finally : Executed no matter what !!");
    }
}


let runAll = () => {
    callBackdemo(2000);
    runMyPromise();
    executeAsyncAwait();
}
