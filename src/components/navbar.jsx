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
      <Typography as="li" color="white" className="p-1 font-medium">
        {label}
      </Typography>
    </Link>
  );
}

// NavList component
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0  lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
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
    <Navbar className="bg-primary border-0 z-50 " fullWidth>
      <div className="container mx-auto flex items-center justify-between text-white">
     <Link to="/">
     <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            src={Logo}
            alt="Brand Logo"
            className="h-10"
          />
        </Typography>
     </Link>

        <div className="flex flex-row justify-between space-x-3 align-middle">
          <div className="hidden text-white lg:block">
            <NavList />
          </div>
          
          {/* Wrap Button inside Link for desktop */}
          <Link to="/apply">
            <Button className="hidden lg:inline-block bg-transparent border-[1px] border-white border-solid">
              Enroll Now
            </Button>
          </Link>
        </div>

        <IconButton
          size="sm"
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block text-white lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-transparent flex flex-col items-center justify-center py-2">
          <NavList />
          
          {/* Wrap Button inside Link for mobile */}
          <Link to="/apply">
            <Button className="mb-2" fullWidth>
              Enroll Now
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSimpleLinks;
