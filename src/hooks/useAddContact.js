import { useRef } from "react";
import { api_url } from "../utils/constant";
import { useContacts } from "../utils/ContactContext";
import { useNavigate } from "react-router-dom";

const useAddContact = () => {
  const name = useRef(null);
  const username = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const { contactList, setContactList } = useContacts();
  const navigate = useNavigate()

  const handleSubmit = () => {
    fetch(api_url, {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        phone: phoneNumber.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setContactList([...contactList, json]);
        navigate('/')
      });
  };

  return { name, username, email, phoneNumber, handleSubmit };
};

export default useAddContact;
