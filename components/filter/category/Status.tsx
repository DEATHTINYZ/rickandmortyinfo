import React from 'react'
import Filterbtn from '../Filterbtn'

interface Props {
  updateStatus: (value: string) => void
  updatePageNumber: (value: number) => void
}

const Status = ({ updateStatus, updatePageNumber }: Props) => {
  const status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col gap-[.5rem]">
      <div className="text-[20px]">Status</div>
      <div className="flex flex-col gap-[1rem]">
        {status.map((item, index) => (
          <Filterbtn
            key={index}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Status
