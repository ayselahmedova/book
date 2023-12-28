import React from 'react'
import productListingCard from './productListingCard.module.scss';
import {Link} from 'react-router-dom';
// import ProductImage from '../../../assets/bookImages/Sherlock-Holmes.jpg'

const ProductListingCard = ({bookData}) => {
//   console.log(bookData)
  return (
    <div className={productListingCard.product_listing_card}>
                    <div className={productListingCard.product_listing_img_container}>
                        <img src={bookData.book_url} alt="product_listing_image" />
                    </div>
                    <div className={productListingCard.product_listing_details_container}>
                        <h3>{bookData.book_name}</h3>
                        <h2>{bookData.author_name}</h2>
                        <p>$ {bookData.price}</p>
                        <div className={productListingCard.cart_btn_container}>
                            <Link to={`/book-details/${bookData.id}`} className={productListingCard.product_listing_button}>Show</Link>
                        </div>
                        
                    </div>
                </div>
  )
}

export default ProductListingCard