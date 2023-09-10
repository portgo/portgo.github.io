import { FC } from "react";
import { RightSideDetail } from "../interface/Question";

interface Prop{
    detail : RightSideDetail
}

const RightSideUI : FC<Prop> = ({detail}) => {
    return (
        <div className="float-right border shadow  rounded-md w-1/3 mr-12">
            {detail.images.length > 0 && <div>
            <img className="h-48 w-full rounded-t-md" src={detail.images[0]||""} />
        </div>}
            
        <div className="p-3 border-b">
            <div className="text-gray-800 font-bold text-2xl">{detail.name}</div>
            <div className="mt-2 text-gray-500 font-medium text-lg">{detail.subName}</div>
        </div>
        
        <div className="px-3  text-gray-600 py-2">

            {detail.descriptionTitle !== "" && 
                <div className="text-xl">{detail.descriptionTitle}</div>
             }
            <div className="mt-2">
            {detail.description}

            </div>
            {detail.subDetails.length > 0 ?   <div className="mt-2 flex flex-col space-y-2">
                {detail.subDetails.map(s=>{
                    return (
                        <div className="flex space-x-3">
                            <div className="font-bold">{s.name}</div>
                            <div className="">{s.value}</div>

                        </div>
                    )
                })}
            </div> : ""}
          
        </div>
      </div>
    )
}

export default RightSideUI