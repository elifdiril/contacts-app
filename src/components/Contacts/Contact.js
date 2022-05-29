import React from "react";

const Contact = ({contact}) => {
  return (
    <div className="contact">
      <span>{contact.name}</span>
      <span>{contact.phone_number}</span>
    </div>
  );
};

export default Contact;
