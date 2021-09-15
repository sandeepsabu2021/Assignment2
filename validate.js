function validate(){
    var regName=/^[a-zA-Z ]{2,100}$/;
    var regMobile=/^[6-9][0-9]{9}$/;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regFeedback=/^[a-zA-Z0-9 ]{2,500}$/;
    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var mail=document.getElementById("mail").value
    var feedback=document.getElementById("feedback").value
    if(!(regName.test(name)))
    {
        document.getElementById("err1").innerHTML="Field Required* [2-100]"
        document.getElementById("err1").style.color="red";
        document.getElementById("name").focus();
        return false;
    }
    else if(!(regEmail.test(mail)))
    {   
        document.getElementById("err1").innerHTML=""
        document.getElementById("err2").innerHTML="Field Required* [Valid Format]"
        document.getElementById("err2").style.color="red";
        document.getElementById("mail").focus();
        return false;
    }
    else if(!(regMobile.test(mobile)))
    {   
        document.getElementById("err2").innerHTML=""
        document.getElementById("err3").innerHTML="Field Required* [10 Digits Only]"
        document.getElementById("err3").style.color="red";
        document.getElementById("mobile").focus();
        return false;
    }
    else if(!(regFeedback.test(feedback)))
    {   
        document.getElementById("err3").innerHTML=""
        document.getElementById("err4").innerHTML="Field Required* [2-500]"
        document.getElementById("err4").style.color="red";
        document.getElementById("feedback").focus();
        return false;
    }
    else {
        document.getElementById("err4").innerHTML=""
        alert("Form Submitted Successfully, ThankYou!")
        document.getElementById("submit").innerHTML="<b>Form Submitted Successfully!</b>"
        document.getElementById("submit").style.color="green";
    }
  }