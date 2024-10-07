
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import {secondaryCoursesFromdb} from "../db/programs";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const SecondaryCourses = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Courses object


  return (
    <div className="space-y-2">
      {secondaryCoursesFromdb.map((course) => (
        <Accordion
          key={course.id}
          className="px-3"
          open={open === course.id}
          animate={CUSTOM_ANIMATION}
          icon={<Icon id={course.id} open={open} />}
        >
          <AccordionHeader
            className="bg-gray-300 p-3 text-lg md:text-xl rounded-md"
            onClick={() => handleOpen(course.id)}
          >
            {course.title}
          </AccordionHeader>
          <AccordionBody>{course.description}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default SecondaryCourses;
