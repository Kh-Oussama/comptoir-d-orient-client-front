import React from "react";
import {Link, withRouter} from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const ProductItem = ({title, history, isHome, imageUrl1, imageUrl2, productRef, linkUrl = 'shop', match}) => {

    return (
        <LazyLoad once offset={100}>
            <div className="product-grid" style={{width: !isHome ? null : '25rem'}}>
                <Link to={`/shop/product/view/${productRef}`}>
            <span className="product-trend-label">
                        Nouveau
                    </span>
                    <span className="product-discount-label">
                       Promo
                    </span>
                    <div className="product-image">
                        <img className="pic-1" src={"https://backend.comptoir-d-orient.fr/" + imageUrl1} alt={""}/>
                        <img className="pic-2" src={"https://backend.comptoir-d-orient.fr/" + imageUrl2} alt={""}/>
                        {/*<img className="pic-1" src={imageUrl1} alt={""}/>*/}
                        {/*<img className="pic-2" src={imageUrl2} alt={""}/>*/}

                        <ul className="social">
                            {/*<li>*/}
                            {/*    <Link to='' data-tip="Add to cart">*/}
                            {/*        <i className="fa fa-shopping-cart"/>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to='' data-tip="wishlist">*/}
                            {/*        <i className="fa fa-heart"/>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to='' data-tip="Compare">*/}
                            {/*        <i className="fa fa-random"/>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link to='' data-tip="Quick View">
                                    <i className="fa fa-search"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><Link to=""> {title}</Link></h3>
                        {/*<div className="price discount"><span>{lastPrice}</span> {currentPrice}</div>*/}
                    </div>
                </Link>
            </div>
        </LazyLoad>
    );
};

export default withRouter(ProductItem);
