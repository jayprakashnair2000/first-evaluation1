var fnameError = document.getElementById('fname-error')
var lnameError = document.getElementById('lname-error')
var emailError = document.getElementById('email-error')
var ageError = document.getElementById('age-error')
var genError = document.getElementById('gen-error')
var phoneError = document.getElementById('pno-error')
var subError = document.getElementById('sub-error')

// Add Passenger


var fname1Error = document.getElementById('fname1-error')
var lname1Error = document.getElementById('lname1-error')
var age1Error = document.getElementById('age1-error')
var gen1Error = document.getElementById('gen1-error')

function validtefName(){
    var fname = document.getElementById('fname').value;
    if(fname.length == 0){
        fnameError.innerHTML = 'First Name is Required';
        return false;
    }

    if(!fname.match(/^[a-zA-Z]{0,20}$/)){
        fnameError.innerHTML = 'Write First Name Correctly';
        return false;
    }
    
    fnameError.innerHTML = '<i class="uil uil-check-circle"></i>';
    localStorage.setItem("firname",fname); 
    return true;
    
}

function validtelName(){
    var lname = document.getElementById('lname').value;

    if(lname.length == 0){
        lnameError.innerHTML = 'Last Name is Required';
        return false;
    }

    if(!lname.match(/^[a-zA-Z]{0,20}$/)){
        lnameError.innerHTML = 'Write Last Name Correctly';
        return false;
    }
    
    lnameError.innerHTML = '<i class="uil uil-check-circle"></i>';
    localStorage.setItem("lasname",lname);
    return true;
    
}

function validteemail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }

    if(!email.match(/\S+@\S+\.\S+/)){
        emailError.innerHTML = 'Write Email Correctly';
        return false;
    }
    
    emailError.innerHTML = '<i class="uil uil-check-circle"></i>';
    localStorage.setItem("emailaddr",email); 
    return true;
    
}

function validteage(){
    var age = document.getElementById('age').value;

    if(age.length == 0){
        ageError.innerHTML = 'Age is Required';
        return false;
    }

    if(17 >= age)
    {
        ageError.innerHTML = 'Age Should be more than 18';
        return false;
    }

    if(age.match(/^100|[1-9]?\d$/)){
        ageError.innerHTML = '<i class="uil uil-check-circle"></i>';
        localStorage.setItem("agepa",age); 
        return true;
    }

    
    
    ageError.innerHTML = 'Write age in Numbers';
    return false;
    
}



// function validtegen(){
//     var male = document.getElementById("male");
//     var female= document.getElementById("female");
    
//     if(male.checked==false || female.checked==false)
//         {   genError.innerHTML = 'Gender is Required';
//         return false;

//     }

//     if(male.checked==true ){   
//         genError.innerHTML = '<i class="uil uil-check-circle"></i>';
//         return true;
//     }


//     if(female.checked==true ){
//         genError.innerHTML = '<i class="uil uil-check-circle"></i>';
//         return true;
//     }
   

// }
function validtephone(){
    var phone = document.getElementById('pno').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone Number is required';
        return false;

    }
    if(phone.length != 10){
        phoneError.innerHTML = 'Phone Number be 10 digits';
        return false;

    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only Digits Please';
        return false;

    }
    
    phoneError.innerHTML= '<i class="uil uil-check-circle"></i>'
    localStorage.setItem("phoneno",phone); 
    return true

}

// function validtegen()
// {
//     var gender = document.getElementById('gen').value;

//     if(male.value.length <= 0 || female.value.length <= 0){
//         genError.innerHTML = 'Gender is required';
//         return false;
//     }

//     genError.innerHTML= '<i class="uil uil-check-circle"></i>'
//     return true

// }


// function isEmpty(){
//    validfn=validtefName();
//    validln=validtelName();
//    validem=validteemail();
//    validag=validteage();
//    validpno=validtephone();

//    valid = validfn &&
//    validln &&
//    validem &&
//    validag &&
//    validpno ;
//    console.log(valid);

// //    if( ){

// //     document.getElementById("btn").removeAttribute("disabled");
// //     console.log("enabled");

// //    }

// }











// function addSecondPassengerForm() {
//     submitBtn.parentNode.removeChild(submitBtn);
//     addPassengerBtn.parentNode.removeChild(addPassengerBtn);

