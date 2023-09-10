import { FC } from "react";
import { GridItemsMainDetail } from "../interface/Question";
import {  ChevronDownIcon } from "@heroicons/react/20/solid";

interface Prop {
    detail: GridItemsMainDetail
}

const GridUI: FC<Prop> = ({ detail }) => {
    return (
        <div>
            <div id="header-title" className="flex flex-col space-y-3">
                <div className="text-gray-900 text-2xl font-bold">{detail.title}</div>
                <div className="text-gray-500 text-xl ">{detail.sub}</div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 w-4/5">
                {detail.items.map(item => {
                    return (
                        <div key={"grid-item" + item.title}>
                            <div className="flex justify-between">
                                <div className="flex space-x-3" >
                                    <div className=" p-1 rounded-md">
                                        <img className="h-16" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="flex items-center text-lg">
                                        <div>{item.title}</div>
                                    </div>
                                </div>
                                <div className="flex items-center"><ChevronDownIcon className="w-6 h-6" /></div>

                            </div>

                            <div className="mt-1 w-full" style={{ border: "1px solid #dadce0" }} />
                        </div>

                    )
                })}
            </div>
            <div className="mt-12"></div>
        </div>
    )
}

export default GridUI