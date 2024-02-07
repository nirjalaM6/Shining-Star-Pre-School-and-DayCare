import './home.css'
import About from "./About"
import Academic from "./academic"
import Contact from "./contact"
function Home(){
    return <div className="Homepage">
        <div className="home-background">
        <div className="welcome-message">
            <p>Welcome TO</p> <div className="SSPS"> Shining Star Pre-School & Day-Care</div>
            <div className="Admission-home">Admission</div>
        </div>
        </div>
          <About></About>
          <Academic></Academic>
          <Contact></Contact>
    </div>
}
export default Home;