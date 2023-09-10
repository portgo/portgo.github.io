import { FC } from "react";
import { PeopleAlsoAsk } from "../interface/Question";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Prop{
    questions : PeopleAlsoAsk[]
    title : string
}

const PeopleAlsoAsks : FC<Prop> = ({title , questions}) => {
    if(questions.length === 0) return ""
    return (
        <div className="mt-8 w-[60%]">
            <div className=" text-gray-800 text-2xl font-medium">{title}</div>
            <hr className="w-full mt-2" />
            <div className="mt-2 flex flex-col">
                {questions.map(q=>{
                    return (
                        <div className="mt-2">
                            <div className="flex  justify-between">
                            <div className="flex items-center text-lg">
                            {q.name}

                            </div>
                            <div className="flex items-center">
                                <ChevronDownIcon className="w-6 h-6 text-gray-700" />
                            </div>

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