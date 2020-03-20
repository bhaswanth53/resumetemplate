var form = document.getElementById('register-form')

form.addEventListener('submit', function() {
    event.preventDefault()

    var username = document.getElementById('username').value
    var mobile = document.getElementById('mobile').value
    var password = document.getElementById('password').value

    if(username.length == 0) {
        alert("Please enter username")
        exit()
    }

    
    if(mobile.length < 10) {
        alert("Mobile number is atleast 10 digits")
        exit()
    }

    if(password.length ==0) {
        alert("Please enter your password")
        exit()
    }

    if(password.length < 8 || password.length > 32) {
        alert("Password must be between 8 to 32 characters")
        exit()
    }

    var details = 'Username: ' + username + '\nMobile: ' + mobile + '\nPassword: ' + password
    alert(details)
})


var heading = document.getElementById('heading')
heading.innerText = "Register Page"

function blinkText() {
    if(heading.innerText == "") {
        heading.innerText = "RegisterPage"
    }
    else {
        heading.innerText = ""
    }
}

setInterval(blinkText, 1000)