// D.O.M for form
const messageForm = document.querySelector('#message-form');
// D.O.M link for link form
const linkForm = document.querySelector('#link-form');
// D.O.M link for form>input for create message
const messageInput = document.querySelector('#message-input');
// D.O.M link for encrypted message input
const messageLinkInput = document.querySelector('#link-input');
// Destructuring the HASH from window.location object
const { hash } = window.location;
console.log(atob(hash.replace('#', '')));
// Event Listener on form submit
messageForm.addEventListener('submit', event => {
    // Prevents submission of form (default behaviour)
    event.preventDefault();
    /*The btoa() method creates a Base64-encoded ASCII string from a binary string (i.e., a string in which each character in the string is treated as a byte of binary data).*/
    const encryptedMessage = btoa(messageInput.value);
    // Hide the create message-form
    messageForm.classList.add('hide');
    // Display the link display form
    linkForm.classList.remove('hide');
    // Setting encrypted
    messageLinkInput.value = `${window.location}#${encryptedMessage}`;
    // Selects the link input automatically
    messageLinkInput.select();
});