function calculate(){
    let first = Number(document.getElementById("firstnumber").value);
    let second = Number(document.getElementById("secondnumber").value);

    let sum= first + second;
    let difference= first - second;
    let product= first * second;
    let quotient= first / second;

    document.getElementById("sum").textContent = sum;
    document.getElementById("difference").textContent = difference;
    document.getElementById("product").textContent = product;
    document.getElementById("quotient").textContent = quotient;

}

function clearFields(){
    document.getElementById("firstnumber").value = "";
    document.getElementById("secondnumber").value = "";
    document.getElementById("sum").value = "";
    document.getElementById("difference").value = "";
    document.getElementById("product").value = "";
    document.getElementById("quotient").value = "";

}