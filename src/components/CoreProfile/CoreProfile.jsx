import React, { useContext, useState, useEffect } from "react";
import "./CoreProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const CoreProfile = () => {
  const navigate = useNavigate();
  const { url } = useContext(AppContext);
  const [Profile, setProfile] = useState({});

  axios.defaults.withCredentials = true;

  async function fetchProfile() {
    try {
      let res = await axios.get(`${url}/api/user/profile`);
      if (res.data.success) {
        setProfile(res.data.loggedInUser);
        console.log(res.data.loggedInUser);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  // Capitalize first letter
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // WhatsApp redirect handler
  const handleWhatsApp = () => {
    const phoneNumber = "8290565654";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const currentYear = new Date().getFullYear(); // Current year

  return (
    <div className="CoreProfile">
      <div className="profile-container">
        {/* Left Section */}
        <div className="profile-left">
          {Profile.profileImage ? (
            <img
              src={Profile.profileImage}
              alt="Profile"
              className="profile-avatar"
            />
          ) : (
            <i className="fa-solid fa-user-circle profile-avatar"></i>
          )}
          <h2>{Profile.name}</h2>
          <p className="profile-role">Resident</p>
        </div>

        {/* Right Section */}
        <div className="profile-right">
          <div className="detail-item">
            <i className="fa-solid fa-envelope"></i>
            <span>{Profile.email}</span>
          </div>
          <div className="detail-item">
            <i className="fa-solid fa-calendar-day"></i>
            <span>Joined On - {new Date(Profile.dateOfJoin).toLocaleDateString()}</span>
          </div>
          <div className="detail-item">
            <i className="fa-solid fa-phone"></i>
            <span>{Profile.contact}</span>
          </div>
          <div className="detail-item">
            <i className="fa-solid fa-phone-volume"></i>
            <span>{Profile.alternateNumber}</span>
          </div>
          <div className="detail-item">
            <i className="fa-solid fa-door-open"></i>
            <span>Room - {Profile.roomNumber}</span>
          </div>
          <div className="detail-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{Profile.location}</span>
          </div>

          {/* Security Deposit */}
          <div className="detail-item">
            <i className="fa-solid fa-money-bill"></i>
            <span>
              Security Deposit Status - {capitalize(Profile.securityDeposit)}
            </span>
          </div>

          {/* Rent Deposits */}
          <div className="detail-item">
            <i className="fa-solid fa-calendar-check"></i>
            <span>
              Rent Deposits -{" "}
              {Profile.rentRecieved && Profile.rentRecieved.length > 0
                ? Profile.rentRecieved.join(", ")
                : "to be updated"} (In Year {currentYear})
            </span>
          </div>

          {/* Action buttons */}
          <div className="profile-actions">
            <button className="whatsapp-btn2" onClick={handleWhatsApp}>
              <i className="fa-brands fa-whatsapp"></i> Chat With Admin
            </button>
            <button
              className="change-btn"
              onClick={() => navigate("/notifications")}
            >
              Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreProfile;
