import React, {useEffect, useState} from 'react';
import Pagination from "../Pagination/pagination.compoenent";
import ProductItem from "../product-item/product-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {useLocation, withRouter} from "react-router-dom";
import {fetchProductsStart} from "../../redux/products/products.actions";
import {selectIsFetchingPro, selectProducts} from "../../redux/products/product.selectors";
import Loader from "../loader-content/loader.compoenent";
import {Header} from "../shop-header/Header";
import {getCategoryStart} from "../../redux/categories/categories.actions";
import {selectCurrentCategory, selectUpdateLoading} from "../../redux/categories/categories.selectors";
import {togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";


const Products = ({ toggles_shop_sidebar,fetchProducts, isFetching, products, currentCategory, updateLoading, getCategoryStart, match, history}) => {
    // const [searchField, setSearchField] = useState('');
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        toggles_shop_sidebar(false)
    }, [toggles_shop_sidebar,match.params.id, match.params.sub]);

    //fetch products from backend
    useEffect(() => {
        fetchProducts({id: match.params.id});
    }, [fetchProducts, match.params.id, match.params.sub]);

    //gt the current category
    useEffect(() => {
        getCategoryStart({id: match.params.id});
    }, [getCategoryStart, match.params.id]);

    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(10);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = products.slice(indexOfFirstElement, indexOfLastElement);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <>
            {
                updateLoading
                    ? <div className="shop-header loader-header"><Loader/></div>
                    : <Header title={currentCategory ? currentCategory.title : 'la categories n\'est plus disponible'}/>

            }
            <div className="Collection-Preview">

                {
                    isFetching
                        ? <React.Fragment>
                            <div className="product-grid product-grid-loading"><Loader/></div>
                            <div className="product-grid product-grid-loading"><Loader/></div>
                            <div className="product-grid product-grid-loading"><Loader/></div>
                        </React.Fragment>
                        : currentElements.length > 0
                        ? <React.Fragment>
                            {
                                match.params.sub
                                    ? currentElements.map(pro => {
                                        if (match.params.sub == pro.productsSubcategory_id)
                                        return (
                                            <ProductItem key={pro.id} productRef={pro.id} imageUrl1={pro.first_image_path}
                                                         imageUrl2={pro.second_image_path} title={pro.title}/>
                                        )
                                    })
                                    : currentElements.map(pro => {
                                        return (
                                            <ProductItem key={pro.id} productRef={pro.id} imageUrl1={pro.first_image_path}
                                                         imageUrl2={pro.second_image_path} title={pro.title}/>
                                        )
                                    })
                            }
                        </React.Fragment>
                        : <img src="/images/empty.png" className="empty-img" alt=""/>
                }

            </div>

            <div className="shop-header__bottom">
                <div className="shop-header__bottom-pCount">
                    <i className="fas fa-tags"/> {products.length} Produit(s)
                </div>
                <Pagination elementPerPage={elementsPerPage} totalElements={products.length} paginate={paginate}
                            currentPage={currentPage}/>
            </div>
        </>
    );
}


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingPro,
    products: selectProducts,

    //curent categorie
    currentCategory: selectCurrentCategory,
    updateLoading: selectUpdateLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: category => dispatch(fetchProductsStart(category)),
    getCategoryStart: cat => dispatch(getCategoryStart(cat)),

    toggles_shop_sidebar: x => dispatch(togglesShopSidebar(x)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));

