/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Data = {
  name: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
  gender: string
  image: string
  status: string
  species: string
  episode: string[]
}

const CardDetails = () => {
  const router = useRouter()
  const { id } = router.query

  const [fetchedData, updateFetchedData] = useState<Data>({} as Data)
  const { name, location, origin, gender, image, status, species, episode } =
    fetchedData

  const api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    ;(async function () {
      const data = await fetch(api).then(res => res.json())
      updateFetchedData(data)
    })()
  }, [api])
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === 'Dead') {
            return <div className="badge bg-danger fs-5">{status}</div>
          } else if (status === 'Alive') {
            return <div className=" badge bg-success fs-5">{status}</div>
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Episode: </span>
            {episode}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
