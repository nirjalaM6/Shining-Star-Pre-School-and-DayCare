import {Carousel} from "react-responsive-carousel"
function Carousel()
const onClickItem=()=>{};
const onClickThumb=()=>{};
const onChange=()=>{};
import logo from '../images/logo.jpeg'
import mazin from '../images/mazin.jpeg'
return  <div className="home">
     
      <link rel="stylesheet" href="carousel.css"/>
      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src={logo} height="500px" width="600px" alt=""/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={mazin} height="500px" width="600px" alt=""/>
                <p className="legend">Legend 2</p>
            </div>
            
            
        </Carousel>
        </div>
