import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigator = useNavigate()
 const  removedetails = () => {
    localStorage.removeItem("jwtToken");
    navigator('/login')
    
  }
  
  return (
    <nav className="navbar">
      <div className="top-strip">
      <div className="logo-container">
        <h1 className="logo">BookUsNow</h1>
        <p>
          <FaMapMarkerAlt /> Mumbai,India <MdChevronRight />
        </p>
      </div>
      <div className="categories-container">
        
        <div className="search-bar">
          <button className="categories">☰ Categories</button>
          <input type="text" placeholder="Search events,venues" />
        </div>
        <ul>
          <li>Lives Shows</li>
          <li>Strems</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>

      <div className="links">
        <button className="favorite">
          <MdOutlineFavorite className="icon" />
          Favorite
        </button>
          <button className="logout" onClick={removedetails}>Logout</button>
      </div>
      <div className="mobile-icons">
         <IoIosSearch className="icon" />
        <MdOutlineFavorite className="icon" />
        <button onClick={removedetails}><FaUser className="icon" /></button>
      </div></div>
      <ul>
          <li>LivesShows</li>
          <li>Strems</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
    </nav>
  );
};

export default Navbar;
