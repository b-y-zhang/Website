// loading screen
document.getElementById("main-page").className += " main-fade-out"; 

// animate fade-in from loading screen
setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-page").className = "";
}, 3000);

setTimeout(function() {
    document.getElementById("main-page").style.display = "block";
}, 2950);

document.getElementById("homenavbar").className += " active";
document.active = "home";

function change(changeTo) {
    var currentActive = document.getElementById(document.active + "navbar");
    currentActive.className = "";

    removeDisplay(document.active);
    
    document.getElementById(changeTo + "navbar").className += " active";
    $('#' + changeTo).fadeIn();
    document.active = changeTo;
    return;
}

function removeDisplay(id) {
    document.getElementById(id).style.display = "none";
}