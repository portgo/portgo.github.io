import { FC, useRef } from "react";
import { suggestions } from "../interface/Question";
import { useNavigate } from "react-router-dom";
import { useClickAway } from "react-use";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import { createPortal } from "react-dom";

interface Prop{
    onClose : () => void
}

const Suggestion : FC<Prop> = ({onClose}) => {

    // const inputEle = document.querySelector("input")

    const nav = useNavigate()

    const onClick = (search : string) => {
        nav(`/q?search=${search}`)
        onClose()
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    useClickAway(ref, () => {
        onClose()
      console.log('OUTSIDE CLICKED');
    });
  

    return (
        <>
            <div ref={ref} className=" border-b border-x  absolute bg-white w-full rounded-b-3xl top-[48px] border-t  right-0 flex flex-col">
            {suggestions.map(s=>{
                return (
                    <div onClick={()=>onClick(s)} className="cursor-pointer px-3 py-2 flex space-x-3 hover:bg-gray-100">
                        <MagnifyingGlassIcon  className="w-6 h-6 text-gray-400" />
                        <div>{s}</div>
                    </div>
                )
            })}
        </div>
        
        </>
    )

}

export default Suggestion