import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";

import Form from "../components/form";
import Register from "../components/register";
import Login from "../components/login";
import AuthedRoutes from "../routes/authedRoutes";
import MenuBar from "../components/menuBar";
import AboutContent from "../components/aboutContent";

import Dashboard from "../pages/dashboard";
import Layout from "../pages/layout";
import Home from "../pages/home";

const RouteList = () => {

  // const Home = () => <Home />;
  
  const About = () => {
    return (
      <Container maxWidth="md">
        <Register />
        <Login />
        <AboutContent />
      </Container>
    );
  };
  
  const LoginPage = () => {
    return (
      <Container maxWidth="md">
        <Register />
        <Login />
      </Container>
    );
  };
  
  const New = () => {
    return (
      <div>
        <h2>New</h2>
      </div>
    );
  };
  
  const NoMatch = () => {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  };

  return (
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="dashboard"
        element={
          <AuthedRoutes>
            <Dashboard />
          </AuthedRoutes>
        }
      />
      <Route
        path="new"
        element={
          <AuthedRoutes>
            <New />
          </AuthedRoutes>
        }
      />
      <Route
        path="history"
        element={
          <AuthedRoutes>
            <Dashboard />
          </AuthedRoutes>
        }
      />
      <Route
        path="public"
        element={
          <AuthedRoutes>
            <Dashboard />
          </AuthedRoutes>
        }
      />
      <Route path="login" element={<LoginPage />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>

  );
}


export default RouteList;
