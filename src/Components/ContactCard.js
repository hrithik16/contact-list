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
    return <div className="text-center text-red-500">Contact not found</div>;
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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-8">
      <div className="p-6 bg-white shadow rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="mb-2">
          <strong>Name:</strong> {contact.name}
        </p>
        <p className="mb-2">
          <strong>Username:</strong> {contact.username}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <div className="flex justify-between">
          <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600"
          >
            Delete
          </button>
          <button 
            onClick={handleUpdate} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
