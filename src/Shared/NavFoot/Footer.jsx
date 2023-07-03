import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src="https://i.ibb.co/M8pm3JY/editedlogo.png" className="h-[100px]" alt="" />
                <p>Honey Toy Industries Ltd.<br/>Providing reliable tech since 2022</p>
            </div> 
            <div>
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Toy Selling</a> 
                <a className="link link-hover">Affordable Price</a> 
                <a className="link link-hover">Animal Toys</a> 
                <a className="link link-hover">Child Friendly</a>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">A E-commerce site</a> 
                <a className="link link-hover">Animal Toy SHop</a> 
               
            </div> 
            <div>
                <span className="footer-title">Account</span> 
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                
                
            </div>
        </footer>
    );
};

export default Footer;