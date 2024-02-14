import Footer from "./partials/footer";
import Header from "./partials/header";
import logo from "../images/logo.jpeg";
import admission from "../images/admission.jpeg";
import './admission.css';
function Admission(){
    return <div ClassName="admission">
        <Header></Header>
        <div className="admission-image" ><img src={admission} alt="aa"/></div>
        <div className="Welcome-message">
            Are You Ready to join Shining Star Family??
            <div className="Admission-Form"><h1> Admission Form </h1></div>
        </div>
         <form>
            <div className="form-Header">
            <div className ="logo-ice" >
            <img src={logo} alt="aa"/></div>
            <div className="School-des">
            <h1>Shining Star Pre School And Day Care</h1>
            <h5>Chyasal, Lalitpur<br></br>
            01-5186329</h5>
            </div>
            </div>
            <div className="Admission-Form"><h1> Admission Form </h1></div>
           <h1>Student's Information</h1>
            <lable htmlFor="studentsname"> Name</lable>
            <input type="text" id="studentsname" name="studentsname"/><br></br>
            <lable htmlFor="address">Address</lable>
            <input type="text" id="address" name="address"/><br></br>
            <lable htmlFor="dob">Date Of Birth</lable>
            <input type="date" id="dob" name="dob"/><br></br>
            <lable htmlFor="daycare">Daycare</lable>
            <input type="checkbox" id="daycare" name="daycare"/>
            <lable htmlFor="nursery">Nursery</lable>
            <input type="checkbox" id="nursery" name="nursery"/>
            <lable htmlFor="L.K.G">L.K.G</lable>
            <input type="checkbox" id="L.K.G" name="L.K.G"/>
            <lable htmlFor="U.K.G">U.K.G</lable>
            <input type="checkbox" id="U.K.G" name="U.K.G"/>
            <h1>Parent's Information</h1>
            <lable htmlFor="name"> Father's Name</lable>
            <input type="text" id="fathersname" name="fathersname"/><br></br>
            <lable htmlFor="email"> Email</lable>
            <input type="email" id="fathers-email" name="email"/><br></br>
            <lable htmlFor="phone"> Phone</lable>
            <input type="text" id="fathersphone" name="phone"/>
            <lable htmlFor="occupation"> Occupation</lable>
            <input type="text" id="foccupation" name="occupation"/><br></br>
            <lable htmlFor="name"> Mother's Name</lable>
            <input type="text" id="mothersname" name="mothersname"/><br></br>
            <lable htmlFor="email"> Email</lable>
            <input type="email" id="mother's-email" name="email"/><br></br>
            <lable htmlFor="phone"> Mobile</lable>
            <input type="text" id="mothersphone" name="phone"/>
            <lable htmlFor="occupation"> Occupation</lable>
            <input type="text" id="moccupation" name="occupation"/>
            <h1>Guardian's Information</h1>
            <lable htmlFor="name"> Guardian's Name</lable>
            <input type="text" id="guardiansname" name="guardiansname"/><br></br>
            <lable htmlFor="email"> Email</lable>
            <input type="email" id="guardian's-email" name="email"/><br></br>
            <lable htmlFor="phone"> Mobile</lable>
            <input type="text" id="guardiansphone" name="phone"/><br></br>
            <lable htmlFor="occupation"> Occupation</lable>
            <input type="text" id="goccupation" name="occupation"/><br></br>
         
        <h3>We Provide food from School</h3>
        <lable htmlFor="vegan">Vegan</lable>
            <input type="checkbox" id="vegan" name="vegan"/>
            <lable htmlFor="veg">Vegtarian</lable>
            <input type="checkbox" id="veg" name="veg"/>
            <lable htmlFor="nonveg">Non-Vegtarian</lable>
            <input type="checkbox" id="nonveg" name="nonveg"/>
         <h6>Does your child have any allergy?</h6>
         <lable htmlFor="yes">Yes</lable>
            <input type="checkbox" id="yes" name="yes"/>
            <lable htmlFor="no">No</lable>
            <input type="checkbox" id="no" name="no"/>
            <h6>If Yes? Specify</h6><input type="text" id="allergy"/>
            <h6>If there is anything that we need to know about the child then please: </h6><input type="text" id="information"/>
            
           <botton id="submit-botton">Submit</botton>
         </form>
        <Footer></Footer>
    </div>
}
export default Admission;