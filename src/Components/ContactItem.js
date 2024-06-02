import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ data }) => {
  return (
    <div>
      <p>
        <Link to={'/contact/'+data.id}>
        {data.username}
        {data.phone}
        </Link>
      </p>
    </div>
  );
};

export default ContactItem;
