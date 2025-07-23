const input = document.getElementById("input")
function check() {

const value = input.value;

const reverse = reverseString(value)



if (value == reverse) {
    alert("P A L I N D R O M E")
}else {
    alert("Not today!")
}
}

function reverseString(value) {
    return value.split("").reverse().join("");
    //using the "." you call the function on that string. 
    //In this case you have called the function on the string.
}
reverseString();
check();

