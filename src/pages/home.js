import './home.css'
import Footer from './partials/footer';
import { Link } from 'react-router-dom';
import Header from './partials/header'
function Home(){
    return <div className="Home">
        <Header></Header>
        <div className="Homepage">
        <div className="home-background">
        <div className="welcome-message">
            <p>Welcome TO</p> <div className="SSPS"> Shining Star Pre-School & Day-Care</div>
            <div className="Admission-home"><Link to={`/admission`} className="Link">Admission</Link></div>
        </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
}
export default Home;