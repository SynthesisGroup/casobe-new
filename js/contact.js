const contactForm = document.getElementById('contact-form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const project = document.getElementById('project');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');

    const response = grecaptcha.getResponse();

    if(response.length == 0) {
        document.getElementById('g-captcha-error').innerHTML = 'This field is required.'

        return false;
    } else {
	document.getElementById('g-captcha-error').innerHTML = ''

        // Fire the sending text
        submitBtn.innerHTML = "Sending..."

        // Get the form data in an array and pass to email method
        const formData = {
            fullname: fullname.value,
            email: email.value,
            phone: phone.value,
            project: project.value,
            message: message.value
        }

        // Get the data and transport to email
        Email.send({
            Host: "smtp.gmail.com",
            Username : "information.cloud365@gmail.com",
            Password : "gqpptqkatjgljmxb",
            Port: 587,
            Tls: true,
            To : "information.cloud365@gmail.com, mpcaneda.gca@gmail.com, calatagansouthbeach@landco.ph",
            From : email.value,
            Subject : project.value,
            Body : message.value,
        }).then(function(){
            Swal.fire(
                'Email has been sent!',
                'Thank you for contacting us',
                'success'
            )

            submitBtn.innerHTML = "Send Message"
        });

        // Reset the email after sending
        contactForm.reset();

	// Reset Recaptcha
	grecaptcha.reset(opt_widget_id);

	return true;
    }
});