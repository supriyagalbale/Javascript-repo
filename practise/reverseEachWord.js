// Given a string, reverse each word in the sentence

var str = "Welcome to the javascript repo";

function revEachWord(inputString){
    var tempArray = inputString.split(" ");
    var output = [];
    tempArray.forEach(element => {
        var temp = element.split("").reverse().join("");
        output.push(temp);
    });
    return output.join(" ");
}

console.log(revEachWord(str));