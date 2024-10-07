import NavbarWithSimpleLinks from '../components/navbar';
import Footer from '../components/footer';
import advanceWebsiteImg from '../assets/advance-website-development.png';
import advanceFrontendImg from '../assets/advance-frontend-engineering.png';
import advanceGraphicImg from '../assets/advance-graphic-designing.png';
import advanceDataScienceImg from '../assets/advance-data-science.png';
import advanceSocialMediaImg from '../assets/advance-social-media.png';
import { Link } from 'react-router-dom';

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
      <section className="courses-section mt-8">
        <div className="container mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`course-item flex px-4 md:px-0 ${index % 2 === 0 ? 'flex-col-reverse space-y-5 md:space-y-0  lg:flex-row-reverse' : 'flex-col md:flex-row  space-y-5 md:space-y-0'} items-center mb-10`}
            >
              <div className="course-image w-full lg:w-1/2 h-full pt-3 md:pt-0">
                <img 
                  src={course.image} 
                  alt={course.alt} 
                  className="max-w-full h-90 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className={`course-description w-full lg:w-1/2 text-left px-5 lg:px-10 h-full flex flex-col justify-center bg-tea-100 relative overflow-hidden`}>
                <div className="absolute inset-0 -z-10 w-full h-full bg-tea-100 transform -skew-y-3"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold pb-3 leading-tight text-gray-800 relative z-10">
                  {course.title}
                </h2>
                <p className="text-justify text-gray-700 text-lg md:text-xl mb-4 relative z-10">
                  {course.description}
                </p>
                <Link to='/apply'>
                  <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-tahiti transition duration-300 relative z-10">
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
