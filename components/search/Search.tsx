/* eslint-disable no-unused-vars */
import React from 'react'

interface Props {
  setSearch: (value: string) => void
  updatePageNumber: (value: number) => void
}

const Search = ({ setSearch, updatePageNumber }: Props) => {
  const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="relative text-gray-600">
        <input
          onChange={e => {
            updatePageNumber(1)
            setSearch(e.target.value)
          }}
          placeholder="Search Something. . ."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          autoComplete="off"
        />
        <button
          onClick={searchBtn}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ecd06f] p-[.5rem] rounded-lg text-[14px] text-white"
        >
          {' '}
          Search
        </button>
      </div>
    </>
  )
}

export default Search
