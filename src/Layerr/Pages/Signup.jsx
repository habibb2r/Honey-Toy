import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";


const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl.value;
        const user ={name, email, password, photourl};
        console.log(user);

        createUser(email, password)
        .then((result) =>{
            updateProfile(result.user, {
                displayName: name, photoURL: photourl
              }).then(() => {
               
                console.log(result.user)
                form.reset();
                toast.success(`Welcome.. ${result.user.displayName}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                
            
              }).catch((error) => {
                    console.log(error)
              });
        })
        .then(error => console.log(error))
    };
    return (
        <div className="text-center my-3">
            <Helmet>
                <title>Honey Toy | Sign Up</title>
            </Helmet>
            <div>
                <form onSubmit={handleSignUp} className="py-4 flex justify-center flex-col gap-5 items-center bg-[#DBBBE9] sm:mx-[30%] mx-[10%] rounded-2xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter a Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" name="email" placeholder="Enter a Email" className="input input-bordered" />
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter a strong password</span>
                    </label>
                    <label className="input-group">
                        <span>Pass</span>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter your PhotoURL</span>
                    </label>
                    <label className="input-group">
                        <span>URL</span>
                        <input type="text" name="photourl" placeholder="Enter Photo your URL" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="mt-3 mb-3">
                        <input className="btn btn-block bg-[#840ABB] hover:bg-[#3B9B9D]" type="submit" value="Sign Up" />
                        <p className="mt-2">Already have an account? <Link to='/login' className="text-[#840ABB] font-semibold">Log in</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;