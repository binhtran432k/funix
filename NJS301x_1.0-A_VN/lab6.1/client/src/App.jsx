import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { AddUserPage } from "./pages/AddUserPage";
import { UsersPage } from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "add-user", element: <AddUserPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
