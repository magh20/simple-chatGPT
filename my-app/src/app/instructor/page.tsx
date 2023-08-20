"use client"
import { useForm } from "react-hook-form";
import { useCont } from "../../contextApi/context";
import { useState } from "react";
import Image from 'next/image';
import img1 from "../../../public/assets/images/picture_photo_image_icon_131252.png"

const Instructor = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const {question, setQuestion} = useCont();

    const submitHandle = (data : any) =>{
        setQuestion([...question, {id: Date.now(), title: data.input, problem: data.select}]);
        localStorage.setItem("questions", JSON.stringify({id: Date.now(), title: data.input, problem: data.select}));
    }

    return(
        <div className="w-full h-auto" >
            <form className="flex flex-col justify-start items-end w-full h-[450px]" onSubmit={handleSubmit(submitHandle)}>
                <div className="w-full flex flex-row-reverse">
                <input type="text" dir="rtl" className="w-[327px] border border-gray-300 rounded h-[40px] ml-4 pr-2 text-sm font-medium" placeholder="عنوان سوال *" {...register("input",
                    {required: { value: true, message: "عنوان را انتخاب کنید" },}
                )}/>
                <select dir="rtl" className="text-gray-400 w-[327px] border border-gray-300 rounded h-[40px] text-sm font-medium" {...register("select",
                    {required: { value: true, message: "یک گزینه را انتخاب کنید" },}
                )}>
                    <option value="مسئله" hidden>مسئله *</option>
                    <option value="بمب بازی">بمب بازی</option>
                    <option value="مقدمه">مقدمه</option>
                    <option value="بتا تایپ">بتا تایپ</option>
                    <option value="لغت نامه">لغت نامه</option>
                </select>
                </div>
                <div className="flex flex-row-reverse w-full">
                    <label htmlFor="file-input" className="w-full border border-gray-300 text-gray-400 my-4 h-[40px] rounded flex items-center pr-2 cursor-pointer justify-between" dir="rtl">
                        ضمیمه پاسخ ارسالی
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg text-gray-400 ml-2 z-50" viewBox="0 0 16 16"> 
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> 
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/> 
                        </svg>
                    </label>
                    <input type="file" name="file-input" id="file-input" className=" hidden" max={2} maxLength={2}/>
                </div>

                <label htmlFor="" className=" font-medium mb-2 text-lg">متن</label>
                <textarea name="" className="w-full  border border-gray-300 rounded pt-2 px-2 text-base font-normal h-[116px]" placeholder="لطفا مشکلی که باهاش مواجه شدید رو اینجا توضیح بدید. همچنین بخش‌های اصلی کدتون رو هم شرح بدید." dir="rtl"></textarea>

                <div className="flex flex-row-reverse w-full">
                    <label htmlFor="file-input2" className="w-full h-[120px] border border-gray-300 border-dashed text-gray-400 my-4 rounded flex items-center justify-center pr-2 cursor-pointer flex-col" dir="rtl">
                        <Image src={img1} alt="import image!" width="60" height="60"/>
                        <div className="flex flex-row">
                            فایل تصویری خود را اینجا بیاندازید یا <p className=" text-select font-medium"> انتخاب کنید </p>
                        </div>
                    </label>
                    <input type="file" name="file-input2" id="file-input2" accept="image/png, image/jpg, image/jpeg" className=" hidden"/>
                </div>

                <button type="submit" className="h-[40px] w-[160px] rounded bg-header mt-2">ارسال</button>
            </form>
        </div>
    );
}
export default Instructor;