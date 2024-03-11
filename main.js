$(document).ready(function(){

    //name validation
    $("#firstName").keyup(function () { 
        validateName(); 
    }); 
    $("#submit").click(function(){
        if(!validateName()){
            alert("could not be submitted due to invalid name")
        };
    })
    function validateName() { 
        $("#nameError").text("** first name is mandatory");
        let firstName = $("#firstName").val(); 
        if (firstName.length == 0) { 
            $("#nameError").show(); 
            nameError = false; 
            return false; 
        }else{ 
            $("#nameError").hide(); 
            return true;
        } 
        if(!isNaN(firstName)){
            $("#nameError").text("**Cannot store numbers or symbols");
            $("#nameError").show();
        }
    }


    //password equal validation
    $("#confirmPassword").keyup(function () { 
        validatePassword(); 
    });
    $("#submit").click(function(){
        if(!validatePassword()){
            alert("could not be submitted due to unmatched passwords")
        };
    })

    function validatePassword(){
        $("#passwordError").text("** Passwords do not match");
        let password=$("#password").val();
        let confirmPassword=$("#confirmPassword").val();
        if(password!==confirmPassword)
        {
            $("#passwordError").show();
            return false;
        }
        if(password==confirmPassword){
            $("#passwordError").hide();
            checkPassword();
            checkLength();
            return true;
        }
    }




    //answer field
    $(".answer").hide();
    $('#yes').click(function() {
        if($('#yes').is(':checked')) { 
            $(".answer").show();
         }
     });
     $('#no').click(function() {
        if($('#no').is(':checked')) { 
            $(".answer").hide();
         }
     });




     //password should contain atleast 1 symbol and 1 number
     $("#submit").click(function(){
        if(!checkPassword()){
            alert("could not be submitted due to invalid password:password must include symbols and numbers")
        };
    })
     function checkPassword(){
        let pass=$("#password").val();
        var symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var numberRegex = /\d/;
        if (symbolRegex.test(pass) && numberRegex.test(pass)) 
            {
                $("#checkPassword").hide();
                return true;
            }
        else 
            {
                $("#checkPassword").show(); 
                return false;
            }
        
    }
    $("#submit").click(function(){
        if(!checkLength()){
            alert("could not be submitted due to invalid password: password must be of atleast 4 characters")
        };
    })
    function checkLength(){
        let pass=$("#password").val();
        if(pass.length>=4)
        {
            $("#checkLength").hide();
            return true;
        }
        if(pass.length<4){
            $("#checkLength").show();
            return false;
        }
    }



    // validate age
    $("#submit").click(function(){
        if(!validateAge()){
            alert("could not be submitted due to invalid age: age must be between 10 and 90 years")
        };
    })
    $("#date").change(function () { 
        validateAge(); 
    });
    function validateAge(){
        let birthDate=$("#date").val();
        var birth = new Date(birthDate);
        var currentDate = new Date();
        var differenceMs = currentDate - birth;
        var ageDate = new Date(differenceMs); 
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if(age<10 || age> 90)
        {
            $("#ageError").show();
            return false;
        } 
        if(age>10 && age<90)
        {
            $("#ageError").hide();
            return true;
        }
    }
    

    // get details function
    var arr=[]
    $("#submit").click(function(event){
        event.preventDefault();
        getDetails();
    })
    function getDetails(){
        var firstName=$("#firstName").val();
        var lastName=$("#lastName").val();
        
        let birthDate=$("#date").val();
        var birth = new Date(birthDate);
        let currentDate = new Date();
        let differenceMs = currentDate - birth;
        let ageDate = new Date(differenceMs); 
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);

        var gender=$('#male').is(':checked')?"Male":"Female";
        var rollNo=$("#roll").val();
        // console.log(firstName,lastName,gender,rollNo,birth,age);
        var formData={
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            rollNo: rollNo,
            dob: birth,
            age: age
        }
        arr.push(formData);
        console.log(arr[0]);
    }
    $("#get").click(function(event){
        event.preventDefault();
        alert(JSON.stringify(arr[0]));
    })
    
})