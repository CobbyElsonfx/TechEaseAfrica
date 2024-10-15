import React from "react";
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

// NavItem component
function NavItem({ label, to }) {
  return (
    <Link to={to}>
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium text-white transition duration-300 hover:text-teal-100 cursor-pointer"
      >
        {label}
      </Typography>
    </Link>
  );
}

// NavList component
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem to="/" label="Home" />
      <NavItem to="/programs" label="Programs" />
      <NavItem to="/admission" label="Admission" />
      <NavItem to="/about-us" label="About Us" />
    </ul>
  );
}

export function NavbarWithSimpleLinks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar className="bg-primary border-0 z-50 backdrop-blur-sm sticky top-0" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-white py-2">
        <Link to="/">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={Logo} alt="Brand Logo" className="h-10 transition-transform duration-300 hover:scale-105" />
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex flex-row justify-between space-x-3 align-middle">
          <div className="hidden lg:block">
            <NavList />
          </div>
          
          {/* Enroll Now Button for Desktop */}
          <Link to="/apply">
            <Button className="hidden lg:inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-400 transition duration-300 shadow-lg">
              Enroll Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          size="sm"
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation Menu */}
      <Collapse open={open}>
        <div className="mt-2 flex flex-col items-center justify-center py-4 bg-primary shadow-lg rounded-lg lg:hidden">
          <NavList />
          {/* Enroll Now Button for Mobile */}
          <Link to="/apply">
            <Button className="mt-4 bg-teal-500 text-white px-5 py-2 rounded-lg w-48 hover:bg-teal-800 transition duration-300 shadow-lg">
              Enroll Now
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSimpleLinks;
