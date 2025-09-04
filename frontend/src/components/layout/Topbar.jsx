// src/components/layout/Topbar.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user info from Redux
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout()); // clear redux state
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/">
        MyApp
      </a>
      <div className="ms-auto d-flex align-items-center">
            <span className="text-white me-3">
              <strong>{ userInfo?.username }</strong>
            </span>
            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
              Logout
            </button>
      </div>
    </nav>
  );
};

export default Topbar;
