"use client"
import { useCont } from "../../contextApi/context";
import { PaginatedItems } from "./pagination";
import { useState } from "react";


const StoreQuestions = () => {
    const {question} = useCont();
    const [currentItems, setCurrentItems] =useState(question);

    return(
        <div className="w-full">
            {currentItems.map((item: any, index: any)=>(
                <div key={index} className="w-full flex items-end justify-center flex-col">
                    <div className="w-full flex-row-reverse h-auto justify-between flex mt-4">
                        <div className="flex flex-row-reverse w-[65%] items-center justify-start">
                            <input type="radio" className="mx-2"/>
                            <p>{item.title}</p>
                        </div>
                        <div className="flex flex-row w-[35%] items-center">
                            <span className="mx-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.6667 0.666687H2.33341C1.41675 0.666687 0.666748 1.41669 0.666748 2.33335V17.3334L4.00008 14H15.6667C16.5834 14 17.3334 13.25 17.3334 12.3334V2.33335C17.3334 1.41669 16.5834 0.666687 15.6667 0.666687ZM15.6667 12.3334H4.00008L2.33341 14V2.33335H15.6667V12.3334Z" fill="#4A5568"/>
                                </svg>
                            </span>
                            <p>1</p>
                        </div>
                    </div>
                    <div className=" rounded-lg w-[60px] h-[20px] bg-blue-100 text-select text-xs font-medium flex justify-center items-center mt-2 mx-2">
                        <p>{item.problem}</p>
                    </div>
                </div>
            ))}
            <div className="flex justify-center items-center">
                <PaginatedItems itemsPerPage={3} setCurrentItems={setCurrentItems} />
            </div>

        </div>
    );
}
export default StoreQuestions;