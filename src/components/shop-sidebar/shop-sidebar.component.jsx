import React, {useEffect} from 'react'
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {Link, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";
import Loader from "../loader-content/loader.compoenent";
import CategoriesCard from "../categories-card/categories-card.component";
import {fetchCategoriesStart} from "../../redux/categories/categories.actions";
import {selectCategories, selectIsFetchingCat} from "../../redux/categories/categories.selectors";
import uuid from 'react-uuid';

const ShopSidebar = ({ current_sidebar_state, categories,isFetching,fetchCategories,history}) => {

    useEffect(() => {
        fetchCategories();
    },[fetchCategories]);

    return (
        <>
            <ProSidebar collapsed={!current_sidebar_state} image={"/images/side2.jpg"}>
                <SidebarHeader>
                    <div className="sidebarHeader">
                        <IcomoonReact iconSet={iconSet} size={40} icon="shop"/>
                    </div>

                </SidebarHeader>

                <SidebarContent>

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

                                                <Menu iconShape="square">
                                                {
                                                        cat.products_subcategories.length > 0
                                                        ?    <SubMenu key={uuid()} title={cat.title} icon={<i className="far fa-dot-circle" />} onClick={() => history.push(`/shop/products/${cat.id}`)}  >

                                                                {
                                                                    cat.products_subcategories.map(subCat => {
                                                                        return (
                                                                            <MenuItem key={uuid()}>{subCat.title} </MenuItem>
                                                                        )
                                                                    })
                                                                }

                                                            </SubMenu>
                                                        :   <MenuItem key={uuid()} icon={<i className="far fa-dot-circle"/>}>{cat.title} <Link to={`/shop/products/${cat.id}`} /></MenuItem>

                                                    }
                                                </Menu>
                                                </>
                                            )
                                        })
                                    }
                                </React.Fragment>
                                : null
                    }


                </SidebarContent>
                <SidebarFooter>
                    <div className="sidebarFooter">
                        &copy; Copyright 2021 by <span className="dev-name">Khirat Oussama.</span>

                    </div>
                </SidebarFooter>

            </ProSidebar>

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
    fetchCategories : () => dispatch(fetchCategoriesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopSidebar));

