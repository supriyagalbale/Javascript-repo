function palindrome(s){
    let revS = s.split("").reverse().join("");
    return revS === s;
}
console.log(palindrome('anna'));

