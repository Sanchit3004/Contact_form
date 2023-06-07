const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://formspree.io/f/mlekyoag', true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        responseMessage.textContent = 'Email sent successfully!';
        form.reset();
      } else {
        responseMessage.textContent = 'Error sending email.';
      }
    }
  };

  xhr.send(formData);
});
