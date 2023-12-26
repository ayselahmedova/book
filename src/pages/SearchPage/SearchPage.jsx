import React , {useState,useEffect} from 'react'
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import searchPage from './searchPage.module.scss';
import {useLocation} from 'react-router-dom' ;
import {BookData} from '../../util/BookData';
import SearchResultCard from '../../components/cards/searchResultCard/SearchResultCard';

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    let searchvalue =[];

    searchvalue= BookData.filter((data)=>data.book_name.toLowerCase().includes(location.state));
    
    setSearchResult(searchvalue);

  },[]);

  return (
  <section>
        <Navbar darkTheme={true}/>

        <div className= {searchPage.search_result_container}>
            <div className={searchPage.container}>
                <h2>Your Search Result</h2>

                {searchResult.map((result) => (
                  <SearchResultCard key={result.id} bookData={result} />
                ))}   
            </div>
        </div>

                 

        <Footer/>
    </section>

  )
}

export default SearchPage