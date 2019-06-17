import React from 'react'

const Project = ({ title, link, children }) => {
  return (
    <div className="w-full md:w-1/3 text-sm mb-6 md:mb-0 px-2">
      <a className="font-semibold hover:underline mb-2 block" href={link}>
        {title}
      </a>

      <div className="">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Project
