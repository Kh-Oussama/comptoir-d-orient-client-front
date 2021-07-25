import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import designUtilitiesReducer from "./design-utilites/design-utilities.reducer";
import sliderReducer from "./slliders/slider.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productReducer from "./products/product.reducer";
import clientsReducer from "./clients/clients.reducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
};

const rootReducer = combineReducers({
    design_utilities: designUtilitiesReducer,
    slider : sliderReducer,
    category : categoriesReducer,
    product : productReducer,
    client : clientsReducer,
});

export default persistReducer(persistConfig, rootReducer);

