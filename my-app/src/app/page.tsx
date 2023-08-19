

export default function Home() {
  

  return (
    <div className="w-full h-auto">
      <form className="flex flex-col justify-between items-center w-full h-[450px]">
        <div className="w-full flex flex-row-reverse">
          <input type="text" dir="rtl" className="w-[327px] border border-gray-300 rounded h-[40px] ml-4 pr-2 text-sm font-medium" placeholder="عنوان سوال *" />
          <select dir="rtl" className="text-gray-400 w-[327px] border border-gray-300 rounded h-[40px] text-sm font-medium">
            <option value="" disabled hidden>مسئله *</option>
            <option value="">بمب بازی</option>
            <option value="">مقدمه</option>
            <option value="">بتا تایپ</option>
            <option value="">لغت نامه</option>
          </select>
        </div>
        <div className="w-full flex-row-reverse flex items-center ml-4">
        <textarea name="" className="w-full mx-2 border border-gray-300 rounded pt-2 px-2" placeholder="سوال خودتون رو اینجا بنویسید" dir="rtl"></textarea>
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
