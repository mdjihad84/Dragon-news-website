import '@fortawesome/fontawesome-free/css/all.min.css';
import image from "../../assets/Images/Home/image.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar py-10 bg-gray-100">
      {/* Navbar start - logo and dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? 'bg-[#FF3811] text-white' : 'text-white'
                  } hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? 'bg-[#FF3811] text-white' : 'text-white'
                  } hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? 'bg-[#FF3811] text-white' : 'text-white'
                  } hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar center - links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase mr-[35vh] font-semibold text-lg text-[#444444]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar end - image and button visible on all screen sizes */}
      <div className="navbar-end flex gap-3 lg:gap-5 lg:w-[38%] ">
        <img className="w-[35px] h-[35px] md:w-[41px] md:h-[41px]" src={image} alt="Profile" />
        <button className="w-[100px] h-[40px] md:w-[140px] md:h-[44px] bg-[#403F3F] text-white rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
