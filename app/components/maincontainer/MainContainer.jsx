
import React from 'react'

export default function MainContainer({children}) {
  return (
    <div className="bg-white flex-1 rounded-l-[30px] p-10 shadow-2xl overflow-y-scroll">
        {children}
    </div>
  )
}
