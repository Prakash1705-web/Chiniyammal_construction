import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import FloatingAction from "../components/FloatingAction";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <FloatingAction />

      <Footer />

    </div>
  );
};

export default MainLayout;