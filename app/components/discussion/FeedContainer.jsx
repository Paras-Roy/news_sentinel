"use client"
import Header from './Header'
import Card from './Card'
import { useState } from 'react'

import { UsePost } from '@/app/context/PostContext'
import { UseAuth } from '@/app/context/AuthContext'

export default function FeedContainer() {
  const { posts, addPost } = UsePost();
  const { user } = UseAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  const handleCreatePost = async(e) => {
    e.preventDefault();
    const tempPost = {
      author : {
        name: user.displayName,
        id: user.uid
      },
      title: title,
      content: content,
      comments : [],
      createdAt: new Date(),
      likes: [],
      };
    await addPost(tempPost);
    setTitle('');
    setContent('');
    toggleModal();
  }
  return (
    <div className='w-3/4 mx-auto rounded-2xl gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      {
        modal && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white flex flex-col gap-6 w-1/2 h-3/4 rounded-xl p-12'>
              <div className='text-3xl font-medium text-[#888]'>Create Post</div>
              <div className='flex flex-1 flex-col gap-4 mt-4'>
                <input type='text' className='border-2 text-lg border-[#e5e5e5] rounded-xl p-4' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title' />
                <textarea className='border-2 border-[#e5e5e5] rounded-xl p-4 flex-1'onChange={(e) => setContent(e.target.value)} value={content} placeholder='Content' />
                <div className='flex justify-end gap-4'>
                  <div className='rounded-xl p-2 px-4 cursor-pointer flex bg-blue-500 items-center gap-2 text-white hover:brightness-90'>
                    <div onClick={handleCreatePost} className='text-xl font-medium'>Create Post</div>
                  </div>
                  <div onClick={toggleModal} className='rounded-xl p-2 px-4 cursor-pointer flex bg-red-500 items-center gap-2 text-white hover:brightness-90'>
                    <div className='text-xl font-medium'>Cancel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <Header />
      <div className='flex justify-between items-center px-6 m-4'>
        <div className='text-2xl font-medium text-[#888]'>Recent Posts</div>
        {/* button to create new post */}
        <div onClick={toggleModal} className='rounded-xl p-2 px-4 cursor-pointer flex bg-blue-700 items-center gap-2 text-white hover:brightness-90'>
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          
          <div className='text-xl font-medium'>Create Post</div>
        </div>
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