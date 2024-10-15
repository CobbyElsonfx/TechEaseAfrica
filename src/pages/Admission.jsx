import Footer from "../components/footer"
import NavbarWithSimpleLinks from "../components/secondNav"
import AdmissionInfo from "../components/Home/admission"
import Hero from "../components/Admission/hero"

function Admission() {
  return (
    <>
     <NavbarWithSimpleLinks/>
     <Hero/>
     
        <AdmissionInfo/>
    <Footer/>
    </>
   
  )
}

export default Admission