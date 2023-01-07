/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

interface Props {
  name: string
  changeID: (value: number) => void
  total: number
}

const Option = ({ name, changeID, total }: Props) => {
  return (
    <select
      onChange={e => changeID(parseInt(e.target.value))}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      id={name}
    >
      <option value="1" disabled>
        Choose...
      </option>
      {[...Array(total).keys()].map((x, index) => {
        return (
          <option value={x + 1}>
            {name} - {x + 1}
          </option>
        )
      })}
    </select>
  )
}

export default Option
