import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const useContacts = () => {
  return useContext(ContactContext);
};

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  return (
    <ContactContext.Provider value={{ contactList, setContactList }}>
      {children}
    </ContactContext.Provider>
  );
};
