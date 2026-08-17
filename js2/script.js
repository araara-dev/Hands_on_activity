function generateFullname(){

    let firstname = document.getElementById("firstname").value;
    let middlename = document.getElementById("middlename").value;
    let lastname = document.getElementById("lastname").value;

    let fullname= firstname + " " + middlename + " " + lastname;

    document.getElementById("fullname").textContent = fullname;
}

function clearFields(){
    document.getElementById("firstname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("lastname").value = "";

    document.getElementById("fullname").value = "";
}