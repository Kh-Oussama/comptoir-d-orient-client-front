import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.get("https://backend.comptoir-d-orient.fr/sanctum/csrf-cookie");

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
