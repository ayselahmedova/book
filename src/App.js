import React, {useState, useEffect, createContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import BookDetailsPage from './pages/BookDetailPage/BookDetails';
import SearchPage from './pages/SearchPage/SearchPage';
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignUpPage/SignUp';
import app from './firebase/firebase.js';
import Cartt from './assets/Cartt.jsx'
import {getAuth, onAuthStateChanged} from 'firebase/auth';
export const UserContext = createContext({});
export const CartContext = createContext([]);

const App = () =>  {

    const auth = getAuth(app);
    const [authendicatedUser, setAuthendicatedUser] = useState(null)
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() =>{
        onAuthStateChanged(auth, (user)=>{
            if (user){
                console.log(user)
                setAuthendicatedUser(user);
            }
            else{
                setAuthendicatedUser(null);
            }            
        })
    })

    useEffect(() =>{
        console.log(cartItems)
    },[cartItems])

    return (
        <UserContext.Provider value ={authendicatedUser}>
            <CartContext.Provider value ={cartItems}>
                <Routes>
                    <Route path= "/" element={<HomePage/>}/>
                    <Route path= "/books" element={<BooksPage/>}/>
                    <Route path= "/search" element={<SearchPage/>}/>
                    <Route path= "/book-details/:id" element={<BookDetailsPage/>}/>
                    <Route path= "/login" element={<Login/>}/>
                    <Route path= "/signup" element={<SignUp/>}/>
                    <Route path= "/basket" element={<Cartt/>}/>

                </Routes>
            
            </CartContext.Provider>
        </UserContext.Provider>
    )
}
export default App;