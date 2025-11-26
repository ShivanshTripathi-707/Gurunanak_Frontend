import React from 'react'
import "./Service.css"

import ContactCard from "../../assets/contactcard.webp"
import Dinner from "../../assets/dinner1.webp"
import Lunch from "../../assets/dinnner2.webp"
import PgHome from "../../assets/pghome.webp"
import PgHome2 from "../../assets/pgmain2.webp"
import room from "../../assets/room1.webp"

// Reusable ServiceItem component
const ServiceItem = ({ icon, title, description, position, image }) => {
  return (
    <div className={`service-item ${position}`}>
      <div className="content-box">
        <img src={image} alt={title} className="service-img" />
        <i className={`fa-solid ${icon} service-icon`}></i>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const Service = () => {
  const services = [
    {
      icon: "fa-bolt",
      title: "24×7 Electricity",
      description: "Reliable, uninterrupted power supply so you can study, relax, and stay connected anytime.",
      image: PgHome,
    },
    {
      icon: "fa-snowflake",
      title: "Fully Air-Conditioned Rooms",
      description: "Cool, comfortable rooms designed for peaceful living during every season.",
      image: room,
    },
    {
      icon: "fa-tint",
      title: "Daytime Fresh Meals",
      description: "Fresh, balanced daytime meals prepared with care to keep you energized through your busy routine.",
      image: Lunch,
    },
    {
      icon: "fa-utensils",
      title: "Healthy Meals",
      description: "Nutritious, homely food served fresh daily — just like home!",
      image: Dinner,
    },
    {
      icon: "fa-wifi",
      title: "High-Speed Wi-Fi",
      description: "Seamless internet connectivity to support your studies, work, and entertainment.",
      image: PgHome2,
    },
    {
      icon: "fa-lock",
      title: "Full Security",
      description: "Our premises are secured with 24×7 CCTV surveillance, controlled entry access, and on-site staff to ensure a safe and worry-free living environment for every resident.",
      image: ContactCard,
    },
  ]

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            image={service.image}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  )
}

export default Service
