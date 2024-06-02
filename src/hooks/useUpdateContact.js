import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../utils/ContactContext"; // Adjust the import path as needed
import { api_url } from "../utils/constant";

const useUpdateContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contactList, setContactList } = useContacts();

  // Find the contact by id
  const contact = contactList.find((data) => data.id === parseInt(id));

  // State variables for form fields
  const [name, setName] = useState(contact ? contact.name : "");
  const [username, setUsername] = useState(contact ? contact.username : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");

  // Effect to update state if contact changes
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setUsername(contact.username);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { ...contact, name, username, email, phone };

    fetch(`${api_url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(response => response.json())
    .then(data => {
      setContactList(contactList.map(item => (item.id === parseInt(id) ? data : item)));
      navigate('/');
    })
    .catch(error => console.error('Error:', error));
  };

  return { name, setName, username, setUsername, email, setEmail, phone, setPhone, handleSubmit, contact };
};

export default useUpdateContact;
