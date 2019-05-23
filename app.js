
var form = document.getElementById("form1");
var user_info_array = []

function signup() {
    if(checkform(form)){ //if all fields are filled
      if(form[4].value === form[5].value){ //if passwords match
        for(var i=0; i<form.length; i++){
          user_info_array.push(form[i].value); //store info
        }
        console.log(JSON.stringify(user_info_array))
        alert("Sucess!");
      }
      else{
        alert("Passwords do not match.");
      }
    }
  }


  function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}


