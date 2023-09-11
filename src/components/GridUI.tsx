import { FC, useMemo, useState } from "react";
import { GridItem, GridItemsMainDetail } from "../interface/Question";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface Prop {
    detail: GridItemsMainDetail
}

const GridUI: FC<Prop> = ({ detail }) => {

    const [currentOpen, setcurrentOpen] = useState<GridItem | null>(null)

    function findLineContainingX(x: number) {
        // Calculate the line number based on the item number
        const lineNumber = Math.ceil(x / 3);

        return lineNumber;
    }

    const currentLine = useMemo(() => {
        if (!currentOpen) return 0
        const index = detail.items.findIndex(i => i.title === currentOpen.title)
        if (index !== -1) {
            return findLineContainingX(index + 1)
        }
        return 0
    }, [currentOpen, detail.items])

    return (
        <div>
            <div id="header-title" className="flex flex-col space-y-3">
                <div className="text-gray-900 text-2xl font-bold">{detail.title}</div>
                <div className="text-gray-500 text-xl ">{detail.sub}</div>
            </div>
            <div className="mt-8 flex flex-wrap  w-[90%]">

                {detail.items.map((item, index) => {
                    const lineNumber = findLineContainingX(index + 1)
                    return (
                        <>
                            <div id={`grid-item-${item.title}`} className="w-1/3 mt-4" key={"grid-item" + item.title}>
                                <div className=" w-[90%]">
                                    <div className="flex justify-between">
                                        <div className="flex space-x-3" >
                                            <div className=" p-1 rounded-md">
                                                <img className="h-16" src={item.image} alt={item.title} />
                                            </div>
                                            <div className="flex items-center text-lg">
                                                <div>{item.title}</div>
                                            </div>
                                        </div>
                                        <div onClick={() => {
                                            if (currentOpen?.title === item.title) {
                                                setcurrentOpen(null)
                                            } else {
                                                setcurrentOpen(item)
                                            }

                                        }} className="flex items-center cursor-pointer">
                                            {currentOpen?.title === item.title ?
                                                <ChevronUpIcon className="w-6 h-6" />
                                                :
                                                <ChevronDownIcon className="w-6 h-6" />
                                            }

                                        </div>

                                    </div>

                                    {currentLine !== lineNumber &&
                                        <div className="mt-1 w-full border-b" 
                                        // style={{ border: "1px solid #dadce0" }}
                                        />

                                    }




                                </div>

                            </div>

                            {(currentLine === lineNumber && ((index + 1) % 3) === 0) ? <>
                                <div className={`${currentOpen ? "mt-2 border-t w-[97%]" : "hidden"} `}>
                                <div className="mt-2 w-3/4 flex space-x-12" >
                                    <div className="w-2/3 ">
                                        <div className="text-2xl">{currentOpen?.title}</div>
                                        <div className="mt-2">
                                            {currentOpen?.detail}

                                        </div>
                                    </div>
                                    <div className="w-1/3 flex items-center">
                                        <img src={currentOpen?.image} className="h-24" />
                                    </div>

                                </div>
                            </div>
                            <div className={`${currentLine ===  3 ? "mt-3 border-t w-[97%]" : "hidden"} `}/>
                            </> : ""}

                        </>

                    )
                })}

            </div>
            <div className="mt-12"></div>
        </div>
    )
}

export default GridUI