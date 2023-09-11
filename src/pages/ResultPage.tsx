import { FC, useEffect, useMemo } from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import EmptyState from "../components/EmptyState";
import useQuery from "../hook/useQuery";
import { questions } from "../interface/Question";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

const ResultPage: FC = () => {

  const q = useQuery()
  const search = q.get("search") || ""

  useEffect(() => {
    document.title = `${search} - Portgo`
  }, [search])

  const searchResults = useMemo(() => {
    return questions.filter(q => q.name === search)
  }, [search])

  return (
    <div className="h-screen overflow-x-hidden">
      <Header />
      <SearchResults results={searchResults} />

      {searchResults.length === 0 &&
        <EmptyState />
      }
      <footer
        className={`relative  sm:mt-0 bottom-0 grid w-full border-t divide-gray-300 bg-gray-100 dark:bg-secondary-dark text-sm `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 sm:gap-y-4 px-8 py-3 grid-flow-row-dense">
          <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
            <GlobeAsiaAustraliaIcon className="h-5 mr-1 text-green-700" /> 2023 Copyright Portgo

          </div>
        </div>
      </footer>
    </div>
  )
}

export default ResultPage