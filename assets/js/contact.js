/*--==========email JS==========*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();
    // service ID -template ID -# form -publickey
    emailjs.sendForm('service_1k1yr8l','template_ati8o6q','#contact-form','XkMSIOceXx0KXdCet')
    .then(() => {
        //show send message 
        contactMessage.textContent='Message sent successfully ✅️'
        // remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent=''
        }, 5000)
     // clear input fields
     contactForm.reset()

},() => {
    //show error message
    contactMessage.textContent='Message not sent ❌️'
})
}
contactForm.addEventListener('submit', sendEmail);