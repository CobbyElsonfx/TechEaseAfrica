import NavbarWithSimpleLinks from '../components/secondNav';
import Footer from '../components/footer';
import advanceWebsiteImg from '../assets/advance-website-development.png';
import advanceFrontendImg from '../assets/advance-frontend-engineering.png';
import advanceGraphicImg from '../assets/advance-graphic-designing.png';
import advanceDataScienceImg from '../assets/advance-data-science.png';
import advanceSocialMediaImg from '../assets/advance-social-media.png';
import { Link } from 'react-router-dom';

// Course data
const courses = [
  {
    title: "Advance Website Development",
    description: "Website development using HTML, CSS, and WordPress involves building the structure of a site with HTML, styling it with CSS for design and layout, and utilizing WordPress as a content management system to easily manage and customize the site without extensive coding.",
    image: advanceWebsiteImg,
    alt: "Advance Website Development",
  },
  {
    title: "Advance Frontend Engineering",
    description: "Frontend engineering involves creating the user interface of a website or application using HTML for structure, CSS for styling and layout, and JavaScript for interactivity, ensuring a seamless and responsive user experience across different devices and browsers.",
    image: advanceFrontendImg,
    alt: "Advance Frontend Engineering",
  },
  {
    title: "Advance Graphic Designing",
    description: "Graphic design involves creating visual content using typography, images, and colors to communicate messages effectively through various mediums, such as print, digital, and social media, while focusing on aesthetics, branding, and user engagement.",
    image: advanceGraphicImg,
    alt: "Advance Graphic Designing",
  },
  {
    title: "Advance Data Science & Analytics",
    description: "Data science and analytics involve collecting, processing, and analyzing large datasets using statistical methods, algorithms, and tools to extract insights, identify patterns, and support data-driven decision-making for businesses and organizations.",
    image: advanceDataScienceImg,
    alt: "Advance Data Science & Analytics",
  },
  {
    title: "Advance Social Media Marketing",
    description: "Social media marketing and advertisement involve creating and promoting content on platforms like Facebook, Instagram, and Twitter to engage audiences, build brand awareness, and drive conversions, using targeted ads and strategies to reach specific demographics and maximize ROI.",
    image: advanceSocialMediaImg,
    alt: "Advance Social Media Marketing",
  },
];

function CoursesSection() {
  return (
    <>
      <NavbarWithSimpleLinks />
      
      {/* Course Section Header */}
      <section className="courses-header bg-gradient-to-b from-gray-50 to-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-tea-800 mb-4">Our Advanced Courses</h1>
          <p className="text-gray-600 text-lg">
            Empower yourself with cutting-edge skills in technology, design, and marketing.
          </p>
        </div>
      </section>
      
      {/* Course Cards Section */}
      <section className="courses-section bg-gray-50 py-10">
        <div className="container mx-auto grid gap-10">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`course-item flex flex-col md:flex-row items-center rounded-lg shadow-lg overflow-hidden bg-white ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Course Image */}
              <div className="course-image w-full md:w-1/2">
                <img 
                  src={course.image} 
                  alt={course.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Course Description */}
              <div className="course-description w-full md:w-1/2 p-8 bg-white flex flex-col justify-between">
                <h2 className="text-3xl font-bold text-tea-800 mb-4">{course.title}</h2>
                <p className="text-gray-700 mb-6">{course.description}</p>
                
                {/* Course Info */}
                <div className="info-box bg-tea-100 p-4 rounded-md border border-tea-300 mb-6">
                  <p className="text-tea-600 font-semibold text-center">
                    <span className="block">100% Tuition Free</span>
                    <span className="block">Duration: 3 Months</span>
                    <span className="block">Schedule: Weekends Only</span>
                  </p>
                </div>
                
                {/* Enroll Button */}
                <Link to="/apply">
                  <button className="bg-tea-600 text-white px-5 py-2 rounded-md hover:bg-tea-700 transition duration-300">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CoursesSection;
