import React,{useContext} from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import { CartContext } from "../../App";

import Footer from "../../components/layouts/footer/Footer";
import CartItemsContainer from "../../components/layouts/cartItemsContainer/CartItemsContainer";

const CartPage = () => {
    const {cartItems,setCartItemEmpty } = useContext(CartContext);
   

    return (
        <section>
            <Navbar darkTheme={ true } />
            
            <CartItemsContainer />
            {cartItems.length>0&& <button className="primary-button apply-card" onClick={setCartItemEmpty} >Apply Card</button>}

            {/* <Footer /> */}
        </section>
    )
}

export default CartPage;