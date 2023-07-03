import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
    const {signin, googleSignin} = useContext(AuthContext);


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogle = () =>{
        googleSignin()
        .then((result)=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            localStorage.setItem("isUserSignedIn", true);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Welcome ${user.displayName}`,
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch((error) => console.error(error));
    }

    const handlelogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);

        signin(email, password)
        .then(result => {
            form.reset();
            const user= result.user;
            console.log(user);
            navigate(from, { replace: true });
            localStorage.setItem("isUserSignedIn", true);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Welcome ${user.displayName}`,
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="text-center">
            <Helmet>
                <title>Honey Toy | Log In</title>
            </Helmet>
        <form onSubmit={handlelogin}>
            <div className="flex justify-center flex-col gap-5 items-center bg-[#DBBBE9] sm:mx-[30%] mx-[10%] rounded-2xl py-3">
            <div className="form-control text-center">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="text" name='email' placeholder="Enter Email" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="input-group">
                    <span>Pass</span>
                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
            <input className="btn btn-block bg-[#A32EDF]" type="submit" value="Login" />
            </div>
            <p>Dont Have any Account? <Link to='/signup' className="text-[#A32EDF] font-semibold">Register Here</Link></p>
        </div>
        </form>
        <div>
            <progress className="progress w-56 text-[#9b17dd]"></progress>
        </div>

        <div className="m-5">
        <button onClick={handleGoogle} className="btn btn-circle bg-white text-[#9b17dd] hover:bg-[#DCD1E1]">
            <FaGoogle></FaGoogle>
        </button>
        
        </div>
        </div>
        
    );
};

export default Login;