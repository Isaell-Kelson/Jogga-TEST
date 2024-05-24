import React, { useEffect, useState } from 'react';
import axios from 'axios';



interface Contact {
    name: string;
    email: string;
    phone: string;
}

export default function ContactsList() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Erro ao buscar contatos:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Lista de Contatos</h1>
            <ul>
                {Array.isArray(contacts) && contacts.map((contact, index) => (
                    <li key={index} className="mb-2">
                        <strong>Nome:</strong> {contact.name} <br />
                        <strong>Email:</strong> {contact.email} <br />
                        <strong>Telefone:</strong> {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}
