import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
    // user: {
    //     _id: "6326cb0b6cdfc5f716bca9ae",
    //     username: "tanaka",
    //     email: "tanaka@gmail.com",
    //     password: "Tanaka6789",
    //     profilePicture: "/person/2.jpeg",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [],
    //     isAdmin:false,
    // },
    user: JSON.parse(localStorage.getItem("user")) || null,
    insFetching: false,
    error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return(
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
        >

        {children}
        </AuthContext.Provider>
    );
};
