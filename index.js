// D.O.M for form
const form = document.querySelector('form');
// D.O.M link for form>input for create message
const messageInput = document.querySelector('#message-input');
// D.O.M link for encrypted message input
const copyMessage = document.querySelector('#link-input');
// Event Listener on form submit
form.addEventListener('submit', event => {
    // Prevents submission of form (default behaviour)
    event.preventDefault();
    /*The btoa() method creates a Base64-encoded ASCII string from a binary string (i.e., a string in which each character in the string is treated as a byte of binary data).*/
    const encryptedMessage = btoa(messageInput.value);
    copyMessage.value = encryptedMessage;
});