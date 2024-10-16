import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Layout from "./layouts/Layout";
// import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
        //   <Layout>
            <Homepage />
        //   </Layout>
        }
      />
      {/* <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<span>User Profile Page</span>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
