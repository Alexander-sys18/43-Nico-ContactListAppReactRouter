import React, { useState } from "react";
import axios from "axios";
import "../../styles/AddNewContact.css";
import { Link } from "react-router-dom";

const AddNewContact = ({ handleAddContact, history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      full_name: fullName,
      email: email,
      agenda_slug: "NicoPt43",
      address: address,
      phone: phone,
    };

    try {
      await axios.post(
        "https://playground.4geeks.com/apis/fake/contact/",
        newContact
      );
      handleAddContact();
      history.push("/");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className="container AddNewContactContainer">
      <Link
      to="/"
      className="LinkToArrow"
      >
      <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h2 className="tittleOfAddNewContact">Add a New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label>Full Name</label> */}
          <input
            className="inputOfAddNewContact"
            placeholder="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Email</label> */}
          <input
            className="inputOfAddNewContact"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Address</label> */}
          <input
            className="inputOfAddNewContact"
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Phone</label> */}
          <input
            className="inputOfAddNewContact"
            placeholder="Phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <Link to="/" className="btn btn-primary AddNewContactButton" onClick={handleSubmit}>
          Add Contact
        </Link>
      </form>
    </div>
  );
};

export default AddNewContact;
