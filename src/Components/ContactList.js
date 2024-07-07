import React from "react";
import ContactItem from "./ContactItem";
import { Link } from "react-router-dom";
import { useContacts } from "../utils/ContactContext";

const ContactList = () => {
  const { contactList } = useContacts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Contact List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactList.map((data) => (
          <ContactItem data={data} key={data.id} />
        ))}
      </div>
      <Link 
        to='/add' 
        className="block text-center bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600"
      >
        Add
      </Link>
    </div>
  );
};

export default ContactList;
