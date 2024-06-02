import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { api_url } from "../utils/constant";
import { ContactProvider, useContacts } from "../utils/ContactContext";

const Body = () => {
  const { contactList, setContactList } = useContacts();

  const fetchData = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setContactList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

const BodyWithProvider = () => (
  <ContactProvider>
    <Body />
  </ContactProvider>
);

export default BodyWithProvider;
