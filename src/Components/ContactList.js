import React from "react";
import ContactItem from "./ContactItem";
import { Link } from "react-router-dom";
import { useContacts } from "../utils/ContactContext";

const ContactList = () => {
  const { contactList } = useContacts();

  return (
    <div>
      {contactList.map((data) => (
        <ContactItem data={data} key={data.id} />
      ))}
      <Link to='/add'>Add</Link>
    </div>
  );
};

export default ContactList;
