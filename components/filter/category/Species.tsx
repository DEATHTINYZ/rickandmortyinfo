/* eslint-disable no-unused-vars */
import React from 'react'
import Filterbtn from '../Filterbtn'

interface Props {
  updateSpecies: (value: string) => void
  updatePageNumber: (value: number) => void
}

const Species = ({ updateSpecies, updatePageNumber }: Props) => {
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet'
  ]
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col gap-[.5rem]">
      <div className="text-[20px]">Species</div>
      <div className="flex flex-col gap-[1rem]">
        {species.map((item, index) => {
          return (
            <Filterbtn
              name="species"
              index={index}
              key={index}
              updatePageNumber={updatePageNumber}
              task={updateSpecies}
              input={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Species
