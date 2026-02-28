
function submitForm() {
    alert("Message Sent Successfully!");
    return false;
}

function login() {
    let pass = document.getElementById("password").value;
    if(pass === "admin123") {
        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
    } else {
        alert("Wrong Password");
    }
}

function updateName() {
    let name = document.getElementById("newName").value;
    localStorage.setItem("schoolName", name);
    alert("Updated!");
}

function updateAbout() {
    let about = document.getElementById("newAbout").value;
    localStorage.setItem("aboutText", about);
    alert("Updated!");
}

function updateImage() {
    let img = document.getElementById("newImage").value;
    localStorage.setItem("galleryImg", img);
    alert("Updated!");
}

window.onload = function() {
    if(localStorage.getItem("schoolName")) {
        document.getElementById("schoolName").innerText = localStorage.getItem("schoolName");
    }
    if(localStorage.getItem("aboutText")) {
        document.getElementById("aboutText").innerText = localStorage.getItem("aboutText");
    }
    if(localStorage.getItem("galleryImg")) {
        document.getElementById("galleryImg").src = localStorage.getItem("galleryImg");
    }
};
