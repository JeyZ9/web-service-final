import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import Book from "../pages/Book";
import Journals from "../pages/Journals";
import Comic from "../pages/Comic";
import Add from "../pages/Add";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/add/:type",
        element: <Add />,
      },
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/journals",
        element: <Journals />,
      },
      {
        path: "/comics",
        element: <Comic />,
      },
    ],
  },
]);

export default router;
