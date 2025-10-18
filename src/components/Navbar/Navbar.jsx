import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { url, loggedIn, setLoggedIn } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const removeCookie = (name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname};`;
  };

  async function handleLogout() {
    try {
      const res = await axios.get(`${url}/api/user/logout`, { withCredentials: true });

      if (res.data.success) {
        removeCookie("userToken");
        localStorage.removeItem("userToken");
        setLoggedIn(false);
        setMenuOpen(false);
        alert(res.data.message);
        navigate("/");
      } else {
        alert("Failed to logout");
      }
    } catch (error) {
      console.log("Logout error:", error?.response?.data || error.message);
      localStorage.removeItem("userToken");
      removeCookie("userToken");
      setLoggedIn(false);
      setMenuOpen(false);
      navigate("/");
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Hamburger Menu */}
        <div className="navbar-header">
          <button className="menu-btn" onClick={toggleMenu}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className="navbar-logo">Gurunanak PG</div>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/enquire" onClick={() => setMenuOpen(false)}>Enquire</Link></li>

          {loggedIn === true && (
            <>
              <li>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-logout-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          )}

          {loggedIn === false && (
            <li>
              <Link to="/auth" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
