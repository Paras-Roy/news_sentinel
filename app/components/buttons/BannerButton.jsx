import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

export default function ButtonNormal(props) {
    const title = props.title
    const onClick = props.onClick
    const backgroundColor = props.color || '#3426ae'
    return (
        <span onClick={onClick} className="font-semibold text-sm text-white flex py-3 justify-center gap-0 shadow-md cursor-pointer items-center rounded-full transition-all hover:brightness-125"
              style={{ backgroundColor }}
        >
            {title}
            <span className="ml-2 bg-white rounded-full p-1">
                <AiOutlineRight className="text-base" style={{ color: backgroundColor }} />
            </span>
        </span>
    )
}