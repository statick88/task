import emailjs from 'emailjs-com';

class EmailSender {
  static sendEmail(email, message) {
    const serviceId = 'service_90rlztk';
    const templateId = 'template_9bz9yrt';
    const userId = 'mb63Rv5hdBv7DDFR-';

    emailjs.send(serviceId, templateId, { to_email: email, message: message }, userId)
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  }
}

export default EmailSender;
