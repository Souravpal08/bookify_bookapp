import React, {useState,} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart,FaHeart } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";


const navigationItems=[
  {name:"Dashboard", href:"/"},
  {name:"Orders", href:"/orders"},
  {name:"Cart Page", href:"/cart"},
  {name:"Checkout", href:"/checkout"},
]


const Navbar = () => {
  const [liked, setLiked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const  cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);

  const {currentUser, logout} = useAuth();

  const handleLogout = () => {
    logout();
  }


  

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <header className="max-w-screen-3xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center mx-3 ">
        <div className="flex items-center md:gap-16 gap-4 ">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="w-16 mx-16 h-auto rounded-lg  hover:scale-105"
            />
          </Link>
          {/* Search option*/}
          <div className=" relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className=" rounded-lg md:px-8 px-6 bg-[#F5F5F5]  w-full py-1 focus:outline-none "
            />
          </div>
        </div>

        <div className="relative flex items-center md:space-x-4 space-x-3 mx-14">
          <div>
            {currentUser ? <>
              <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)} >
                <img src={avatar} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-red-600': ''} `} />
              </button>
              {/* Dropdown */}
              {
                isDropdownOpen && <div className="absolute top-14 right-16 bg-white shadow-lg rounded-md p-2">
                  <ul>
                    {navigationItems.map((item) => (
                      <li key={item.name} onClick={()=> setIsDropdownOpen(false)} className="py-2">
                        <Link to={item.href} className="hover:text-primary hover:bg-gray-100 px-4 py-2">{item.name}</Link>
                      </li>
                    ))
                    }
                    <li onClick={handleLogout} className="py-2">
                      <button className="hover:text-black-500 hover:bg-primary block w-full px-4 py-2 text-left">Logout</button>
                    </li>
                  </ul>
                </div>
              }
            </> :<Link to="/login"><AiOutlineUser className="size-6" /></Link> }
          </div>

          <button  onClick={handleLike} className= "hidden sm:block text-xl transition-colors duration-200 ">{
        liked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )
      }
            
            
          </button>
          

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-5 py-1 flex items-center rounded-lg hover:bg-[#AF1740] transition transform active:scale-105 "
          >
            <LuShoppingCart className="size-6" />
            {
              cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :
              <span className="text-sm font-semibold sm:ml-1">0</span>

            }
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
