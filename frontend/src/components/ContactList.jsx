// frontend/src/components/ContactList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ContactList({ reload }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/contact')
      .then(res => setContacts(res.data))
      .catch(() => alert('Error al obtener contactos'));
  }, [reload]);

  return (
    <div>
      <h3>Contactos registrados</h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> ({contact.email})<br />
            {contact.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
