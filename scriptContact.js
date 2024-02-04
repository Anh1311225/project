const form = document.querySelector('form');
const yourName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Your Name: ${yourName.value}<br>Email: ${email.value}<br>
    Subject: ${subject.value}<br>Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aduc72911@gmail.com",
    Password: "AF9356F32387F0D21051D05404253D03A97A",
    To: 'aduc72911@gmail.com',
    From: "aduc72911@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if(message=="OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});