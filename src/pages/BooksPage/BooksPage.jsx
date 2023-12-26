import React from 'react'
import Navbar from '../../components/layouts/navbar/Navbar'
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm'
import booksPage from './booksPage.module.scss';
import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll';
import Footer from '../../components/layouts/footer/Footer';
const BooksPage = () => {
  return (
    <section>
      <Navbar darkTheme={true}/>

      <div className={booksPage.search_container}>
        <h2>Find the <span className='text-primary'>Books</span>  that you want</h2>
        <SearchInputForm darkTheme = {false}/>
      </div>

      <ProductListingAll/>
      <Footer/>
    </section>
  )
}

export default BooksPage