import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

export default function ButtonNormal(props) {
    const title = props.title
    const onClick = props.onClick
  return (
    <span className="bg-[#3426ae] font-semibold text-sm text-white flex px-4 justify-center gap-0 shadow-md cursor-pointer items-center rounded-full transition-all hover:gap-1">
        {title}
        <AiOutlineRight className="ml-2 text-base" />
    </span>
  )
}
