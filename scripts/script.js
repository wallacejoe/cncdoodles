const feedbackElement = document.querySelector('#feedback');
const formElement = document.forms[0];
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    feedbackElement.innerHTML =
        "Hello " +
        formElement.user_firstname.value +
        "! Thank you for your message. We will get back with you as soon as possible!";
    feedbackElement.style.display = "block";
    document.footer.classList.toggle("moveDown");
});