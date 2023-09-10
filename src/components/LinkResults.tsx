import { FC } from "react";
import { ResultItem } from "../interface/Question";

interface Prop {
    results: ResultItem[]
}

const LinkResults: FC<Prop> = ({ results }) => {
    return (
        <>
            {results.map((item) => (
                <div key={item.title} className="max-w-xl mb-8">
                    {item.imageType ? <div>
                        <a href={"#"} className="text-sm">{item.url ? item.url : "https://www.example.com"}</a>
                        <div className="truncate text-xl  text-blue-800 font-medium group-hover:underline cursor-pointer">{item.title}</div>
                        <div className="flex space-x-6 mt-2">
                            <div><img src={item.image} className="w-full rounded-md h-36" /></div>
                            <div className="w-2/3 line-clamp-6">{item.description}</div>
                        </div>
                    </div> : <>
                    <div className="group flex space-x-2">
                        <div className='flex items-center '><img src={item.image} className='h-6 rounded-full ' /></div>
                        <div className='pl-2'>
                            <a href={"#"}>
                                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline cursor-pointer">
                                    {item.title}
                                </h2>
                            </a>
                            <a href={"#"} className="text-sm">{item.url ? item.url : "https://www.example.com"}</a>

                        </div>

                    </div>
                    <p className="line-clamp-3 mt-2">{item.description}</p>
                    </> }
                    
                    {item.links ? <div className='ml-6 mt-4 flex flex-col space-y-3 '>
                        {item.links?.map(l => {
                            return (
                                <div className='flex flex-col'>
                                    <div className='truncate text-xl text-blue-800 ont-medium group-hover:underline cursor-pointer'>{l.title}</div>
                                    <div className='mt-2'>{l.desc}</div>
                                </div>
                            )
                        })}
                    </div> : ""}
                </div>
            ))}
        </>
    )
}

export default LinkResults