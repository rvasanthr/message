// DOM LINKS
// #message-form
const messageForm = document.querySelector('#message-form');
// #link-form
const linkForm = document.querySelector('#link-form');
// #message-input
const messageInput = document.querySelector('#message-input');
// #link-input
const messageLinkInput = document.querySelector('#link-input');
// #show-message
const showMessage = document.querySelector('#message-show');
// Extracting Secret Message
// Destructuring the HASH from window.location object
const { hash } = window.location;
const secretMessage = atob(hash.replace('#', ''));
// If secret message exists, then reveal it
if (secretMessage) {
    // removes the hide class from #message-show div and adds it to messageForm
    showMessage.classList.remove('hide');
    showMessage.querySelector('h1').innerHTML = secretMessage;
    document.querySelector('#message-show').classList.remove('hide');
    messageForm.classList.add('hide');
}
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