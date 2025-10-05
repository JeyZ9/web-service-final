import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import Book from "../pages/Book";
import Journals from "../pages/Journals";
import Comic from "../pages/Comic";
import Add from "../pages/Add";
import Update from "../pages/Update";
import ShowItemDetails from "../pages/ShowItemDetails";
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
        path: "/update/:type/:id",
        element: <Update />,
      },
      {
        path: "/:type/:id",
        element: <ShowItemDetails />,
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
