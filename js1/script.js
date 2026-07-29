const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const diffTxt = document.getElementById("difference");
const prodTxt = document.getElementById("product");
const quotTxt = document.getElementById("quotient");


function calculate() {
       let num1 = +num1Txt.value;
       let num2 = +num2Txt.value;

    if(!(num1Txt.value !== "" || num2Txt.value !== "")) return;
       let sum = num1 + num2;
       let difference = num1 - num2;
       let product = num1 * num2;
       let quotient = num === 0 ? "Cannot divide by 0" : num1 / num2;

       sumTxt.innerHTML = sum;
       diffTxt.innerHTML = difference;
       prodTxt.innerHTML = product;
       quotTxt.innerHTML = quotient;

    

}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    sumTxt.innerHTML = "";
    diffTxt.innerHTML = "";
    prodTxt.innerHTML = "";
    quotTxt.innerHTML = "";

}