/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  pageNumber: number
  info: {
    pages: number
  }
  updatePageNumber: (value: number) => void
}

const Pagination = ({ pageNumber, info, updatePageNumber }: Props) => {
  const pageChange = (data: { selected: number }) => {
    updatePageNumber(data.selected + 1)
  }

  // const [width, setWidth] = useState(window.innerWidth)
  // const updateDimensions = () => {
  //   setWidth(window.innerWidth)
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', updateDimensions)
  //   return () => window.removeEventListener('resize', updateDimensions)
  // }, [])

  return (
    <div className="flex justify-center">
      <ReactPaginate
        className="flex justify-center items-center gap-[1rem]"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="bg-[#ecd06f] text-white border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        nextClassName="bg-[#ecd06f] text-white border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        activeClassName="bg-[#ecd06f] text-white border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[#ecd06f]"
        marginPagesDisplayed={100 < 576 ? 1 : 2}
        pageRangeDisplayed={100 < 576 ? 1 : 2}
        pageCount={info?.pages || 1}
        onPageChange={pageChange}
        pageClassName="border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[gray]"
        pageLinkClassName="text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
      />
    </div>
  )
}

export default Pagination
