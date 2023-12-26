import React, {useState} from 'react'
import search from './searchinputform.module.scss';
import {useNavigate} from 'react-router-dom';


const SearchInputForm = ({darkTheme}) => {

  const [searchField,setSearchField] = useState('');
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setSearchField(e.target.value); 
  }

  const redirectToSearch = () =>{
    if(searchField === ''){
      alert('SearchField is Empty');
  } else{
      navigate('/search',{state:searchField});
  }
  }


  return (
    <div className={`${search.search_input_form_container} ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
        <input 
        type="text" 
        className={search.search_input} 
        placeholder='Seach Book'
        value={searchField}
        onChange={handleChange}
        />
        <button onClick={redirectToSearch} className={search.search_button}>Search</button>
    </div>
  )
}

export default SearchInputForm