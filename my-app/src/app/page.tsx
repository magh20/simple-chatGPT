"use client"
import { useForm } from "react-hook-form"
import { Post } from "./api/route";
import { useCont } from "../contextApi/context";
import { ResDetail } from "@/components/resDetail";
import { useEffect, useState } from "react";


export type FormValues = {
  input: string,
  select: string,
  textarea: string
}

export default function Home() {
  const {handleSubmit, register, formState: {errors}, setValue} = useForm<FormValues>({defaultValues:{input: "", select: "", textarea: ""}});
  const {question, setQuestion, setRes, res} = useCont();
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);

  const submitHandle = (data : FormValues) =>{
    const date = new Date();
    const Time = date.getHours()
      + ':' + date.getMinutes()
      + ":" + date.getSeconds();

    const id = Date.now();
    Post(data, setRes, setQuestion, question, setLoading, setShow, id);
    setShow(!show);
    setRes((i: any)=>[...i, {id: id, quest: data.textarea, resp: "", Qtime: Time, date: date.toLocaleDateString('en-GB'), Rtime: ""}]);
    setValue("input", "");
    setValue("select", "");
    setValue("textarea", "");
  }

  useEffect(() => {
    localStorage.setItem("res", JSON.stringify(res));
    localStorage.setItem("questions", JSON.stringify(question));
  }, [res, question]);
  

  return (
    <div className="w-full">
      <form className="flex flex-col items-center w-full h-[450px]" onSubmit={handleSubmit(submitHandle)}>
        {/* title & problem */}
        <div className="w-full flex flex-row-reverse">
          <input type="text" dir="rtl" className="w-[327px] border border-gray-300 rounded h-[40px] ml-4 pr-2 text-sm font-medium" placeholder="عنوان سوال *" {...register("input",
          {required: { value: true, message: "عنوان را انتخاب کنید" },}
          )} />
          <select dir="rtl" className="text-gray-400 w-[327px] border border-gray-300 rounded h-[40px] text-sm font-medium" {...register("select",
          {required: { value: true, message: "یک گزینه را انتخاب کنید" },}
          )}>
            <option value="" hidden>مسئله *</option>
            <option value="بمب بازی">بمب بازی</option>
            <option value="مقدمه">مقدمه</option>
            <option value="بتا تایپ">بتا تایپ</option>
            <option value="لغت نامه">لغت نامه</option>
          </select>
        </div>
        {/* question details & answer */}
        <div className="h-[400px] w-full overflow-auto">
          {res.map((item: any)=>(
            <ResDetail loading={loading} quest={item.quest} key={item.id} resp={item.resp} date={item.date} Qtime={item.Qtime} Rtime={item.Rtime}/>
          ))} 
        </div>
        {/* question text & button */}
        <div className="w-full flex-row-reverse flex items-center ml-4" style={{
          visibility: show ? "visible" : "hidden",
        }}>
          <textarea className="w-full mx-2 border border-gray-300 rounded pt-2 px-2" placeholder="سوال خودتون رو اینجا بنویسید" dir="rtl" 
          {...register("textarea",
          {required: { value: true, message: "سوال خود را مطرح کنید" },}
          )}></textarea>
          <button type="submit" className="h-[40px] w-[40px] bg-header flex justify-center items-center -mr-14 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short text-gray-600" viewBox="0 0 16 16"> 
              <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> 
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
