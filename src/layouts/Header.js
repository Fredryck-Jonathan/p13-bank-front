import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { deleteToken } from "../actions/user.action";


function Header() {

    const dispatch = useDispatch();

    const userProfile = useSelector((state) => state.userReducer);

    const [token, setToken] = useState(userProfile.token);

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        setToken(userProfile.token)
    }, [userProfile.token]);

    const disconnectEvent = (e) => {
        e.preventDefault()
        dispatch(deleteToken())
        localStorage.removeItem('token');
        navigate('/')
    }

    useEffect(() => {
        const loadData = async () => {
            if (userProfile.user_infos) {
                setLoading(false)
            }
        }
        loadData()
    })

    if (loading && token) {
        return <div>Chargement....</div>
    } else {
        return (
            <div className='header'>
                <Link id="logo-link" to="/">
                    <img alt="logo ArgentBank in green" src={require("../assets/argentBankLogo.png")}></img>
                </Link>

                {
                    token
                        ? <div id="sign-out-div">
                            <Link id="account-link" to="/profile">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                <p>{userProfile.user_infos?.firstName}</p>
                            </Link>
                        
                            <button onClick={(e) => { disconnectEvent(e) }} id="sign-out-link" href="/login">
                                <ion-icon name="log-out-outline"></ion-icon>
                                Sign Out
                            </button>
                        </div>

                        : <a id="sign-in-link" href="/login">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <p>Sign In</p>
                        </a>

                }
            </div>
        )
    }
}
export default Header