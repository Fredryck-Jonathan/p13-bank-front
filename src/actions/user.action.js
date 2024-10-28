import axios from "axios";


export const USER_LOGIN = "USER_LOGIN";
export const USER_PROFILE = "USER_PROFILE";
export const USER_PUT_PROFILE = "USER_PUT_PROFILE";
export const ERROR_500 = "ERROR_500";
export const DELETE_TOKEN = "DELETE_TOKEN";


export const postUserLogin = (data) => {
    return async(dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            console.log(data);
            console.log(res.data);

            if (data.rememberMe) {
                localStorage.setItem('token', res.data.body.token);
            }
            dispatch({ type: USER_LOGIN, payload: res.data.body.token})
            return res.data
        })
            .catch((error) => {
                console.error(error)
                return error
        })
    }
}

export const tokenLocalStorage = (data) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN, payload: data})
    }
}

export const deleteToken = () => {
    return (dispatch) => {
        dispatch({ type: DELETE_TOKEN})
    }

}

export const postUserProfile = (data) => {
    console.log(data)
    return async(dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile",
            {},
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${data}`

                }
            }).then((res) => {
                dispatch({ type: USER_PROFILE, payload: res.data.body })
                console.log(res.data.body)
                return res.data
            })
            .catch((error) => {
                console.error(error)
            })
    }
};

export const putUserProfile = (data) => {
    return async (dispatch) => {
        console.log("data" + data.token)
        return axios.put("http://localhost:3001/api/v1/user/profile",
            data.newProfile
            , {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${data.token}`

                }
            }).then((res) => {
                dispatch({ type: USER_PUT_PROFILE, payload: data })
            })
            .catch((error) => {
                console.error(error)
            })
    }
};




