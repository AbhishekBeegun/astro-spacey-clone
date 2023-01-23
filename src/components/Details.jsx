import React from 'react'

const Details = ({link,h1,h2,h3,p,background}) => {
  return (
    <div class="bg-black px-5 pt-24 lg:px-44 lg:pt-24">
        <div class="h-full text-white">
            <a href="/" class="flex items-center gap-1 font-medium p-2"> 
            &#60; Back To Launches
           </a>
            <a href={link} target="_blank"
            style={{
                backgroundImage : `url(${background})`
              }}
            class="bg-cover h-[50vh] lg:h-[70vh] flex justify-center items-center">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2839 11.134C17.9506 11.5189 17.9506 12.4811 17.2839 12.866L6.71601 18.9674C6.04934 19.3523 5.21601 18.8712 5.21601 18.1014L5.21601 5.8986C5.21601 5.1288 6.04934 4.64768 6.71601 5.03258L17.2839 11.134Z" fill="white"/>
                </svg>
            
            </a>
            <div class="py-10 flex flex-col gap-2">
                <h2 class="text-xl ">{h2}</h2>
                <h1 class="text-5xl">{h1}</h1>
            </div>

            <div class="flex flex-col lg:flex-row gap-4">
                <h3 class="lg:w-[50%]">{h3}</h3>
                <p class="lg:w-[50%]">{p}</p>
            </div>
        </div>
    </div>
  )
}

export default Details