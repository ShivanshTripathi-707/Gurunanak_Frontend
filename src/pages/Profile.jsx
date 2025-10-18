import React, { useContext, useState, useEffect } from "react";
import CoreProfile from "../components/CoreProfile/CoreProfile";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { url, setLoggedIn } = useContext(AppContext);
  const [complainText, setComplainText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const res = await axios.get(`${url}/api/user/authenticated`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (res.data.success) {
          if (res.data.user?.verified) {
            setLoggedIn(true);
          } else {
            // 🚨 User is not verified — redirect to verify page
            setLoggedIn(false);
            navigate("/verify");
          }
        } else {
          setLoggedIn(false);
          navigate("/auth");
        }
      } catch (err) {
        console.log("Auth check error:", err?.response?.data || err.message);
        setLoggedIn(false);
        navigate("/auth");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [url, navigate, setLoggedIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");

      const res = await axios.post(
        `${url}/api/user/complain`,
        { complain: complainText },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert(res.data.message);
        setComplainText("");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="profile">
      <CoreProfile />
      <div className="complain">
        <form onSubmit={handleSubmit} className="complain-form">
          <input
            type="text"
            placeholder="Raise Your Complain...."
            value={complainText}
            onChange={(e) => setComplainText(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
