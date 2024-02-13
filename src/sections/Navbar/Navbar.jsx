import './Navbar.css'
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menuOpened, setMenuOpened] = useState(false)

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
            <li><Link to={'/'}>home</Link></li>
            <li><a href="#categories">categories</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><Link to={'/contac'}>contact</Link></li>
          </ul>
        </div>
        <div className='nm-nav'>
          <div className="nm-container container">
            <a href="" className="logo">Non lo so</a>
            <ul className='nav-menu' style={{ transform: menuOpened && "translate(0%)"}}>
            <li><a href="#home">home</a></li>
            <li><a href="#categories">categories</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <div className='menu-btn'>
            {!menuOpened ?
              <RiMenu3Fill size={30} onClick={() =>  setMenuOpened(true)}/> :
              <RiCloseFill size={30} onClick={() =>  setMenuOpened(false)}/>
              }
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar