import { useRef } from "react"
import { postUserLogin } from "../actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function SignIn() {

    const dispatch = useDispatch()

    const form = useRef()

    const navigate = useNavigate()
    
    const handleform = async (e) => {

        e.preventDefault();

            const postData = {
                email: form.current[0].value,
                password: form.current[1].value,
                rememberMe: form.current[2].checked
            }
        const res = await dispatch(postUserLogin(postData));
        console.log(res)
        if (res.status === 200) {
            navigate('/profile')
        } else {
            const p_error = document.querySelector('.error_p');
            p_error.textContent = "Les champs renseignés sont incorrects. Merci de vérifier et de réessayer.";
            return false
        }
    }

    return (
        <div className='SignIn'>
            <section className="sign-in-content">
                <ion-icon name="person-circle-outline"></ion-icon>
                <h1>Sign In</h1>

                <form ref={form} onSubmit={(e) => handleform(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <p className="error_p"></p>

                    <input className="input-submit" type="submit" value="Sign In"></input>
                </form>
            </section>
        </div>
    )
}
export default SignIn