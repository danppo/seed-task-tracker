import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import "./App.scss";

import Dashboard from "./pages/dashboard";

import Form from "./components/form";
import Register from "./components/register";
import Login from "./components/login";
import AuthedRoutes from "./routes/authedRoutes";
import MenuBar from "./components/menuBar";
import AboutContent from "./components/aboutContent";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <MenuBar />
        <Outlet />
        {/* <MenuBar /> */}
      </div>
    );
  };

  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
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
      </Routes>
    </div>
  );
};

// TODO: move components out from app file
const Home = () => {
  return (
    <Container maxWidth="md">
      <Form />
    </Container>
  );
};

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

export default App;
