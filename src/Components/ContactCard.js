import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../utils/ContactContext"; // Adjust the import path as needed
import { api_url } from "../utils/constant";

const ContactCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contactList, setContactList } = useContacts();

  // Find the contact by id
  const contact = contactList.find((data) => data.id === parseInt(id));

  // If no contact is found, return a message
  if (!contact) {
    return <div>Contact not found</div>;
  }

  const handleDelete = () => {
    fetch(`${api_url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setContactList(
            contactList.filter((data) => data.id !== parseInt(id))
          );
          navigate("/"); // Redirect to the contact list after deletion
        } else {
          console.error("Failed to delete the contact");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleUpdate = () => {
    navigate(`/contact/${id}/update`);
  };

  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Username:</strong> {contact.username}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ContactCard;
