import PrimaryCourses from "../primaryCourses"
import SecondaryCourses from "../secondaryCourses"

function programs() {
  return (
    <div className="bg-secondary min-h-48">
        <div className="container mx-auto py-3">
        <h3 className="lg:text-3xl md:text-3xl text-2xl mx-auto text-center mb-4 font-semibold mt-5">Programs</h3>
        <div> 
        <PrimaryCourses/>

        </div>
       

        </div>
        <div className="container mx-auto py-3">
        <h3 className="lg:text-3xl md:text-3xl text-2xl mx-auto text-center mb-4 font-semibold mt-5">Introductory Programs</h3>
        <div>
        <SecondaryCourses/>

        </div>

        </div>
    
    
        
    </div>
  )
}

export default programs