import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import VitalIcon from '../assets/VitalMotion.svg';

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-semibold"
      >
        <a href="#" className="flex items-center text-base drop-shadow-lg">
          Beranda
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-semibold"
      >
        <a href="#" className="flex items-center text-base drop-shadow-lg">
          Tentang
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-semibold"
      >
        <a href="#" className="flex items-center text-base drop-shadow-lg">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-semibold"
      >
        <a href="#" className="flex items-center text-base drop--lg">
          Data
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-semibold"
      >
        <a href="#" className="flex items-center text-base drop-shadow-lg">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="border-none bg-transparent fixed lg:sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <img className="drop-shadow-lg w-[50px]" src={VitalIcon} alt="" />
          <Typography className="mr-4 cursor-default py-1.5 poppins-bold text-xl text-lune-blue drop-shadow-lg">
            Vital<span className="text-gr-blue">Motion</span>
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="rounded-none p-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-lune-blue active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
