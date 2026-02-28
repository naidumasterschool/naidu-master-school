
function closePopup() {
    document.getElementById("admissionPopup").style.display = "none";
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("admissionPopup").style.display = "flex";
    }, 500);
};
