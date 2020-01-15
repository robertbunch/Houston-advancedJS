const str = "banana";
console.log(str.match(/[an][an]/));
console.log(str.match(/[an][an]/g)); // g means find ALL

const newStr = str.replace(/[an][an]/g,"rob");
console.log(newStr);