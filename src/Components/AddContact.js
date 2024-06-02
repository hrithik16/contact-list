import React from "react";
import useAddContact from "../hooks/useAddContact";

const AddContact = () => {
  const { name, username, email, phoneNumber, handleSubmit } = useAddContact();

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={name} type="text" placeholder="Full Name" />
        <input ref={username} type="text" placeholder="Username" />
        <input ref={email} type="email" placeholder="Email" />
        <input ref={phoneNumber} type="text" placeholder="Phone number" />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
