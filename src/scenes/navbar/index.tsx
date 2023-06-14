import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className={`flexbetween fixed top-0 z-30 w-full py-6`}>
        <div className={`flexbetween mx-auto w-5/6`}>
          <div className={`flexbetween w-full gap-16`}>
            {/* LEFT SIDE */}
            {/* <img src="" alt="logo" /> */}
            <p>LOGO</p>

            {/* RIGHT SIDE */}
            <div className={`flexbetween w-full`}>
              <div className={`flexbetween gap-8`}>
                <p>Home</p>
                <p>About</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div className={`flexbetween gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
