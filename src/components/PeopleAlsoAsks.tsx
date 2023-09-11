import { FC, useState } from "react";
import { PeopleAlsoAsk } from "../interface/Question";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface Prop{
    questions : PeopleAlsoAsk[]
    title : string
}

const PeopleAlsoAsks : FC<Prop> = ({title , questions}) => {
    const [openings , setopenings] = useState<string[]>([])

    const toggleOpening = (name : string) => {
        const newOpens = [...openings]
        if(openings.includes(name)){
            const index = openings.indexOf(name)
            newOpens.splice(index , 1)
        }else{
            newOpens.push(name)
        }
        setopenings(newOpens)
    }

    if(questions.length === 0) return ""


    return (
        <div className="mt-8 w-[60%]">
            <div className=" text-gray-800 text-2xl font-medium">{title} </div>
            <hr className="w-full mt-2" />
            <div className="mt-2 flex flex-col">
                {questions.map(q=>{
                    const isInclude = openings.includes(q.name)
                    return (
                        <div onClick={()=>toggleOpening(q.name)} className="mt-2 cursor-pointer">
                            <div className="flex  justify-between">
                            <div className="flex items-center text-lg">
                            {q.name}

                            </div>
                            <div className="flex items-center">
                                {isInclude ? <>
                                    <ChevronUpIcon className="w-6 h-6 text-gray-700" />
                                
                                </> : <>
                                <ChevronDownIcon className="w-6 h-6 text-gray-700" />
                                
                                </>}
                            </div>

                        </div>
                        <div className={`${isInclude ? 'mt-2' : 'hidden'}`}>
                            {q.detail}
                        </div>
                        <hr className="w-full mt-4 "></hr>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default PeopleAlsoAsks