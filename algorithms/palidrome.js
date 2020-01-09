function palindrome(str) {
    var palin = ['m','i','t','c','h','e','l'].reverse().join("");
    // ['l','e','h','c','t','i','m',]
    // lehctim == mictchel
    //hannah === hannah
    if (palin === str) {
        return true;
    } else {
        return false;
    }
}
const fs = require("fs");

var pName = "This name is a palindrome: ";
try {
    const data = fs.readFileSync("names.txt", "UTF-8");
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
        if (palindrome(line)) {
            pName += line;
            console.log("The following name is a palindrome: " + line);
        } else {
            // console.log("This name is NOT a palindrome: " + line);
        }
    });
} catch (e) {
    console.error(e);
}