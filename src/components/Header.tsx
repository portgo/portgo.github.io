import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon , MagnifyingGlassIcon , XMarkIcon } from '@heroicons/react/24/solid'
import Avatar from "./Avatar";
import useQuery from "../hook/useQuery";
import Suggestion from "./Suggestion";
import HeaderOptions from "./HeaderOption";

const Header : FC = ( ) => {

    const nav = useNavigate();
    const q=  useQuery()


    const [searchstr , setsearch] = useState("")

    useEffect(() => {
      const searchRes = q.get("search") || ""
      setsearch(searchRes)
    } , [q])

    
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const search = (event : any) => {
      event.preventDefault();
    
      if (!searchstr) {
        return;
      }
  
      nav(`/q?search=${searchstr}`);
  
      // searchInputRef.current.value = term;
  
    }

    const [isFocus , setisFocus] = useState(false)

    return (
        <header className="sticky top-0 bg-white">
        <div className="flex w-full px-6 pt-6 items-center">
          <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
          width={120}
          height={35}
        //   onClick={()=>router.push("/")}
        onClick={()=>nav("/")}
          className="cursor-pointer flex items-center"
          />
          <form className={`relative flex shadow-md flex-grow px-6 py-2.5 ml-10 mr-5 border border-gray-200 ${isFocus ? 'rounded-b-none' : ""} rounded-3xl   max-w-3xl items-center`}>
            <div className="w-full relative">
            <input placeholder="cs" onFocus={()=>setisFocus(true)} 
            // onBlur={()=>setisFocus(false)} 
            value={searchstr} onChange={e=>setsearch(e.target.value)} 
            className="flex-grow w-full focus:outline-none"  type="text" />
            
            </div>
            

            <XMarkIcon 
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => setsearch("")}
            />
            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"/>
            <MagnifyingGlassIcon onClick={(event)=>{search(event)}} className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>
            <button hidden type="submit" onClick={(event)=>{search(event)}}/>
            {isFocus && 
            <Suggestion  onClose={()=>setisFocus(false)} />
            
            }
          </form>
          
          <Avatar className="ml-auto" url="https://next-gooogle.vercel.app/_next/image?url=%2Fimg%2Fprofile.jpg&w=48&q=75"/>
        </div>
  
        {/* Options */}
        <div className="">
        <HeaderOptions />

        </div>
      </header>
    )
}

export default Header