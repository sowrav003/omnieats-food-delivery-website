import { team } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div key={member.id} className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
              <div className="absolute inset-0">
                <Image src={member.image} alt={member.title} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="absolute top-0 left-8 bg-[#fff8f1] text-sm font-bold text-gray-800 p-3 rounded-b-md shadow">{member.description}</span>
                </div>

                <div>
                  <p className="text-sm text-orange-300 mb-1">{member.des === 'business' ? 'Signup as a business' : 'Signup as a rider'}</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">{member.title === 'Become a Rider' ? 'Ride with us' : member.title}</h3>
                  <div className="mt-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team