/* eslint-disable @next/next/no-img-element */
import { CardProps } from '@/types/types'
import React from 'react'

const Card = ({ results }: CardProps) => {
  let display: string | JSX.Element[]

  if (results) {
    display = results.map(x => {
      const { id, name, status, species, gender, origin, location, image } = x

      return (
        <div key={id} className="relative">
          <div className="flex flex-col gap-[.6rem] bg-white rounded-lg overflow-hidden md:flex-row">
            <div className="hidden absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[120px] opacity-[.2] md:block">
              #{id}
            </div>
            <div className="overflow-hidden">
              <img
                className="w-full h-[220px] object-cover hover:scale-[1.25] transition-[.6s] duration-[.6s] brightness-[.9]"
                src={image}
                alt=""
              />
            </div>
            <div className="p-[.5rem] flex flex-col gap-[.5rem]">
              <div>
                <div className="text-[16px] md:text-[20px] lg:text-[28px] font-bold">
                  {name}
                </div>
                <div className="flex gap-[.2rem]">
                  <div>{gender}</div>
                  <div> - </div>
                  <div>{species}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#9E9E9E]">Last know location:</div>
                <div className="text-[16px] lg:text-[20px]">
                  {location?.name}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#9E9E9E]">Origin:</div>
                <div className="text-[16px] lg:text-[20px]">{origin?.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === 'Dead') {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            } else if (status === 'Alive') {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            }
          })()}
        </div>
      )
    })
  } else {
    display = 'No Characters Found :/'
  }

  return <>{display}</>
}

export default Card
