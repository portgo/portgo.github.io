// import HeaderOption from "./HeaderOption";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

// import {
//   DotsVerticalIcon,
//   MapIcon,
//   NewspaperIcon,
//   PhotographIcon,
//   PlayIcon,
//   SearchIcon,
// } from "@heroicons/react/outline";

interface Prop {
  title: string
  onClick : () => void
}

const HeaderOption: FC<Prop> = ({ title , onClick  }) => {


  return (
    <div onClick={onClick} className={`flex rounded-full  items-center space-x-1 border px-5 py-2 hover:text-blue-500 hover:border-blue-500 cursor-pointer `}>
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default function HeaderOptions() {

  const nav = useNavigate()

  const gotoLink = (name : string) => {
    nav(`/q?search=${name}`)
  }

  const onOpenMail = () => {
    window.location.href = `mailto:vilasone.phoungmixay@gmail.com`;

  }

  return (
    <div className="flex w-full p-3 text-gray-700 dark:text-gray-400 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] dark:border-gray-700">
      {/* Left */}

      <div className="flex space-x-2 justify-evenly sm:justify-start w-full sm:w-auto  ">
        <HeaderOption title="Profile" onClick={()=>gotoLink("Who am I")} />
        <HeaderOption title="Skills" onClick={()=>gotoLink("What is your skills")} />
        <HeaderOption title="Projects" onClick={()=>gotoLink("What is your projects")} />
        <HeaderOption title="Experience" onClick={()=>gotoLink("What is your experience")} />
        <HeaderOption title="Contact" onClick={()=>onOpenMail()} />


        {/* <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Map" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" /> */}
      </div>
      {/* Right */}
      {/* <div className="hidden space-x-4  sm:inline-flex">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div> */}
    </div>
  );
}