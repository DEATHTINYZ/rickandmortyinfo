/* eslint-disable no-unused-vars */
import { species } from '@/constants/constants'
import { SpeciesProps } from '@/types/types'
import React from 'react'
import Filterbtn from '../Filterbtn'

const Species = ({ updateSpecies, updatePageNumber }: SpeciesProps) => {
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
