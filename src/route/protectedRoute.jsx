import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {
  getProfile,
  selectAuthStatus,
  selectUserProfile,
} from "../store/slice/authSlice";
import Loading from "@/components/shared/Loading";

const ProtectedRoute = () => {
  // const profile = useSelector(selectUserProfile);

  // const status = useSelector(selectAuthStatus);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, [dispatch]);

  // if ((status === "loading" || status === "idle") && !profile) {
  //   return <Loading />;
  // }

  // if (!profile) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
