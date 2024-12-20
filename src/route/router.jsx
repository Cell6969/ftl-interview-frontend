import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import LoginCover from "../pages/login-cover";
import LayoutAuth from "../layout/layoutAuth";
import ResetCover from "../pages/reset-cover";
import ProtectedRoute from "./protectedRoute";
import PendaftaranPenduduk from "../pages/pendaftaran-penduduk";
import PencatatanSipil from "../pages/pencatatan-sipil";
import Stunting from "../pages/stunting";
import StuntingData from "../pages/stunting-table";
import StuntingCreate from "../pages/stunting-create";
import StuntingEdit from "../pages/stunting-edit";
import MeetingList from "../pages/meetingList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <MeetingList />,
          },
          {
            path: "/meeting/add",
            element: <MeetingList />,
          },
        ],
      },
    ],
  },
]);
