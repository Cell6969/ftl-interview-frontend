import React from "react";
import LoginForm from "@/components/authentication/LoginForm";

const LoginCover = () => {
  return (
    <main className="auth-cover-wrapper">
      <div className="auth-cover-content-inner">
        <div className="auth-cover-content-wrapper">
          <div className="auth-img">
            <img
              src="/images/auth/auth-cover-login-bg.svg"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="auth-cover-sidebar-inner">
        <div className="auth-cover-card-wrapper">
          <div className="auth-cover-card p-sm-5">
            <div
              className="wd-full mb-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="/images/logo.png"
                alt="img"
                style={{ width: "120px" }}
              />
            </div>
            <LoginForm resetPath={"/reset"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginCover;
