import React from "react";
import emailjs from "emailjs-com";

const TemplateEmail = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <form onSubmit={sendEmail}></form>
    </div>
  );
};

export default TemplateEmail;
