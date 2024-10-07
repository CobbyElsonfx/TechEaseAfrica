import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { secondaryCoursesFromdb } from "../db/programs";

const CUSTOM_ANIMATION = {
  mount: { scale: 1, opacity: 1 },
  unmount: { scale: 0.95, opacity: 0.8 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-6 w-6 transition-transform duration-300`}
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

  return (
    <div className="space-y-4">
      {secondaryCoursesFromdb.map((course) => (
        <Accordion
          key={course.id}
          className={`bg-white border border-gray-300 shadow-lg rounded-lg transition-all duration-300 ${
            open === course.id ? "shadow-xl" : ""
          }`}
          open={open === course.id}
          animate={CUSTOM_ANIMATION}
          icon={<Icon id={course.id} open={open} />}
        >
          <AccordionHeader
            className={`p-4 text-lg md:text-xl font-semibold text-gray-800 bg-gray-200 rounded-md transition-all duration-200 hover:bg-gray-300 ${
              open === course.id ? "bg-gray-300" : ""
            }`}
            onClick={() => handleOpen(course.id)}
          >
            {course.title}
          </AccordionHeader>
          <AccordionBody className="p-5 text-gray-600 leading-relaxed bg-gray-50 rounded-md">
            {course.description}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default SecondaryCourses;
