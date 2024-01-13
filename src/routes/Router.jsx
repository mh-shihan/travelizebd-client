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
    ],
  },
]);
