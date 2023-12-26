import React,{useContext} from 'react'
import navbar from './navbar.module.scss'
import logo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
// import { UserContext } from '../../../App';
// import {ReactComponent as CartImg}  from '../../../assets/cartt.svg';
// import CartImg from '../../../assets/Cartt.jsx';
import basket from "../../../assets/cart1.png";

const Navbar = ({darkTheme, darkText}) => {
  
  // const user  =  useContext(UserContext);

  // const showLogoutAndCart = (
  //   <nav className={navbar.nav_links_container}>
  //               <Link to="/" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Home</Link>
  //               <Link to="/books" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Books</Link>
  //               <Link to="/login" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Login</Link>
  //               <Link to="/signup" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Sign up</Link>   
  //     </nav>
  // )
  // const showLoginAndSignUp = (
  //   <nav className={navbar.nav_links_container}>
  //               <Link to="/" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Home</Link>
  //               <Link to="/books" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Books</Link>
  //               <Link to="/" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Logout</Link>
  //               <Link><CartImg/></Link>
                  
  //     </nav>
  // )

  return (
    <section className={`${navbar.navbar_container} ${darkTheme ? 'background_dark relative' : 'background_transparent'}`}>
        <div className={navbar.container}>
            <a href="#home"  className={navbar.logo}><img src={logo} alt="logo" />HappyReader </a>

            {/* {user ? showLogoutAndCart : showLoginAndSignUp} */}
            <nav className={navbar.nav_links_container}>
                <Link to="/" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Home</Link>
                <Link to="/books" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Books</Link>
                <Link to="/login" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Login</Link>
                <Link to="/signup" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Sign up</Link> 
                <Link to ="/basket"> <img src={basket} alt="" className={navbar.basket}/> </Link>
                
      </nav>
        </div>
    </section>
  )
}

export default Navbar