import React from 'react'
import Filterbtn from '../Filterbtn'

interface Props {
  updateGender: (value: string) => void
  updatePageNumber: (value: number) => void
}

const Gender = ({ updateGender, updatePageNumber }: Props) => {
  const genders = ['female', 'male', 'genderless', 'unknown']
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
              updatePageNumber={updatePageNumber}
              task={updateGender}
              input={items}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gender
