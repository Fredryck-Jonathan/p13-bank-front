import React from 'react';
import { createRoot } from 'react-dom/client';

import './sass/main.css';

import App from './App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
        reducer: rootReducer,
        devTools: true,
});



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
        <Provider store={store}>
                <App />
        </Provider>,
)