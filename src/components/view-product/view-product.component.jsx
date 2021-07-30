import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import P_3 from "../../assets/img/pr.jpg";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {useLocation, withRouter} from "react-router-dom";
import DescriptionCard from "../description-product-card/description-product-card.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectCurrentProduct, selectUpdateLoading} from "../../redux/products/product.selectors";
import {getProductStart} from "../../redux/products/products.actions";
import Loader from "../loader-content/loader.compoenent";
import {Header} from "../shop-header/Header";
import {togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";


SwiperCore.use([Pagination, Navigation]);

const ViewProduct = ({toggles_shop_sidebar,current_sidebar_state, getProductStart, currentProduct, match, updateLoading, history}) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [active, setActive] = useState("FirstCard");
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        toggles_shop_sidebar(false)
    }, [toggles_shop_sidebar]);

    useEffect(() => {
        getProductStart({id: match.params.id});
    }, [getProductStart]);

    return (

        <>
            {
                updateLoading
                    ? <div className="shop-header loader-header"><Loader/></div>
                    : <Header title={currentProduct[0] ? currentProduct[0].title : 'le produit n\'est plus disponible'}/>

            }
            <div className="view-product">
                <div className="view-product-content">
                    {
                        updateLoading
                            ? <div className="imageBlock imageBlock-loading">
                                <Loader/>
                            </div>
                            : <React.Fragment>
                                <div className="imageBlock">

                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation={isPhone}
                                        loop
                                        pagination={{
                                            clickable: true,
                                        }}
                                        onSlideChange={() => {

                                        }}
                                        // onSwiper={(swiper) => console.log(swiper)}

                                    >


                                        <SwiperSlide>
                                            <div className="item">
                                                <img src={`http://backend.comptoir-d-orient.fr/${currentProduct[0].first_image_path}`} alt="" className="img"
                                                     style={{marginRight: `${current_sidebar_state ? '8rem' : '0'} `}}/>

                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item">
                                                <img src={`http://backend.comptoir-d-orient.fr/${currentProduct[0].second_image_path}`} alt="" className="img"
                                                     style={{marginRight: `${current_sidebar_state ? '8rem' : '0'} `}}/>

                                            </div>
                                        </SwiperSlide>


                                    </Swiper>

                                </div>
                            </React.Fragment>
                    }
                    {
                        updateLoading
                            ? <div className="detail detail-loading">
                                <Loader/>
                            </div>
                            :  <div className="detail">
                                <h1 className="detail-title">
                                    {currentProduct[0].title}
                                </h1>
                                <p className="detail-p">
                                    {currentProduct[0].subtitle}
                                </p>
                                <div className="detail-product-number">Product Number :  {currentProduct[0].id}</div>
                                <div className="detail-stars">
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="far fa-star"/>
                                </div>
                                <div className="detail-description-header">
                        <span className={active === "FirstCard" ? "active" : null}
                              onClick={() => setActive("FirstCard")}>Description</span>
                                </div>

                                {
                                    active === "FirstCard" && <DescriptionCard content= {currentProduct[0].description} />
                                }


                                <div className="detail-priceBlock">
                                    <div className="price"></div>
                                    <div className="qnt">10+ in stock</div>
                                </div>
                                <div className="detail-actions">
                                    {/*<button className="add">Add to Carte</button>*/}
                                    {/*<div className="heart">*/}
                                    {/*    <i className="far fa-heart"/>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                    }


                </div>
            </div>
            </>

    )
}

const mapStateToProps = createStructuredSelector({
    updateLoading: selectUpdateLoading,
    currentProduct: selectCurrentProduct,
});

const mapDispatchToProps = dispatch => ({
    getProductStart: pro => dispatch(getProductStart(pro)),
    toggles_shop_sidebar: x => dispatch(togglesShopSidebar(x)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewProduct));

