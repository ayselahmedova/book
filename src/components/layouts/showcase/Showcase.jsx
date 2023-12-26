import React from 'react'
import showcase from './showcase.module.scss'
import Navbar from '../navbar/Navbar'
import SearchInputForm from '../../forms/searchInputForm/SearchInputForm'

const Showcase = () => {
  return (
    <section className={showcase.showcase_container}>

        <Navbar darkTheme={false}/>

        <div className={showcase.overlay}></div>
        <div className={showcase.showcase_content}>
            <h1>Best <span className='text-primary'>Books</span> Available</h1>
            <p>Buy Quality books at cheaper price</p>

            <SearchInputForm darkTheme={false}/>
        </div>

    </section>
  )
}

export default Showcase