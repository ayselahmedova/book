import React, { useContext } from 'react';
import navbar from './navbar.module.scss';
import logo from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import { signOut,getAuth } from 'firebase/auth';
import basket from "../../../assets/cart1.png";

const Navbar = ({ darkTheme, darkText }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignOut = async () => {
    try {
      // Perform signout
      // Note: Make sure 'auth' is initialized correctly in your firebase.js file
      await signOut(auth);
      console.log('User signed out successfully');
      
      // Redirect to the home page or any other desired page after signout
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <section className={`${navbar.navbar_container} ${darkTheme ? 'background_dark relative' : 'background_transparent'}`}>
      <div className={navbar.container}>
        <a href="#home" className={navbar.logo}><img src={logo} alt="logo" />HappyReader </a>
        <nav className={navbar.nav_links_container}>
          <Link to="/" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Home</Link>
          <Link to="/books" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>Books</Link>
          {user ? <>
            {user.displayName && <span className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`}>{user.displayName.toUpperCase()}</span>}
            <span className={`${navbar.button_link} ${navbar.nav_links} ${darkText && "nav_link_dark"}`} onClick={handleSignOut}>Sign Out</span>
            <Link to="/basket"> <img src={basket} alt="" className={navbar.basket} /> </Link>
          </> :
            <>
              <Link to="/login" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Login</Link>
              <Link to="/signup" className={`${navbar.nav_links} ${darkText && "nav_link_dark"}`} >Sign up</Link>
            </>
          }
        
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
