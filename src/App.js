import React from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import SignIn from './pages/SignIn';
import UserPage from './pages/UserPage';
import Home from './pages/Home';
import Error from './pages/Error';
import TransactionPage from './pages/Transaction';
import { useDispatch } from 'react-redux';
import { tokenLocalStorage, postUserProfile } from './actions/user.action';



function App() {

    const dispatch = useDispatch()

    const getTokenLocalStorage = () => {
        const tokenLocalStorageData = localStorage.getItem('token');
        console.log(tokenLocalStorageData)
        if (tokenLocalStorageData) {
            dispatch(tokenLocalStorage(tokenLocalStorageData));
            dispatch(postUserProfile(tokenLocalStorageData));
        }
    }
    getTokenLocalStorage()

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path='/profile' element={<UserPage />} />
                <Route path='/transaction' element={<TransactionPage/>}/>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;

