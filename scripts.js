let sent = false;
let contactForm = document.getElementById("contactForm");
let contactDiv = document.getElementById("contactDiv");

contactForm.onsubmit = function(e) {
  contactForm.style.display = "none";
  contactDiv.prepend("Your info has been saved and I will respond shortly.  Thank You!");
};
