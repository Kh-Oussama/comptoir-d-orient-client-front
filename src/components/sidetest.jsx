import React, {useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import uuid from 'react-uuid';
import {selectCategories, selectIsFetchingCat} from "../redux/categories/categories.selectors";
import {fetchCategoriesStart} from "../redux/categories/categories.actions";
import {selectShopSidebarHidden} from "../redux/design-utilites/design-utilities.selectors";

const ShopSidebar = ({current_sidebar_state, categories, isFetching, fetchCategories, history}) => {

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <>
            <div>


                <div>

                    {
                        isFetching
                            ? null
                            :
                            categories.length > 0
                                ? <React.Fragment>

                                    {
                                        categories.map(cat => {
                                            return (
                                                <>

                                                    <div>
                                                        {
                                                            cat.products_subcategories.length > 0
                                                                ? <div key={uuid()}>
                                                                    {
                                                                        cat.products_subcategories.map(subCat => {
                                                                            return (
                                                                                <div key={uuid()}>{subCat.title} </div>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>
                                                                : <Link to={`/shop/products/${cat.id}`}><div key={uuid()}>{cat.title}</div></Link>

                                                        }
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </React.Fragment>
                                : null
                    }


                </div>

            </div>

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    current_sidebar_state: selectShopSidebarHidden,

    //categories
    isFetching: selectIsFetchingCat,
    categories: selectCategories,
});

const mapDispatchToProps = dispatch => ({
    //categories
    fetchCategories: () => dispatch(fetchCategoriesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopSidebar));

