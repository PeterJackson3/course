// Get the modal
var modal = document.getElementById("signupModal");

// Get the button that opens the modal
var btn = document.getElementById("enrollBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
//var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
//var signupBtn = document.getElementById("signBtn");

// When the user clicks the sign-up button, open the modal
//signupBtn.onclick = function () {
//signupModal.style.display = "block";
//};
