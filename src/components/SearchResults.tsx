import { FC, useMemo } from 'react';
import { Question } from '../interface/Question';
import GridUI from './GridUI';
import RightSideUI from './RightSideUI';
import PeopleAlsoAsks from './PeopleAlsoAsks';
import LinkResults from './LinkResults';
import ImageForUI from './ImageForUI';
// import PaginationButtons from './PaginationButtons';

interface Prop{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    results : Question[]
}

const SearchResults : FC<Prop> = ({ results }) => {


  const rs = useMemo(() => {
    if(results.length > 0) return results[0]
    return null
  } , [results])

  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl=[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3"> About this search results 0 seconds </p>
      {rs?.imageSection ? <ImageForUI images={rs.imageSection.images||[]} title={rs.imageSection.title} /> : ""}
      {rs?.rightSideDetail && <RightSideUI detail={rs.rightSideDetail} />}
      {rs?.grids && <GridUI detail={rs.grids} />}

    
      <LinkResults title={rs?.questionSection?.title||""} order={rs?.questionSection?.order||-1} asks={rs?.questionSection?.questions||[]} results={rs?.results||[]} />
      {!rs?.questionSection?.order && 
      <PeopleAlsoAsks questions={rs?.questionSection?.questions||[]} title={rs?.questionSection?.title || "Questions related to your search"}  /> 
      
      }
      

      {/* <PaginationButtons /> */}
    </div>
  );
}

export default SearchResults