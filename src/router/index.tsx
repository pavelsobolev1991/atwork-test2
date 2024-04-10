import {
  createHashRouter
} from "react-router-dom";
import Main from "../pages/Main";
import Edit from "../pages/Edit";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/edit/:id",
    element: <Edit/>,
  }
]);