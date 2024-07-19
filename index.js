let input = document.getElementById("in")
let output = document.getElementById("out")
let button= document.getElementById("click")
//function converts tempreature degree from celsius to fahrenheit
function s () {
   output.value= input.value*(9/5)+32
}

//on clicking the function will be called
button.addEventListener("click", s);

