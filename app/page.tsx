import Image from 'next/image'
// import characters from 'public/assets/characters.jpg'
// import episodes from 'public/assets/episodes.jpg'
// import locations from 'public/assets/locations.jpg'
import logo from 'public/assets/logo.png'

export default function Home() {
  return (
    <main className="bg-[#2779A7]">
      <div className="grid h-screen relative">
        <Image
          src={logo}
          alt=""
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        />
        <div className="relative bg-gray-600 row-start-1 col-start-1 row-end-2 col-end-3 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/assets/characters.jpg')] bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.4s] duration-[.4s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold">
            Characters
          </div>
        </div>
        <div className="relative bg-orange-200 row-start-2 col-start-1 row-end-3 col-end-2 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/assets/episodes.jpg')] bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.4s] duration-[.4s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold">
            Episodes
          </div>
        </div>
        <div className="relative bg-gray-500 row-start-2 col-start-2 row-end-3 col-end-3 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/assets/locations.jpg')] bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.4s] duration-[.4s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold">
            Locations
          </div>
        </div>
      </div>
    </main>
  )
}
