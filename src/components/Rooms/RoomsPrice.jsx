import React from "react";
import "./RoomsPrice.css";
import {useNavigate} from "react-router-dom"

const RoomsPrice = () => {
  const navigate = useNavigate()
  const rooms = [
    {
      title: "Single Occupancy",
      price: "22,000",
      note: "+ Electricity Bill",
      icon: "fa-indian-rupee-sign",
    },
    {
      title: "Double Occupancy",
      price: "11,000",
      note: "+ Electricity Bill",
      icon: "fa-indian-rupee-sign",
    },
    {
      title: "Triple Occupancy",
      price: "10,000",
      note: "+ Electricity Bill",
      icon: "fa-indian-rupee-sign",
    },
  ];

  return (
    <div className="rooms-price">
      <h2>Room Pricing</h2>

      <div className="price-grid">
        {rooms.map((room, index) => (
          <div className="price-card" key={index}>
            <h3>{room.title}</h3>

            <div className="price-box">
              <i className={`fa-solid ${room.icon}`}></i>
              <span>{room.price}</span>
            </div>

            <p className="note">{room.note}</p>

            <button className="book-btn" onClick={()=> navigate("/enquire")}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPrice;