//     var form = `
//       <form action="#" class="secondPassenger">
//               <h2 id="second-title">2nd Passenger Details</h2>
              
              
              
//         <div class="input-group1">
//         <label>First Name:</label>
//         <input type="text" placeholder="Enter your First name" id="fname1" onkeyup="validtefName1()">
//          <span id="fname1-error"><!--First Name is Required --></span>
//       </div>

//       <div class="input-group1">
//         <label>Last Name:</label>
//         <input type="text" placeholder="Enter your Last name" id="lname1" onkeyup="validtelName1()">
//          <span id="lname1-error">  <!--Last Name is Required-->  </span> 
//       </div>
  

//       <div class="input-group1">
//         <label>Age:</label>    
//         <input type="text" id="age1" name="age" placeholder="Age" onkeyup="return validteage1()">
//         <span id="age-error"><!--Age is Required--></span>
//       </div>
//       <div class="input-group1">
//       <div class="gen1">
//         <label for="gender1" id="gen1">Gender:</label>
//         <input type="radio" name="gender" value="male" id="male1" >Male
//         <input type="radio" name="gender" value="female" id="female1" >Female
        
//       </div>
//       <span id="gen-error"><!--Gender is Required--></span>
//       </div>
      
//               <br>
//               <div class="button-collection">
//                   <div class="submitBtn">
//                       <button type="submit" class="btn btn-primary" id="submit-btn-2" onclick="submitFunc()">Submit</button>
//                   </div>
//               </div>
//           </form>
      
//       `;

//     document.getElementById("second-passenger").innerHTML = form;
//     document.getElementById("second-passenger").style =
//         "background: rgba(255,255,255,0.5);backdrop-filter: blur(5px);";


//         console.log("Second Element:" + secondPassengerfirstName);    






// }






function validtefName1(){
    var fname = document.getElementById('fname1').value;

    if(fname.length == 0){
        fname1Error.innerHTML = 'First Name is Required';
        return false;
    }

    if(!fname.match(/^[a-zA-Z]{0,20}$/)){
        fname1Error.innerHTML = 'Write First Name Correctly';
        return false;
    }
    
    fname1Error.innerHTML = '<i class="uil uil-check-circle"></i>';
    localStorage.setItem("firname1",fname); 
    return true;
    
}

function validtelName1(){
    var lname = document.getElementById('lname1').value;

    if(lname.length == 0){
        lname1Error.innerHTML = 'Last Name is Required';
        return false;
    }

    if(!lname.match(/^[a-zA-Z]{0,20}$/)){
        lname1Error.innerHTML = 'Write Last Name Correctly';
        return false;
    }
    
    lname1Error.innerHTML = '<i class="uil uil-check-circle"></i>';
    localStorage.setItem("lasname1",lname);
    return true;
    
}

function validteage1(){
    var age = document.getElementById('age1').value;

    if(age.length == 0){
        age1Error.innerHTML = 'Age is Required';
        return false;
    }

    if(age.match(/^100|[1-9]?\d$/)){
        age1Error.innerHTML = '<i class="uil uil-check-circle"></i>';
        localStorage.setItem("agepa1",age); 
        return true;
    }
    
    age1Error.innerHTML = 'Write age in Numbers';
    return false;
    
}




function validateform(){
    if(!validtefName() || !validtelName() || !validteemail() || !validteage() || !validtephone() ){
        subError.style.display = 'block';
        subError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){subError.style.display = 'none';},3000);
        return false;
    }
    else{
        

        var radios = document.getElementsByName('gender');
        for (var radio of radios)
        {
            if (radio.checked) {
                localStorage.setItem("gend",radio.value); 
            }
        }
        

        var radios1 = document.getElementsByName('gender1');
        for (var radio1 of radios1)
        {
            if (radio1.checked) {
                localStorage.setItem("gend1",radio1.value); 
            }
        }
        }
    
    swal("Good job!", "You clicked the button!", "success");
    
}

function text(){
    localStorage.setItem("flag",1);
    document.getElementById("addpass").style.display = "block";
    document.getElementById("addpass1").style.display = "block";
    document.getElementById("addpass2").style.display = "block";
    document.getElementById("addpass3").style.display = "block";
    
}

