import {  PhotoIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface Prop{
    images : string[]
    title : string
}

const ImageForUI : FC<Prop> = ({images , title}) => {
    return (
        <div className="mt-2 max-w-2xl ">
            <div className="flex space-x-3">
                <div className="flex items-center">
                <PhotoIcon  className="w-6 h-6 text-gray-400" />

                </div>
                <div className="flex text-2xl items-center">{title}</div>
            </div>
            <div className="mt-4 flex w-full  space-x-3">
            <div className=" h-48">
                            <img  src={images[0]} className="w-auto h-48" />
                        </div>
                        <div className=" h-48">
                            <img  src={images[1]} className="w-auto h-48" />
                        </div>
                {/* {images.map(i=>{
                    return (
                        <div className=" h-48">
                            <img  src={i} className="w-auto h-48" />
                        </div>
                    )
                })} */}
            </div>
            <div className="mt-12"></div>
        </div>
    )
}

export default ImageForUI