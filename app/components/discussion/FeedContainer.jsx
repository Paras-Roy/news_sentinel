"use client"
import Header from './Header'
import Card from './Card'

import { UsePost } from '@/app/context/PostContext'

export default function FeedContainer() {
  const { posts } = UsePost();
  return (
    <div className='w-3/4 mx-auto rounded-2xl gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      <Header />
      <div className='flex justify-center items-center px-6 m-4'>
        <div className='text-2xl font-medium text-[#888]'>Recent Posts</div>
      </div>

      <div className='flex justify-center items-center px-6 mx-4'>
        <div className='border-t-2 border-[#e5e5e5] w-full'></div>
      </div>

      <div className='flex-1 mx-6 p-4 gap-4 rounded-xl flex flex-col flex-wrap'>
        {
          posts?.map((post) => {
            return (
                <Card key={post.id} post={post} />
            )
          }
          )
        }
      </div>

    </div>
  )
}