import { FC } from "react";
import { PeopleAlsoAsk, ResultItem } from "../interface/Question";
import ReactMarkdown from "react-markdown";
import PeopleAlsoAsks from "./PeopleAlsoAsks";
// import remarkGfm from "remark-gfm";

interface Prop {
    results: ResultItem[]
    order: number
    asks: PeopleAlsoAsk[]
    title : string
}

const LinkResults: FC<Prop> = ({ results, order , asks , title }) => {
    return (
        <>
            {results.map((item , index) => {
                return (
                    <>
                        {index+1 === order ? <>
                            <PeopleAlsoAsks questions={asks} title={title} />
                            <div className="mt-8"></div>
                        </> : ""}
                        <div key={item.title} className="max-w-xl mb-8">

                            {!item.renderType ? <>
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
                                <p className={`${item.lineLimit ? `line-clamp-${item.lineLimit}` : 'line-clamp-3'}  mt-2`}>{item.description}</p>
                            </> : ""}

                            {item?.renderType === "FIRST_PAGE" ? <div>
                                <div id="image-source" className="flex overflow-x-hidden">
                                    <div className="w-64">
                                        <img src={item.image} className="w-64 h-48" />

                                    </div>
                                    {item.images?.map(i => {
                                        return (
                                            <div>
                                                <img className="w-auto h-48" src={i} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="mt-4 	">
                                    <ReactMarkdown children={item.description}
                                    // remarkPlugins={[remarkGfm]} 
                                    />,

                                </div>
                                <div className="mt-2">
                                    <a href={"#"} className="text-sm">{item.url ? item.url : "https://www.example.com"}</a>
                                    <div className="truncate text-xl  text-blue-800 font-medium group-hover:underline cursor-pointer">{item.title}</div>

                                </div>
                            </div> : ""}
                            {item?.renderType === "IMAGE" ? <div>
                                <a href={"#"} className="text-sm">{item.url ? item.url : "https://www.example.com"}</a>
                                <div className="truncate text-xl  text-blue-800 font-medium group-hover:underline cursor-pointer">{item.title}</div>
                                <div className="flex space-x-6 mt-2">
                                    <div><img src={item.image} className="w-full rounded-md h-36" /></div>
                                    <div className="w-2/3 line-clamp-6">{item.description}</div>
                                </div>
                            </div> : ""}


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
                    </>
                )
            })}
        </>
    )
}

export default LinkResults