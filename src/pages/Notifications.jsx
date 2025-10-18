import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Notifications = () => {
  const { url, loggedIn, setLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;

  // ✅ Check authentication (cookie or localStorage)
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const res = await axios.get(`${url}/api/user/authenticated`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (res.data.success) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          navigate("/auth");
        }
      } catch (error) {
        console.log("Auth check failed:", error?.response?.data || error.message);
        setLoggedIn(false);
        navigate("/auth");
      }
    };

    verifyAuth();
  }, [url, navigate, setLoggedIn]);

  // ✅ Fetch notifications after auth is verified
  useEffect(() => {
    if (loggedIn) {
      fetchNotifications();
    }
  }, [loggedIn]);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const res = await axios.get(`${url}/api/user/allNotification`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res.data.success) {
        setNotifications(res.data.allNotification);
      } else {
        setNotifications([]);
      }
    } catch (error) {
      console.log(error.message);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading || loggedIn === null) {
    return (
      <p style={{ textAlign: "center", fontSize: "30px", marginTop: "20%" }}>
        Loading notifications...
      </p>
    );
  }

  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <div className="no-notification">
          <i className="fa-solid fa-bell-slash"></i>
          <p>No new notifications</p>
        </div>
      ) : (
        <ul className="notification-list">
          {notifications.map((notif) => (
            <li key={notif._id} className="notification-item">
              <i className="fa-solid fa-arrow-right"></i>
              <div className="notification-content">
                <span className="notif-message">{notif.notification}</span>
                <span className="notif-date">
                  {new Date(notif.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
