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

function change() {
    document.getElementById("placeholder").style.display = "none";
    document.getElementById("Link1").className += " active";
    $('#welcome').fadeIn();
    return;
}