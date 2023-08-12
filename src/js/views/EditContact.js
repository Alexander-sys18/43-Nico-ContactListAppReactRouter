import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import axios from "axios";
import "../../styles/editContact.css"

const EditContact = () => {
  const { contactId } = useParams();
  const [contactData, setContactData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axios.get(
        `https://playground.4geeks.com/apis/fake/contact/${contactId}`
      );
      setContactData(response.data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
        contactData
      );
      navigate("/");
    } catch (error) {
      console.error("Error updating contact data:", error);
    }
  };

  return (
    <div className="container editContactContainer">
      <Link
      to="/"
      className="LinkToArrow"
      >
      <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h2 className="tittleOfEditContact">Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="full_name">Full Name:</label> */}
          <input
            className="inputOfEditContact"
            placeholder="Full Name"
            type="text"
            name="full_name"
            value={contactData.full_name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            className="inputOfEditContact"
            placeholder="Email"
            type="email"
            name="email"
            value={contactData.email || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {/* <label htmlFor="address">Address:</label> */}
          <input
            className="inputOfEditContact"
            placeholder="Address"
            type="text"
            name="address"
            value={contactData.address || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {/* <label htmlFor="phone">Phone:</label> */}
          <input
            className="inputOfEditContact"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={contactData.phone || ""}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary buttonEditContact">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;
