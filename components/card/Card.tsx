/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

interface Props {
  page: string
  results: {
    id: string
    image: string
    name: string
    status: string
  }[]
}

const Card = ({ page, results }: Props) => {
  let display: string | JSX.Element[]

  if (results) {
    display = results.map(x => {
      const { id, image, name, status } = x

      return (
        <Link href={`${page}${id}`} key={id} className="relative">
          <div className="flex flex-col gap-[.6rem]">
            <div className="overflow-hidden rounded-lg">
              <img
                className="rounded-lg w-full h-[200px] object-cover hover:scale-[1.25] transition-[.6s] duration-[.6s] brightness-[.9]"
                src={image}
                alt=""
              />
            </div>
            <div className="">
              <div className="text-center">{name}</div>
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
        </Link>
      )
    })
  } else {
    display = 'No Characters Found :/'
  }

  return <>{display}</>
}

export default Card
