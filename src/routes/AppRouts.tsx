import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";






import Contact from "../pages/Contact";
import Services from "../pages/services/services";
import ProjectDetails from "../pages/Projects/Project_details";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
