/* eslint-disable no-unused-vars */
import { FilterBtnProps } from '@/types/types'
import React from 'react'

const Filterbtn = ({
  input,
  task,
  setPageNumber,
  index,
  name
}: FilterBtnProps) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #ecd06f;
            color: white;
          }
          input[type='radio'] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={x => {
            task(input)
            setPageNumber(1)
          }}
          className="border-2 border-gray-300 bg-white w-full text-center p-[.5rem] rounded-lg cursor-pointer"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  )
}

export default Filterbtn
