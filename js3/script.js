let numbers = [];

function insertnumber(){

    let input = document.getElementById("numberinput");
    let value = Number(input.value);
    
    if (input.value === ""){
        alert("Please enter a number.");
        return;
    }

    numbers.push(value);

    displaynumbers();

    input.value = "";
    input.focus();
}

function displayNumbers(){

    let list = document.getElementById(numberList);

    list.innerHTML = "";

    for (let i = 0; i < numbers.length; i++){
        
        let number = document.createElement("div");
        number.className = "number";
        number.textContent = numbers[i];
        list.appendChild(number);
    }
    calculateResults();
}

function calculateResults(){
    if (numbers.length === 0){
        document.getElementById("sum").textContent= "";
        document.getElementById("highest").textContent= "";
        document.getElementById("lowest").textContent= "";
        return;
    }

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("sum").textContent= "";
    document.getElementById("highest").textContent= "";
    document.getElementById("lowest").textContent= "";
}

function deleteAll() {
    numbers = [];
    document.getElementById("numberList").innerHTML = "";
    document.getElementById("sum").textContent= "";
    document.getElementById("highest").textContent= "";
    document.getElementById("lowest").textContent= "";
    document.getElementById("numberInput").value= "";
}
