/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Card from '@/components/card/Card'
import Option from '@/components/filter/Option'
import Footer from '@/components/footer/Footer'
import Loading from '@/components/loading/Loading'
import logo from '@/public/assets/logo.png'
import { EpisodeInfoProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [results, setResults] = useState([] as any[])
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<EpisodeInfoProps>({
    air_date: '',
    name: ''
  })
  const { air_date, name } = info
  const [id, setID] = useState(1)
  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await fetch(api).then(res => res.json())
      setInfo(data)
      setLoading(false)
      const characterData = await Promise.all(
        data.characters.map(async (x: RequestInfo | URL) => {
          const res = await fetch(x)
          return await res.json()
        })
      )
      setResults(characterData)
    }
    fetchData()
  }, [api])

  return (
    <main className="h-full">
      <div className="container flex flex-col gap-[1rem]">
        <div className="h-[200px] relative">
          <Link href="/">
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={logo}
              width={400}
              height={400}
              alt=""
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col gap-[1rem] pb-[2rem]">
          <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col justify-between items-center gap-[1rem] sm:flex-row">
            <h1 className="text-center">
              Episode name :{' '}
              <span className="text-primary">
                {name === '' ? 'Unknown' : name}
              </span>
            </h1>
            <h5 className="text-center">
              Air Date: {air_date === '' ? 'Unknown' : air_date}
            </h5>
            <div className="flex gap-[1rem]">51 Episodes</div>
          </div>
          <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
            <div className="bg-[#F3F4F6] rounded-lg h-fit p-[1rem] flex flex-col gap-[1rem]">
              <div>Pick Episodes</div>
              <Option name="Episode" changeID={setID} total={51} />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="bg-[#F3F4F6] rounded-lg p-[1rem] grid gap-[2rem]">
                {loading ? (
                  <div className="m-auto">
                    <Loading />
                  </div>
                ) : (
                  <Card results={results} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page
