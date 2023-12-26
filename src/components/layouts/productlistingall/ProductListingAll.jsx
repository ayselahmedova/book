import React from 'react';
import ProductListingCard from '../../cards/productListingCard/ProductListingCard';
import productlistingall from './productListingAll.module.scss';
import { BookData } from '../../../util/BookData';

const ProductListingAll = () => {

  return (
    <section className={productlistingall.product_listing_all_container}>
        <div className={productlistingall.container}>
            <div className={productlistingall.grid_container}>
                    {BookData.map((book) => {
                        return (
                            <div key={book.id} className={productlistingall.grid_item}>
                                <ProductListingCard bookData={book} />
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
  )
}

export default ProductListingAll