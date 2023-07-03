import { Outlet } from "react-router-dom";
import Navbar from "../Shared/NavFoot/Navbar";
import Footer from "../Shared/NavFoot/Footer";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

const Main = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Honey Toy | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;