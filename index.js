// D.O.M for form
const form = document.querySelector('form');
// Prevents submission of form (default behaviour)
form.addEventListener('submit', event => {
    event.preventDefault();
});