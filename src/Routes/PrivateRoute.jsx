import { useContext } from "react";
import { AuthContext } from "../Firebase/Provider/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location= useLocation();
    if (loading){
        <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return localStorage.getItem("isUserSignedIn")? <Outlet></Outlet> : <Navigate state={{from : location}} to='/login' replace></Navigate>
};

export default PrivateRoute;