$(document).ready(function(){

    
    arr=[]
    const student={};
    $("#checkPassword").hide();
    $("#ageError").hide();
    $("#checkLength").hide();
    // $("#submit").click(function(){
    //     if(!validateName()){
    //         alert("could not be submitted due to invalid name")
    //     };
    // })
    $("#submit").click(function(){
        if(!validatePassword()){
            alert("could not be submitted due to unmatched passwords")
        };
    })


    $("#firstName").keyup(function () { 
        validateName(); 
    }); 
    function validateName() { 
        $("#nameError").text("** first name is mandatory");
        let firstName = $("#firstName").val(); 
        if (firstName.length == 0) { 
            $("#nameError").show(); 
            nameError = false; 
            return false; 
        }else{ 
            $("#nameError").hide(); 
        } 
        if(!isNaN(firstName)){
            $("#nameError").text("**Cannot store numbers or symbols");
            $("#nameError").show();
        }
    } 

    $("#confirmPassword").keyup(function () { 
        validatePassword(); 
    });

    function validatePassword(){
        $("#passwordError").text("** Passwords do not match");
        let password=$("#password").val();
        let confirmPassword=$("#confirmPassword").val();
        // console.log(password,confirmPassword);
        if(password!==confirmPassword)
        {
            // console.log("check1")
            $("#passwordError").show();
        }
        if(password==confirmPassword){
            // console.log("check2");
            $("#passwordError").hide();
            checkPassword();
            checkLength();
        }
    }
    function checkPassword(){
        console.log("enter1");
        let pass=$("#checkPassword").val();
        const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/; 
        var hasNumber = /\d/;
        if (regex.test(pass) && hasNumber.test(pass)) 
            {
                $("checkPassword").hide();
            }
        else 
            {
                $("checkPassword").show(); 
            }
        
    }
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
    $("#date").keyup(function () { 
        $("#ageError").hide();
        validateAge(); 
    });
    function validateAge(){
        var month_diff = Date.now() - dob.getTime();  
        var age_dt = new Date(month_diff);   
        var year = age_dt.getUTCFullYear();   
        var age = Math.abs(year - 1970);  
        if(age<10 || age> 90)
        {
            $("#ageError").show();
        } 
    }


    // get details function

    $("#submit").click(function(){
        
    })
    function getDetails(){
        
        let firstName=$("#firstName").val();
        let lastName=$("#lastName").val();
        let gender=$('#male').is(':checked')?"Male":"Female";
        let rollNo=$("r#oll").val();
        // let dob=("#date").val();
        console.log(firstName,lastName,gender,rollNo);
        student.firstName=firstName;
        student.lastName=lastName;
        student.gender=gender;
        student.rollNo=rollNo;
        arr.push(student);
        alert(student);
    }
    $("#get").click(function(){
        alert(arr);
    })
    
})