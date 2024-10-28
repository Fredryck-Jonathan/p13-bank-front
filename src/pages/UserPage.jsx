
import { useEffect, useRef, useState } from "react";
import TransactionItem from "../components/Transaction_item"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { postUserProfile, putUserProfile } from "../actions/user.action";


function UserPage() {

    const [loading, setLoading] = useState(true);

    
    const userProfile = useSelector((state) => state.userReducer);

    const [token, setToken] = useState(userProfile.token);


    const formEditName = useRef();


    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        
        const loadData = async () => {
            if (!token) {
                navigate('*')
            } else if (userProfile.user_infos) {
                setLoading(false);
            } else {
                dispatch(postUserProfile(token));
            }
        }
        loadData()
    }, [userProfile, token])



    //Toggle edit name display
    const toggleEditName = (e) => {
        e.preventDefault();
        const editNameDiv = e.currentTarget.closest('.edit-name-div');
        console.log(editNameDiv)
        editNameDiv.classList.toggle('active');
    }

    const handleEditNameForm = (e) => {
        e.preventDefault();
        const putEditNameData = {
            newProfile: {
                firstName: formEditName.current[0].value,
                lastName: formEditName.current[1].value,
            },
            token: token
        }
        const response = dispatch(putUserProfile(putEditNameData));
        console.log(response, putEditNameData)
        toggleEditName(e)
        
    }





    if (loading) {
        <div>Chargement...</div>
    } else {
        return (
            <div className='UserPage'>
                <section className="section-edit-name">
                    <h1>Welcome back</h1>
                    <div className="edit-name-div">
                        <div className="edit-name-inactif">
                            <h1>{userProfile.user_infos?.firstName} {userProfile.user_infos?.lastName}</h1>
                            <button className="edit-button" onClick={(e) => {toggleEditName(e)}}>Edit Name</button>
                        </div>
                        <form ref={formEditName} className="edit-name-actif" onSubmit={(e) => handleEditNameForm(e)}>
                            <input className="edit-name-input-actif" type="text" id="firstName" name="firstName" required></input>
                            <input className="edit-name-input-actif" type="text" id="lastName" name="lastName" required></input>
                            <button className="edit-name-button-actif" type="submit" value='Save'>Save</button>
                            <button className="edit-name-button-actif" onClick={(e) => {toggleEditName(e)}}>Cancel</button>
                        </form>
                    </div>
                </section>
                <section className="section-transactions">
                    <TransactionItem
                        title='Argent Bank Checking (x8349)'
                        amount="$2,082.79"
                        description="Available Balance"
                    ></TransactionItem>
                    <TransactionItem
                        title='Argent Bank Saving (x6713)'
                        amount="$10,928.42"
                        description="Available Balance"
                    ></TransactionItem>
                    <TransactionItem
                        title='Argent Bank Credit Card (x8349)'
                        amount="$184.30"
                        description="Current Balance"
                    ></TransactionItem>
                </section>
            </div>
        )
    }
}
export default UserPage