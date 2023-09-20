import React from 'react'
import { FaSortAmountDown } from 'react-icons/fa'

export default function ButtonLarge(props) {
    const subtitle = props.subtitle
    const title = props.title
    const onClick = props.onClick
    return (
        <div className='flex justify-center cursor-pointer shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-2xl gap-3 p-6 items-center transition-all hover:shadow-none'>
            <div className='flex justify-center items-center'>
                <FaSortAmountDown className='text-slate-400' size={'40px'}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className=' text-slate-400'>{subtitle}</span>
                <span className='font-bold'>{title}</span>
            </div>
        </div>
    )
}
