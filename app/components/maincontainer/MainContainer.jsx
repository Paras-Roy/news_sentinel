
import React from 'react'

export default function MainContainer({children}) {
  return (
    <div className="bg-[#f5f6fd] flex-1 rounded-l-[30px] p-6 shadow-2xl overflow-y-scroll">
        {children}
    </div>
  )
}
