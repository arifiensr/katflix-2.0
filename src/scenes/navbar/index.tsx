import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {/* <img src="" alt="logo" /> */}
            <p>LOGO</p>

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-xs`}>
                <p>Home</p>
                <p>About</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div className={`${flexBetween} gap-8 text-xs`}>
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
