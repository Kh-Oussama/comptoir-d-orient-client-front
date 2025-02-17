import DesignActionTypes from "./design-utilities.types";

export const toggleSearchHidden = () => ({
   type: DesignActionTypes.TOGGLE_SEARCH_HIDDEN,
});

export const togglesShopSidebar = shop_sidebar_state => ({
      type: DesignActionTypes.TOGGLE_SHOP_SIDEBAR,
      payload: shop_sidebar_state
});

export const setCurrentPage = current_page => ({
   type: DesignActionTypes.SET_CURRENT_PAGE_NAV,
   payload: current_page
});

export const setCurrentSection = current_section => ({
   type: DesignActionTypes.SET_CURRENT_SECTION,
   payload: current_section
});

