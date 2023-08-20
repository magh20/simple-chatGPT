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
const [question,setQuestion] = useState(()=>localStorage.getItem("questions")? JSON.parse(localStorage.getItem("questions") || "{}") : [{id: 1, title: "تست", problem: "مسئله"}]);
const [res, setRes] = useState();

    return (
        <AuthContext.Provider value={{question, setQuestion, res, setRes }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useCont = () => useContext(AuthContext)