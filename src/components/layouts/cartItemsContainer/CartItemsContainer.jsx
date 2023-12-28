import React, {useContext} from "react";
import { CartContext } from '../../../App';
import CartItemCard from "../../cards/basketItems/CartItemCard";

const CartItemsContainer = () => {
    const { cartItems } = useContext(CartContext);
  return (
    <div>
          {/* <h2>Cart</h2> */}

{cartItems.map((item) => (
    <CartItemCard key={item.id} bookData={item} />
))}

    </div>
  )
}

export default CartItemsContainer