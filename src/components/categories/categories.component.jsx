import React, {useEffect} from 'react';
import CategoriesCard from "../categories-card/categories-card.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {useLocation, withRouter} from "react-router-dom";
import {selectCategories, selectIsFetchingCat} from "../../redux/categories/categories.selectors";
import {fetchCategoriesStart} from "../../redux/categories/categories.actions";
import Loader from "../loader-content/loader.compoenent";
import {Header} from "../shop-header/Header";
import {togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";
import Helmet from "react-helmet";

const Categories = ({toggles_shop_sidebar, fetchCategories, isFetching, categories}) => {
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        toggles_shop_sidebar(false)
    }, [toggles_shop_sidebar]);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Helmet>
                <title>Comptoir d'orient Grossiste alimentaire pour professionnels, vente en gros</title>
            </Helmet>
            <Header title={'nos categories'}/>
            <ul className="card-list">
                {
                    isFetching
                        ? <React.Fragment>
                            <div className="card loader-container"><Loader/></div>
                            <div className="card loader-container"><Loader/></div>
                            <div className="card loader-container"><Loader/></div>
                            <div className="card loader-container"><Loader/></div>


                        </React.Fragment>
                        :
                        categories.length > 0
                            ? <React.Fragment>
                                {
                                    categories.map(cat => {
                                        return (
                                            <CategoriesCard key={cat.id} categoryRef={cat.id} backgroundColor={"#814A0E"}
                                                            backgroundImage={cat.image_path} title={cat.title}
                                                            subtitle={cat.subtitle}/>
                                        )
                                    })
                                }
                            </React.Fragment>
                            : <img src="/images/empty.png" className="empty-img" alt=""/>
                }


            </ul>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingCat,
    categories: selectCategories,
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesStart()),
    toggles_shop_sidebar: x => dispatch(togglesShopSidebar(x)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));

