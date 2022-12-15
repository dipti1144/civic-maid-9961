import { createContext, useState } from "react";


export const AuthContext=createContext();

function AuthContextProvider({children}){

    const [authState,setAuthState] =useState({
        isAuth : false,
        token : null,
    })

    const loginUser=(token)=>{
        setAuthState({...authState , isAuth : true , token})
    }

    const logoutUSer=()=>{
        setAuthState({...authState , isAuth:false , token:null})
    }

    return (
        <AuthContext.Provider value={{authState , loginUser , logoutUSer}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider