import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/contactList.css";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const agendaSlug = "NicoPt43";

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        `https://playground.4geeks.com/apis/fake/contact/agenda/${agendaSlug}`
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await axios.delete(
        `https://playground.4geeks.com/apis/fake/contact/${contactId}`
      );
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="container">
      <div className="Navbar">
        <Link to="/AddNewContact" type="button" className="btn btn-light btnAdd">
          Add a new contact
        </Link>
      </div>
      <div className="Contacts">
        <h2 id="tittle">Contacts of your contact book:</h2>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id} className="contact d-flex">
              <div id="imageOfContact"></div>
              <div className="recordsContact">
                <span id="fullName">
                  <strong>{contact.full_name}</strong>
                </span>
                <span className="simpleRecords">{contact.email}</span>
                <span className="simpleRecords">{contact.address}</span>
                <span className="simpleRecords">{contact.phone}</span>
              </div>
              <div id="actionButtons">
                <Link
                  to={`/editcontact/${contact.id}`}
                  className="btn btn-light EditButton"
                >
                  <i className="fa-solid fa-pencil"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger DeleteButton"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No hay contactos en esta agenda.</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
