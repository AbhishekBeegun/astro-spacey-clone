import React from 'react'

const Sec = ({h2,h1,btn,bcg,linkto}) => {
  const background = bcg;
  const arrowdown = <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="white" width="25" clip-rule="evenodd" viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" fill="white"/></svg>;
  return (
    <div style={{
      backgroundImage : `url(${background})`
    }}
    className="h-screen bg-red-500 relative uppercase text-white bg-center bg-cover">
      <div className="absolute bottom-10 left-[50%] right-[50%]  text-6xl animate-bounce">
      {arrowdown}
      </div>

      <div className="p-10 text-start absolute bottom-28 lg:left-32 flex flex-col items-start gap-10">
      <div>
      <h2 className="lg:text-lg ">{h2}</h2>
      <h1 className="text-3xl lg:text-6xl ">{h1}</h1>
      </div>
      <a href={linkto} className="px-10 py-4 relative border-2 border-white group overflow-hidden  text-white inline-block">
       <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
       <span className="relative group-hover:text-black uppercase">{btn}</span>
      </a>
      </div>
      

    </div>
  )
}

export default Sec