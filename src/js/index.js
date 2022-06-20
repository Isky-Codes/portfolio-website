function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "shahriman.iskandar@gmail.com",
        Password : "roselove1996",
        To : 'shahriman.iskandar@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElemenyById("name").value 
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Message: " + document.getElementById("message").value
                         
    }).then(
      message => alert('Message Sent Succesfully')
    );
}