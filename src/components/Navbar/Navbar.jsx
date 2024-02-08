import './Navbar.css'
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="tn-container container">
          <a href="" className="logo">Non lo so</a>
          <div className="search-box">
            <input type="search" name="search" id="" placeholder='Search'/>
            <div className='search-icon'><FaSearch /></div>
          </div>
          <div className="tn-icons">
            <a href=""><FaUser /></a>
            <a className='fav-icon' href=""><FaHeart /><span className='count'>0</span></a>
            <a className='cart-icon' href=""><TiShoppingCart /><span className='count'>0</span></a>
          </div>
        </div>
        <hr />
        <div className="tn-container container d-flex align-items-center justify-content-center">
          <ul className='navlist'>
            <li><a href="#home">home</a></li>
            <li><a href="#categories">categories</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><a href="#contact">contact</a></li>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar