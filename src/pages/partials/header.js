import logo from '../../images/logo.jpeg'
import './header.css';
import '../About';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);

function Header(){
    return <div className= "header">
            
        <div className ="nav">
   
            <div className ="logo-ice" >
            <img src={logo} alt="aa"/></div>

            <h1>Shining Star Preschool & Day Care</h1>

            <div className="nav-menu">Home</div>
            <div className="nav-menu"><a href="./About">About</a></div>
            <div className="nav-menu">Academic</div>
            <div className="nav-menu">Admission</div>
            <div className="nav-menu">Contacts</div>
</div>
</div>

}

export default Header;