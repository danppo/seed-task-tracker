import { Routes, Route, BrowserRouter } from "react-router-dom";
// import {  } from "react-router-dom";
import "./App.scss";

import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import New from "./pages/new";
import SignIn from "./pages/signIn";

import AuthedRoutes from "./routes/authedRoutes";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <RouteList /> */}
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
          <Route path="login" element={<SignIn />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
