"use client"
import Link from 'next/link'
import './globals.css'
import { useEffect, useState } from 'react'
import { ContextProvider, useCont } from '../contextApi/context';
import StoreQuestions from '../components/storeQuestions/storeQuestions';


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(()=>{
    if(window.location.pathname == "/instructor"){
      setShow2(!show);
    }else{
      setShow2(show);
    }
  },[show])

  return (
    <ContextProvider>
    <html lang="fa">
      <body className='flex flex-row-reverse justify-start m-6'>
        <aside className='w-[335px] rounded flex flex-col items-center'>
          <header className='h-[45px] w-full bg-header font-bold text-sm flex justify-end items-center pr-4 rounded-t'>سوالات من</header>
          {/* filters */}
          <article className='flex flex-col items-center w-full h-auto border-gray-300 border'>
            <header className='flex flex-row-reverse items-center w-full h-[40px] justify-between py-[8px] px-[12px]' onClick={()=>{setShow(!show)}}>
              <span>فیلتر</span>
              {!show &&
              <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
              </svg>}
              {show && 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16"> 
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/> 
              </svg>}
            </header>
            {show && 
            <div className='w-full'>
              <form className='flex flex-col items-end w-full px-[12px]'>
                <label className='text-sm font-medium'>مسئله ها</label>
                <select className='border border-gray-200 rounded w-full  text-gray-400 h-[30px] flex justify-center items-center text-sm font-medium mt-2' dir='rtl'>
                  <option value=""> همه سوالات</option>
                </select>

                <label className='text-sm font-medium mt-2'>وضعیت</label>
                <select className='border border-gray-200 rounded w-full  text-gray-400 h-[30px] flex justify-center items-center text-sm font-medium mt-2' dir='rtl'>
                  <option value="">همه</option>
                </select>

                <label className='text-sm font-medium mt-2'>دسته بندی</label>
                <select className='border border-gray-200 rounded w-full  text-gray-400 h-[30px] flex justify-center items-center text-sm font-medium mt-2' dir='rtl'>
                  <option value="">همه</option>
                </select>
                <button type='submit' className=' rounded bg-blue-500 w-full my-4 h-[30px]'> اعمال فیلتر</button>
              </form>
            </div>
            }
          </article>
          {/* my questions */}
          <article className='w-full h-auto border border-gray-300 rounded-b'>
            <StoreQuestions />
          </article>
        </aside>
        <main className='mr-6 w-[690px] border border-gray-300 rounded'>
          {/* header & choose who answers */}
          <section className='w-full'>
            <header className='bg-header w-full text-sm flex justify-end items-center h-[45px] font-bold pr-4 rounded'>درخواست پشتیبانی</header>
            <article className='w-full'>
              <p dir='rtl' className='text-sm font-medium mx-2 mt-6 mb-10'>
              بررسی کدی که نوشتید و رفع خطا توسط خودتون یکی از مفیدترین کارها برای پیشرفت مهارت برنامه‌نویسیه!
               اگر به اندازه کافی تلاش کردید و وقت خوبی برای رفع خطا گذاشتید و به نتیجه نرسیدید،
               ما اینجاییم که در فرایند دیباگ کردن بهتون کمک کنیم.
              </p>
            </article>

            <article className='flex flex-row-reverse justify-between items-center w-full rounded shadow-md'>
              <Link href={'/'} className='w-[50%] flex justify-center font-bold text-lg pb-4' dir='rtl' onClick={()=> {if(window.location.pathname == "/instructor")setShow2(!show2)}}
              style={{
                color: !show2 ? "rgba(0, 153, 204, 1)" : "rgba(74, 85, 104, 1)",
              }}>سوال از ربات QGPT</Link>
              <Link href={'/instructor'} className='w-[50%] flex justify-center text-unselect font-bold text-lg pb-4' dir='rtl' onClick={()=> {if(window.location.pathname == "/")setShow2(!show2)}}
              style={{
                color: show2 ? "rgba(0, 153, 204, 1)" : "rgba(74, 85, 104, 1)",
              }}>سوال از مربی های دوره</Link>
            </article>
          </section>
          {/* ask questions */}
          <section className='w-full h-auto pt-4 px-2 pb-2'>
            {children}
          </section>
        </main>
      </body>
    </html>
    </ContextProvider>
  )
}
