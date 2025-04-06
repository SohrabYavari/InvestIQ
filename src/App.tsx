import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="container w-full flex flex-col items-center justify-center gap-y-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
