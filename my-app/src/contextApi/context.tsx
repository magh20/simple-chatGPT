"use client"
import { createContext, useContext, useState } from "react";

type ContextType = {
    question: any,
    setQuestion: any, 
    res: any,
    setRes: any
}

const AuthContext = createContext<ContextType>({question: "",setQuestion: "", res: "", setRes: ""});

export const ContextProvider = ({ children } : any) => {
const [question,setQuestion] = useState(()=>localStorage.getItem("questions")? JSON.parse(localStorage.getItem("questions") || "{}") : []);
const [res, setRes] = useState(()=>localStorage.getItem("res")? JSON.parse(localStorage.getItem("res") || "{}") : []);

    return (
        <AuthContext.Provider value={{question, setQuestion, res, setRes }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useCont = () => useContext(AuthContext)