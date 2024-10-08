const courses = [
  {
    id: 1,
    title: "Advance Website Development",
    
    description: "Website development using HTML, CSS, and WordPress involves building the structure of a site with HTML, styling it with CSS for design and layout, and utilizing WordPress as a content management system to easily manage and customize the site without extensive coding."
  },
  { id: 2, 
    title: "Advance Frontend Engineering",
    description: "Frontend engineering involves creating the user interface of a website or application using HTML for structure, CSS for styling and layout, and JavaScript for interactivity, ensuring a seamless and responsive user experience across different devices and browsers." },
  { id: 3, 
    title: "Advance Graphic Designing",
    description: "Graphic design involves creating visual content using typography, images, and colors to communicate messages effectively through various mediums, such as print, digital, and social media, while focusing on aesthetics, branding, and user engagement." },
  { id: 4, title:"Advance Data Science & Analytics",
    description: "Data science and analytics involve collecting, processing, and analyzing large datasets using statistical methods, algorithms, and tools to extract insights, identify patterns, and support data-driven decision-making for businesses and organizations." },
  { id: 5, title: "Advance Social Media Marketing",
    description: "Social media marketing and advertisement involve creating and promoting content on platforms like Facebook, Instagram, and Twitter to engage audiences, build brand awareness, and drive conversions, using targeted ads and strategies to reach specific demographics and maximize ROI." },
];

const secondaryCoursesFromdb = [
  { 
    id: 1, 
    title: "Introduction to Blogging", 
    description: "This course covers the essentials of starting and maintaining a successful blog. Students will learn how to choose a niche, create engaging content, use SEO strategies, and monetize their blogs to reach a larger audience."
  },
  { 
    id: 2, 
    title: "Introduction to Computing", 
    description: "This course introduces students to the fundamentals of computing. Topics include understanding computer hardware and software, basic programming concepts, operating systems, and the impact of computing in today's digital world."
  },
  { 
    id: 3, 
    title: "Introduction to C++", 
    description: "In this course, students will be introduced to the C++ programming language. The course covers key concepts like data types, control structures, functions, and object-oriented programming to build a strong foundation for coding in C++."
  },
  { 
    id: 4, 
    title: "Introduction to UI/UX Design", 
    description: "This course explores the principles of User Interface (UI) and User Experience (UX) design. Students will learn how to create intuitive and aesthetically pleasing interfaces by focusing on user needs, design patterns, and prototyping tools."
  },
  { 
    id: 5, 
    title: "Introduction to Database Management", 
    description: "This course provides an introduction to database systems and management. Students will learn about database design, SQL, data modeling, and how to use database management systems (DBMS) to organize, store, and retrieve data efficiently."
  }
];



export { secondaryCoursesFromdb, courses } 