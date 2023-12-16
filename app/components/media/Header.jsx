import {BiSearchAlt} from 'react-icons/bi'

export default function Header() {
  return (
    <div className='w-full flex text-black items-center px-9 h-24'>
      <div className='w-full flex justify-around gap-2'>
        <span className='text-3xl font-medium flex-[2]'>Media Feedback</span>
        <div className='flex-[1] flex justify-end'>
          <button className='bg-[#f5f6fd] h-10 w-10 rounded-l-lg flex items-center justify-center'>
            <BiSearchAlt className='text-2xl' />
          </button>
        </div>
        <input type="text" placeholder="Search articles..." className="bg-[#f5f6fd] h-10 px-5 flex-1 rounded-r-lg text-sm focus:outline-none" />
      </div>
    </div>
  )
}