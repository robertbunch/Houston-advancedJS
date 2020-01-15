function convertPhone(phoneStr){
    var regExp = /[\d]/g
    var numsFromPhone = phoneStr.match(regExp);
    if(numsFromPhone[0] == '1'){
        numsFromPhone.shift();
    }
    if(numsFromPhone.length < 10){
        var lettersAreNowNumbers = lettersToNums(phoneStr).match(regExp);
        if(lettersAreNowNumbers[0] == '1'){
            lettersAreNowNumbers.shift();
        }
        if(lettersAreNowNumbers.length < 10){
            return("Not enough numbers!");
        }else{
            return finalProduct(lettersAreNowNumbers);
        }
    }else{
        return finalProduct(numsFromPhone);
    }
}
function lettersToNums(strAgain){
    var abc = strAgain.replace(/[abc]/gi, "2");
    var def = abc.replace(/[def]/gi, "3");
    var ghi = def.replace(/[ghi]/gi, "4");
    var jkl = ghi.replace(/[jkl]/gi, "5");
    var mno = jkl.replace(/[mno]/gi, "6");
    var pqrs = mno.replace(/[pqrs]/gi, "7");
    var tuv = pqrs.replace(/[tuv]/gi, "8");
    var wxyz = tuv.replace(/[wxyz]/gi, "9");
    return(wxyz);
}
function finalProduct(array){
    array.splice(3,0,"-");
    array.splice(7,0,"-");
    return array.slice(0,12).join("");
}
var numbers = [
    "555-555-5555",
    "(555)555-5555",
    "555 555 5555",
    "555 555-555",
    "1-555-555-5555",
    "(1)555-555-5555",
    "5555555555",
    "555-five-55-aebdgtxi;;3tt4greqr6seven",
    "5-trumprules-555-5-5-5-5-5-5",
    "2798504trumpforprez23587928579428795458792",
    "1-800-ninjas-are-cool",
    "1900-acdc4life.",
    ]
numbers.forEach((number)=>{
    console.log(convertPhone(number));
});


