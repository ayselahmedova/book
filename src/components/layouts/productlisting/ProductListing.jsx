import React from 'react'
import productListing from './productListing.module.scss'
import ProductListingCard from '../../cards/productListingCard/ProductListingCard.jsx';
import {BookData} from '../../../util/BookData';

const ProductListing = () => {
  return (
    <div className={productListing.product_listing_container}>
        <div className={productListing.container}>
            <h2>Here are some <span className='text-primary'>books</span> that you might like</h2>

            <div className={productListing.listing_container}>
              {BookData.slice(0,4).map((book) =>(
                <div key={book.id} >
                        <ProductListingCard bookData={book}/>
                </div>
                  
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default ProductListing