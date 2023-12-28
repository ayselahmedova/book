import React from 'react';
import { Link } from 'react-router-dom';
import './searchresultcard.styles.css';

const SearchResultCard = ({ bookData }) => {
    return (
        <section className="cart-item-main">
            <div className="cart-item-img-container">
                <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{bookData.book_name}</h2>
                <p>{bookData.author_name}</p>
                
                <Link to={`/book-details/${bookData.id}`} className="primary_button">Product Details</Link>
            </div>
        </section>
    )
}

export default SearchResultCard;