import React from "react";
import ResetForm from "@/components/authentication/ResetForm";

const ResetCover = () => {
  return (
    <main className="auth-cover-wrapper">
      <div className="auth-cover-content-inner">
        <div className="auth-cover-content-wrapper">
          <div className="auth-img">
            <img
              src="/images/auth/auth-cover-reset-bg.svg"
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
            <ResetForm path={"/login"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetCover;
