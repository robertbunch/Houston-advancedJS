// console.log(1);
// new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },1000)
// }).then((data)=>{
//     console.log(data);
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(3)
//         },0)
//     })
// }).then((data)=>{
//     console.log(data);
//     console.log(4);
// })



//     console.log(2);
//     setTimeout(()=>{
//        console.log(3);
//        console.log(4)
//     },0)
// },1000)

// for(let i = 0; i<1000; i++){
//     console.log(i)
// }
// console.log("Hi")


const one = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("2 seconds has passed")},2000);
    })
}

const two = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("1 seconds has passed")},1000);
    })
}


const onePromise = one();
const twoPromise = two();

// onePromise.then((data)=>{
//     console.log("Promise one is finished",data);
// })

// twoPromise.then((data)=>{
//     console.log("Promise two is finished",data);
// })

Promise.all([onePromise,twoPromise]).then((data)=>{
    console.log(data);
})


Promise.race([onePromise,twoPromise]).then((data)=>{
    console.log(data);
})







