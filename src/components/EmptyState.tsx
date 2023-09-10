import { FC } from "react";
import useQuery from "../hook/useQuery";

const EmptyState: FC = () => {

    const query = useQuery();


    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl=[14%] lg:pl-52">
            <div>
                Your search - {query.get("search") || ""} - did not match any documents.
            </div>
            <div className="mt-4">
            Suggestions:

            </div>
            <ul className="mt-1 list-disc	">
                <li className="ml-6">
                    Make sure that all words are spelled correctly.
                </li>
                <li className="ml-6">
                    Try different keywords.
                </li>
                <li className="ml-6">
                    Try more general keywords.
                </li>
            </ul>

            <div className="mt-3">
            <img className="w-96 h-96" style={{imageRendering : "-moz-crisp-edges"}} src="https://i.ibb.co/3RHJp3Q/2953962.jpg" alt="2953962" />
            </div>

        </div>
    )
}

export default EmptyState