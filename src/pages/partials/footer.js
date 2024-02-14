import './footer.css';
import {Outlet, Link} from 'react-router-dom';

function Footer(){
    return <div className= "footer">
        < div className="topics">
            <div className="footer-box-1">
                <h1>S. S. P. S</h1>
            </div>
            <div className="footer-box-2">
                <h3>Contacts</h3><br></br>
                <h6>01-5186329</h6><br></br>
                <h6>Chyasal, Lalitpur, Nepal</h6><br></br>
                <h6>
                <Link mailto="shiningstar207777@gmail.com" >shiningstar207777@gmail.com</Link></h6>
            </div>
            <div className="footer-box-3">
                <h3>Quick Links</h3><br></br>
                <h6><Link to={`/about`} className="Link">About</Link></h6><br></br>
                <h6>School</h6>
                <h6>Downloads</h6>
            </div>
            <div className="footer-box-4">
                <h3>Connect</h3><br></br>
                <h6>facebook</h6>
                <h6><Link to={`/contact`} className="Link">Message us</Link></h6>
            </div>
        </div>
</div>
}
export default Footer;