import { all, call } from 'redux-saga/effects';
import {sliderSagas} from "./slliders/slider.sagas";
import {CategorySagas} from "./categories/categories.sagas";
import {ProductSagas} from "./products/products.sagas";




export default function* rootSaga() {
    yield all([
        call(sliderSagas),
        call(CategorySagas),
        call(ProductSagas),
    ])
};
