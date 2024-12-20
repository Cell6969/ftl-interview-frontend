import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiFacebook,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getProfile,
  loginUser,
  selectAuthError,
} from "../../store/slice/authSlice";
import topTost from "@/utils/topTost";
import { unwrapResult } from "@reduxjs/toolkit";

const LoginForm = ({ resetPath }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(selectAuthError);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await dispatch(loginUser({ email, password }));
    if (user.error) {
      console.log(user);
      topTost("error", user.payload);
      return;
    }
    topTost("success", "Login Successfully");

    // fetch profile
    const profile = await dispatch(getProfile());
    if (profile.error) {
      topTost("error", profile.payload);
    }

    const userProfie = unwrapResult(profile);

    console.log(userProfie);

    navigate("/");
  };

  return (
    <>
      <h2 className="fs-20 fw-bolder mb-4">Login</h2>
      <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
      <form className="w-100 mt-4 pt-2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="user1@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 position-relative">
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <span
            role="button"
            className="position-absolute top-50 end-0 translate-middle-y me-2"
            onClick={togglePasswordVisibility}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#6c757d",
            }}
          >
            {passwordVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="rememberMe"
              />
              <label
                className="custom-control-label c-pointer"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
          </div>
          <div>
            <Link to={resetPath} className="fs-11 text-primary">
              Forget password?
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <button type="submit" className="btn btn-lg btn-primary w-100">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
