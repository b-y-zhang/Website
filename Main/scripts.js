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
    // Disable active navbar
    var currentActive = document.getElementById(document.active + "navbar");
    currentActive.className = "";
    
    // Disable current page 
    document.getElementById(document.active).style.display = "none";
    
    // Update active navbar
    document.getElementById(changeTo + "navbar").className += " active";
    
    // Update current page
    $('#' + changeTo).fadeIn();
    
    // Update context
    document.active = changeTo;
    return;
}