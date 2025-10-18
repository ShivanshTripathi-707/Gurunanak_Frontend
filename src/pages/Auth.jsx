import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Auth = () => {
  const { url, loggedIn, setLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfJoin: "",
    contact: "",
    alternateNumber: "",
    roomNumber: "",
    location: "jaipur",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (loggedIn === true) navigate("/profile");
  }, [loggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // ===== LOGIN =====
        const res = await axios.post(
          `${url}/api/user/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (res.data.success) {
          // ✅ Save token to localStorage if returned
          if (res.data.token) {
            localStorage.setItem("userToken", res.data.token);
          }

          setLoggedIn(true);
          alert(res.data.message);
          navigate("/profile");
        } else {
          alert(res.data.message);
          setLoggedIn(false);
        }
      } else {
        // ===== SIGNUP =====
        const res = await axios.post(`${url}/api/user/signUp`, formData, {
          withCredentials: true,
        });

        if (res.data.success) {
          alert(
            `${res.data.message}\nPlease wait until the admin verifies your account.`
          );

          // ✅ No login after signup
          setIsLogin(true);
          setLoggedIn(false);

          // Optional: clear form
          setFormData({
            name: "",
            email: "",
            password: "",
            dateOfJoin: "",
            contact: "",
            alternateNumber: "",
            roomNumber: "",
            location: "jaipur",
          });

          navigate("/auth");
        } else {
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.log("Auth error:", error?.response?.data || error.message);
      alert("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="auth-box">
        <h2>{isLogin ? "Login to Your Account" : "Create an Account"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="auth-field">
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

              <div className="auth-field">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Whatsapp Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-field">
                <i className="fa-solid fa-phone-volume"></i>
                <input
                  type="tel"
                  name="alternateNumber"
                  placeholder="Alternate Contact Number"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="auth-field">
                <i className="fa-solid fa-door-open"></i>
                <input
                  type="number"
                  name="roomNumber"
                  placeholder="Room Number"
                  value={formData.roomNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="auth-field">
                <i className="fa-solid fa-calendar-day"></i>
                <input
                  type="date"
                  name="dateOfJoin"
                  value={formData.dateOfJoin}
                  onChange={handleChange}
                  required
                />
                <label className="date-placeholder">Date of Join</label>
              </div>

              <div className="auth-field">
                <i className="fa-solid fa-location-dot"></i>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    -- Select Location --
                  </option>
                  <option value="jaipur">Jaipur</option>
                  <option value="kota">Kota</option>
                  <option value="sikar">Sikar</option>
                  <option value="indore">Indore</option>
                </select>
              </div>
            </>
          )}

          <div className="auth-field">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder={isLogin ? "Password" : "Create Password"}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="auth-toggle">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </>
            )}
          </p>

          {!isLogin && (
            <p className="auth-warning">
              <i className="fa-solid fa-triangle-exclamation"></i> Only PG
              residents can create an account. Others will not be accepted by
              the admin.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
