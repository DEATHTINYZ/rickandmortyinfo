/* eslint-disable no-unused-vars */
import { genders } from '@/constants/constants'
import { GenderProps } from '@/types/types'
import React from 'react'
import Filterbtn from '../Filterbtn'

const Gender = ({ setGender, setPageNumber }: GenderProps) => {
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col gap-[.5rem]">
      <div className="text-[20px]">Gender</div>
      <div className="flex flex-col gap-[1rem]">
        {genders.map((items, index) => {
          return (
            <Filterbtn
              name="gender"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setGender}
              input={items}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gender
