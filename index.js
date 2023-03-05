// D.O.M for form
const form = document.querySelector('form');
// D.O.M for input
const input = document.querySelector('input');
// Event Listener on form submit
form.addEventListener('submit', event => {
    // Prevents submission of form (default behaviour)
    event.preventDefault();
    // Sending input message to console to test
    console.log(input.value);
});