import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/error/ErrorPage";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Home from "../pages/home/home/Home";
import AllPackages from "../pages/allPackages/AllPackages";
import TourType from "../pages/home/tourTypes/TourType";
import AllTouristStory from "../pages/home/touristStory/AllTouristStory";
import StoryDetails from "../pages/home/touristStory/StoryDetails";
import ViewPackage from "../pages/home/viewPackage/ViewPackage";
import Dashboard from "../layouts/Dashboard";
import MyBookings from "../pages/dashboard/MyBookings";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../pages/dashboard/Wishlist";
import AddPackage from "../pages/dashboard/admin/AddPackage";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "allPackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "tourType/:type",
        element: <TourType></TourType>,
      },
      {
        path: "allTouristStory",
        element: <AllTouristStory></AllTouristStory>,
      },
      {
        path: "storyDetails/:id",
        element: <StoryDetails></StoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/storyDetails/${params.id}`),
      },
      {
        path: "viewPackage/:id",
        element: <ViewPackage></ViewPackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/viewPackages/${params.id}`),
      },
    ],
  },
  // Dashboard
  {
    path: "dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },

      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "myBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      // Admin Routes
      {
        path: "addPackage",
        element: (
          <AdminRoute>
            <AddPackage></AddPackage>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
