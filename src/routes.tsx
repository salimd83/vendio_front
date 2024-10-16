import { Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./layout/Layout";
// import AuthCallbackPage from "./pages/AuthCallbackPage";

export default [
  {
    path: "/",
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
