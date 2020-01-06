// const sum = (num,num2)=>{
//     return(num+num2);
// }

// console.log(sum(3,4));

// function wait(){
//     setTimeout(function(){
//         console.log(this)
//     },1000)
// }
// wait()

const data = {
    name: "Rob",
    job: "teacher",
    language: "javascript"
}

// const name = req.body.name;
// const job = req.body.job;
// const language = req.body.language

const { name,job,language } = data;
console.log(name);
console.log(job);
console.log(language);
