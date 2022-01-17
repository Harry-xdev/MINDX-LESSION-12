function validate() {
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;

    if (userEmail == "") {
        alert(`Email is empty!`);
        return false;
    }
    if (userPass =="") {
        alert(`Password is empty!`);
        return false;
    } else if (userPass.length < 8) {
        alert(`Password must has aleast 8 characters!`);
        return false;        
    }
    if (userEmail == "anh@gmail.com" && userPass == "admin123") {
        alert(`Welcome!`);
        return true;
    } else {
        alert(`Unknown!`);
        return false;
    }
}

// } else if (userEmail == "anh@gmail.com" && userPass != "admin123") {
//     alert(`Wrong password!`);
//     return false;
// } else if (userEmail != "anh@gmail.com" && userPass == "admin123")
//     alert(`Wrong user email!`);
//     return false;
// }