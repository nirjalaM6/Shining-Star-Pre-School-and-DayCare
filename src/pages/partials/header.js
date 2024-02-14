import logo from '../../images/logo.jpeg'
import './header.css';
import '../About';
import { createRoot } from "react-dom/client";
import { Outlet, Link } from "react-router-dom";


function Header(){
    return <div className= "header">
            
        <div className ="nav">
   
            <div className ="logo-ice" >
            <img src={logo} alt="aa"/></div>

            <h1>Shining Star Preschool & Day Care</h1>

            <div className="nav-menu"><Link to={`/`} className="Link">Home</Link></div>
            <div className="nav-menu"><Link to={`/about`} className="Link">About</Link></div>
            <div className="nav-menu"><Link to={`/academic`} className="Link">Academic</Link></div>
            <div className="nav-menu"><Link to={`/admission`} className="Link">Admission</Link></div>
            <div className="nav-menu"><Link to={`/contact`} className="Link">Contacts</Link></div>
</div>
</div>

}

export default Header;