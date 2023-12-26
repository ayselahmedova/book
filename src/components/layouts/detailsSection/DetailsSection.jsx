import React ,{ useState, useEffect , useContext} from 'react';
import detailsSection from './detailsSection.module.scss';
import {useParams, useNavigate} from 'react-router-dom';
import {BookData} from '../../../util/BookData';
import {UserContext,CartContext} from "../../../App"

const DetailsSection = () => {
    const {id} =useParams();
    const [bookData,setbookData] = useState({});

    const user = useContext(UserContext);
    const [cartItems,setCartItems] = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        let newData = BookData.filter((book)=> book.id ===parseInt(id));
        setbookData(newData[0])
    },[]);

    const handleAddToCard = () => {
        if(user){
            setCartItems([...cartItems,bookData])}
        else{
            navigate ('/login');
            alert("Please Login")
        }
    }


  return (
    <section className={detailsSection.detail_section_container}>
        <div className={detailsSection.container}>
            <div className={detailsSection.flex_container}>
                <div className={detailsSection.book_img_container}>
                    <img src={bookData.book_url} alt="book" />
                </div>
                <div className={detailsSection.book_details_container}>
                    <h2>{bookData.book_name}</h2>
                    <p className='text-primary'>{bookData.author_name}</p>
                    <p className={detailsSection.book_description} >{bookData.book_description}</p>
                    <p> <b>Language</b>: {bookData.language}</p>
                    <p><b>Book Length</b>: {bookData.print_length}</p>
                    <h3><b>Price</b>: ${bookData.price}</h3>

                    <a onClick = {handleAddToCard} className={detailsSection.cart_button}>Add to Cart</a>
                </div>
            </div>
        </div>
    </section>
  )
}
export default DetailsSection