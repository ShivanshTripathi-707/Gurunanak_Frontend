import React, { useState, useContext } from 'react';
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Enquire = () => {
  const { url } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    course: "",
    roomType: "double"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Map frontend fields to backend schema
      const payload = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        course: formData.course,       
        location: formData.address,    
        roomType: formData.roomType,   
      };

      const response = await axios.post(`${url}/api/user/enquiry`, payload);

      if (response.data.success) {
        alert("Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          address: "",
          contact: "",
          course: "",
          roomType: "double"
        });
      } else {
        alert("Failed to submit enquiry: " + response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong while submitting the enquiry.");
    }
  };

  return (
    <div className="enquiry">
      <h2>Enquire Now</h2>
      <p>One of our team member will reach you shortly.</p>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-phone"></i>
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-book"></i>
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-bed"></i>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="single">Single Seater</option>
            <option value="two">Double Seater</option>
            <option value="three">Triple Seater</option>
            <option value="four">Four Seater</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Enquiry</button>
        <span>Or</span>
      </form>

      {/* WhatsApp Chat Button */}
      <div className="whatsapp-chat">
        <a
          href="https://wa.me/8290565654"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <i className="fa-brands fa-whatsapp"></i> Chat On Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Enquire;
