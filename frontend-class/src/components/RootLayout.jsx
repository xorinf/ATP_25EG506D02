import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-400">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
