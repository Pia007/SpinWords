// DOM Elements
const swForm = document.getElementById("sw-form");
const swOutcome = document.getElementById("swResponse");
const buttonCheckSwStr = document.getElementById("sw-check-string");
const buttonSwReset = document.getElementById("sw-reset-form");

// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
buttonCheckSwStr.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonCheckSwStr.addEventListener('click', checkSwInput);

function hideSwOutcome() {
    swOutcome.style.display ="none";
}

function clearSwForm() {
    setTimeout(function() {
        swForm.reset();
        hideSwOutcome();
    }, 3000);
};