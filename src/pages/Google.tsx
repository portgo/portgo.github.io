import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Suggestion from "../components/Suggestion";
import Avatar from "../components/Avatar";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";

const Google : FC = () => {

    const nav = useNavigate()

    const [search , setsearch] = useState("")
    const [isFocus , setisFocus] = useState(false)
    const onSearch = () => {
        nav(`/q?search=${search}`)
    }
    

    return (
        <>
              <div className="flex flex-col items-center justify-between min-h-screen dark:bg-primary-dark dark:text-white group">

        {/* Header */}
        <header className="flex w-full items-center justify-between p-5 text-sm text-gray-700 dark:text-gray-300 md:font-medium">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
          {/* Right */}
          <div className="flex space-x-4 items-center">
            <p>Gmail</p>
            <p>Images</p>
            {/* <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#111] rounded-full" /> */}
            <Avatar className="" url="https://next-gooogle.vercel.app/_next/image?url=%2Fimg%2Fprofile.jpg&w=48&q=75" />
          </div>
        </header>
        {/* Body */}

        <form className="flex  bg-x mt-14 flex-col items-center  flex-grow w-[80%] sm:w-[90%]">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className="w-225 md:w-300 md:h-100"
            width={225}
            height={75}
            alt=""
          />

          <div  className={` relative flex w-full mt-5 shadow-md   max-w-md ${isFocus ? 'rounded-b-none	' : ''} rounded-3xl  border  dark:bg-gray-700md:dark:hover:border-gray-100 px-5 py-2 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl`} >
          {isFocus &&
          <Suggestion  onClose={()=>setisFocus(false)} />
          }
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500 " />
            <input
            onChange={e=>setsearch(e.target.value)}
             onFocus={()=>setisFocus(true)}
             type="text" value={search} onKeyDown={e=>{
                if(e.keyCode === 13){
                    onSearch()
                }
             }}
              className="focus:outline-none w-full flex-grow dark:bg-primary-dark custom-input"
            />
            <MicrophoneIcon className="h-5 text-gray-500" />
          </div>

          <div className="flex flex-row space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4">
            <button type="submit" onClick={onSearch} className="btn">
              Google Search
            </button>
            <button onClick={onSearch} className="btn">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>

        <Footer className=" group-even:focus:invisible" />
      </div>

      <div id="portal"></div>
        </>
    )

    
}

export default Google