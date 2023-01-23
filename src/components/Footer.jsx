import React from 'react'

const Footer = () => {
  const socials = ["twitter","youtube","flickr","linkdin","privacy policy","supplier"];

  return (
    <div className="h-[10vh] bg-black flex flex-col lg:flex-row justify-center items-center lg:gap-20 p-10">
    <p className="text-xs text-slate-500">SPACE Y 2023</p>
    
    <ul className="text-white text-xs flex justify-center items-center uppercase font-bold gap-2 lg:gap-20">
        {socials.map(social => {
          return (
            <a key={social} className="">
              <p>{social}</p>
            </a>
          );
        })}
    </ul>
    </div>
  )
}

export default Footer