import React from 'react'
import "./Service.css"

// Reusable ServiceItem component
const ServiceItem = ({ icon, title, description, position }) => {
  return (
    <div className={`service-item ${position}`}>
      <div className="content-box">
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
    },
    {
      icon: "fa-snowflake",
      title: "Fully Air-Conditioned Rooms",
      description: "Cool, comfortable rooms designed for peaceful living during every season.",
    },
    {
      icon: "fa-tint",
      title: "RO Purified Water",
      description: "Clean, safe drinking water available round the clock for a healthy lifestyle.",
    },
    {
      icon: "fa-utensils",
      title: "Healthy Meals",
      description: "Nutritious, homely food served fresh daily — just like home!",
    },
    {
      icon: "fa-wifi",
      title: "High-Speed Wi-Fi",
      description: "Seamless internet connectivity to support your studies, work, and entertainment.",
    },
    {
      icon: "fa-lock",
      title: "Full Security",
      description: "Our premises are secured with 24×7 CCTV surveillance, controlled entry access, and on-site staff to ensure a safe and worry-free living environment for every resident.",
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
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  )
}

export default Service
