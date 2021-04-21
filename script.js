function validateForm() {
    document.getElementsByClassName("required")[0].style.display = "none";
    document.getElementsByClassName("required")[1].style.display = "none";
    document.getElementsByClassName("required")[2].style.display = "none";
    document.getElementsByClassName("required")[3].style.display = "none";
    document.getElementsByClassName("required")[4].style.display = "none";
    var a = document.forms["form"]["fname"].value;
    var b = document.forms["form"]["lname"].value;
    var c = document.forms["form"]["email"].value;
    var d = document.forms["form"]["phone"].value;
    var e = document.forms["form"]["comments"].value;
    let error = 0;
    if (a == "") {
        document.getElementsByClassName("required")[0].style.display = "block";
        error += 1;
    }
    if(b ==""){
        document.getElementsByClassName("required")[1].style.display = "block";
        error += 1;
    }
    if (c == "") {
        document.getElementsByClassName("required")[2].style.display = "block";
        error += 1;
    }
    if(d ==""){
        document.getElementsByClassName("required")[3].style.display = "block";
        error += 1;
    }
    if(e ==""){
        document.getElementsByClassName("required")[4].style.display = "block";
        error += 1;
    }

    if(error > 0){
        return false;
    }
  }