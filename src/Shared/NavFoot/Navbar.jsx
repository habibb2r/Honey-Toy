import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=>{
            localStorage.removeItem('isUserSignedIn');
            let timerInterval
            Swal.fire({
            title: 'Wait Few Seconds',
            html: 'Progressing... <b></b>',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('Progressed')
            }
            })
        })
        .catch((error) => console.log(error));
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>Home</Link></li>
            <li><NavLink to="/alltoy">All Toys</NavLink></li>
            <li><NavLink to='/mytoy'>My Toys</NavLink></li>
            <li><NavLink to="/addtoy">Add Toys</NavLink></li>
            <li><NavLink to='/blog'>Blogs</NavLink></li>
            <li>
            {
                user? <span className="">
                    <NavLink to='/'><button onClick={handleLogOut} className="btn bg-[#8B29BD] text-white">Log Out</button></NavLink>
                    </span> : <NavLink to='/login'><button className="btn bg-[#8B29BD] text-white">Log In</button></NavLink>
            }
            
        </li>
      
        </ul>
    </div>
    
    <img src="https://i.ibb.co/M8pm3JY/editedlogo.png" className="h-[100px]" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link>Home</Link></li>
            <li><NavLink to="/alltoy">All Toys</NavLink></li>
            <li><NavLink to='/mytoy'>My Toys</NavLink></li>
            <li><NavLink to="/addtoy">Add Toys</NavLink></li>
            <li><NavLink to='/blog'>Blogs</NavLink></li>
            
            
            </ul>
        </div>
        <div className="navbar-end">
            {
                user? <span className="flex justify-center align-middle items-center gap-3">
                    <p className="hidden lg:text-[#8B29BD] font-semibold lg:flex  sm:text-[#8B29BD] sm:font-semibold sm:hidden">{user.displayName}</p>
                    <img className="h-[50px] rounded-3xl" src={user.photoURL} alt="" />
                    <NavLink to='/'><button onClick={handleLogOut} className="btn bg-[#8B29BD] text-white hidden lg:flex sm:hidden">Log Out</button></NavLink>
                    </span> : <NavLink to='/login'><button className="btn bg-[#8B29BD] text-white">Log In</button></NavLink>
            }
            
        </div>
        </div>
        
    );
};

export default Navbar;