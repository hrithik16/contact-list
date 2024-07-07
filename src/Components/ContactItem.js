import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ data }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow">
      <h3 className="text-lg font-semibold mb-1">{data.name}</h3>
      <p className="text-gray-600 mb-1">{data.email}</p>
      <p className="text-gray-600 mb-1">{data.phone}</p>
      <Link 
        to={`/contact/${data.id}`} 
        className="text-blue-500 hover:underline"
      >
        View
      </Link>
    </div>
  );
};

export default ContactItem;
