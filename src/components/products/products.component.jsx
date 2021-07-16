import React, {useState} from 'react';
import Pagination from "../Pagination/pagination.compoenent";
import ProductItem from "../product-item/product-item.component";
import P_9 from "../../assets/img/pr2.jpg";
import P_10 from "../../assets/img/pr2.jpg";
import P_11 from "../../assets/img/pr1.jpg";
import P_12 from "../../assets/img/pr1.jpg";
import P_5 from "../../assets/img/pr.jpg";
import P_6 from "../../assets/img/pr.jpg";
import P_7 from "../../assets/img/pr3.jpg";
import P_8 from "../../assets/img/pr3.jpg";


const Products = () => {
    const [searchField, setSearchField] = useState('');







    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <>
        <div className="Collection-Preview">
            <ProductItem imageUrl1={P_9} imageUrl2={P_10} title={"Aged Pine Scented Candle"}
                             lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_11} imageUrl2={P_12} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_5} imageUrl2={P_6} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_7} imageUrl2={P_8} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_9} imageUrl2={P_10} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_11} imageUrl2={P_12} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_5} imageUrl2={P_6} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_7} imageUrl2={P_8} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_9} imageUrl2={P_10} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_11} imageUrl2={P_12} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_5} imageUrl2={P_6} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_7} imageUrl2={P_8} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_9} imageUrl2={P_10} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_11} imageUrl2={P_12} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_5} imageUrl2={P_6} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
            <ProductItem imageUrl1={P_7} imageUrl2={P_8} title={"Aged Pine Scented Candle"}
                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>


        </div>

            <div className="shop-header__bottom" >
                <div className="shop-header__bottom-pCount">
                    <i className="fas fa-tags"/> 50 Products
                </div>
                <Pagination elementPerPage={elementsPerPage} totalElements={10} paginate={paginate} currentPage={currentPage}/>
            </div>
            </>
    );
}



export default Products;