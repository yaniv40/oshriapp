const signUp = ()=>{
    let name= document.forms['signup_form']['name'].value;
    let lastName = document.forms['signup_form']['lastName'].value;
    let email = document.forms['signup_form']['email'].value;
    let password = document.forms['signup_form']['password'].value;
    let confIRMpassword = document.forms['signup_form']['confirmPassword'].value;
    
    if(name.length < 2 || name.length > 20 ){
        return false;
    }
    if(lastName.length < 2 || lastName.length > 20){
        return false;
    }
    if(email.indexOf('@') == -1){
        document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
        return false;
    }
    if(email.indexOf('gmail') == -1 ){
        document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
        return false;
    }
    
    if(password.length < 2 || password.length > 10){
     document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly'
        return false;
    }
    // var spcl = /[!@#$%^&*_=+-]/g;
    //     if(password.value.match(spcl)){
    //         document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
    //         return false;
    //     }
        if(password != confIRMpassword){
            document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
           return false
        }
        
        return true;
    
    }

    const getUserFromMyHtml = () => {
        let myemail = document.getElementById('userName').value;
        let mypassword = document.getElementById('password').value;
        let myname = document.getElementById('firstName').value;
        fetch('/signin', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                    email: myemail,
                    password: mypassword,
                    firstName:myname
                })
    
            }).then((res) => {
                return res.json();
            }).then((data) => {
    
                let name = data.firstName;
                localStorage.setItem('myName', name);
                location.href = 'menu.html'
    
            })
            .catch((err) => {
                if (err) throw err
            })
    
    }

 
    
    
