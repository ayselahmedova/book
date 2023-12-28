import React,{useEffect} from 'react';
import Navbar from '../../components/layouts/navbar/Navbar';
import DetailsSection from '../../components/layouts/detailsSection/DetailsSection';
import Footer from '../../components/layouts/footer/Footer';

const BookDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <section>
      <Navbar darkTheme={true}/>
      <DetailsSection/>
      <Footer/>
    </section>
  )
}

export default BookDetails