import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import P_3 from "../../assets/img/pr.jpg";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {withRouter} from "react-router-dom";
import DescriptionCard from "../description-product-card/description-product-card.component";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";


SwiperCore.use([Pagination, Navigation]);

const ViewProduct = ({current_sidebar_state}) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [active, setActive] = useState("FirstCard");


    return (
        <div className="view-product">
            <div className="view-product-content">
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
                            <div className="item" >
                                <img src={P_3} alt="" className="img" style={{marginRight: `${current_sidebar_state ? '8rem' : '0'} `}}/>

                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>
                <div className="detail">
                    <h1 className="detail-title">
                        EVERMORE LONDON
                    </h1>
                    <p className="detail-p">
                        Grove Earth & Aged Pine Scented Candle - 300g
                    </p>
                    <div className="detail-product-number">Product Number : 15885</div>
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
                        <span className={active === "SecondCard" ? "active" : null}
                              onClick={() => setActive("SecondCard")}>Basic Info</span>
                        <span className={active === "ThirdCard" ? "active" : null}
                              onClick={() => setActive("ThirdCard")}>Caliber</span>
                    </div>

                    {
                        active === "FirstCard" && <DescriptionCard content="1111111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis
                        consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime
                        nisi omnis quibusdam quos ratione sapiente unde venia?"/>
                    }
                    {
                        active === "SecondCard" && <DescriptionCard content="2222222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis
                        consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime
                        nisi omnis quibusdam quos ratione sapiente unde venia?"/>
                    }
                    {
                        active === "ThirdCard" && <DescriptionCard content="3333333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis
                        consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime
                        nisi omnis quibusdam quos ratione sapiente unde venia?"/>
                    }

                    <div className="detail-priceBlock">
                        <div className="price">22$</div>
                        <div className="qnt">10+ in stock</div>
                    </div>
                    <div className="detail-actions">
                        {/*<button className="add">Add to Carte</button>*/}
                        {/*<div className="heart">*/}
                        {/*    <i className="far fa-heart"/>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    current_sidebar_state: selectShopSidebarHidden,
});


export default connect(mapStateToProps, null)(withRouter(ViewProduct));


