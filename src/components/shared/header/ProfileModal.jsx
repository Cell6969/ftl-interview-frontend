import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUserProfile } from "../../../store/slice/authSlice";
import topTost from "@/utils/topTost";
import { useNavigate } from "react-router-dom";

const ProfileModal = () => {
  const profile = useSelector(selectUserProfile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());

    topTost("success", "logout successfull");
    navigate("/login");
  };

  return (
    <div className="dropdown nxl-h-item">
      <a
        href="#"
        data-bs-toggle="dropdown"
        role="button"
        data-bs-auto-close="outside"
      >
        <img
          src="/images/avatar/1.png"
          alt="user-image"
          className="img-fluid user-avtar me-0"
        />
      </a>
      <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
        <div className="dropdown-header">
          <div className="d-flex align-items-center">
            <img
              src="/images/avatar/1.png"
              alt="user-image"
              className="img-fluid user-avtar"
            />
            <div>
              <h6 className="text-dark mb-0">{profile?.username}</h6>
              <span className="fs-12 fw-medium text-muted">
                {profile?.email}
              </span>
            </div>
          </div>
        </div>
        <a href="#" className="dropdown-item">
          <i>
            <FiUser />
          </i>
          <span>Account Settings</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item" onClick={handleLogout}>
          <i>
            {" "}
            <FiLogOut />
          </i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileModal;
