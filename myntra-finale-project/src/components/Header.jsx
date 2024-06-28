import { IoPersonAdd } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";


const Header = () => {
  const bag = useSelector((store) => store.bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Home & Living</Link>
          <Link to="/">Beauty</Link>
          <a href="/">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="search_icon">
            <IoMdSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonAdd />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container bag-css" to="/bag">
            <FaBagShopping />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
