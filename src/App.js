import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Components/Body';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import ContactCard from './Components/ContactCard';
import UpdateCard from './Components/UpdateCard';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '',
        element: <ContactList />,
      },
      {
        path: 'add',
        element: <AddContact />,
      },
      {
        path: "/contact/:id",
        element: <ContactCard />
      },
      {
        path: "/contact/:id/update",
        element: <UpdateCard />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
