import React from 'react';
import { GrLike } from 'react-icons/gr';
import { BiSolidLike } from "react-icons/bi";


export default function Card({ post }) {
  const { title, author, createdAt, likes, comments } = post;

  return (
    <div className='bg-[#f5f6fd] p-6 rounded-xl mb-4 hover:brightness-95 cursor-pointer'>
      <div className='flex items-start'>
        <div className='flex gap-1 flex-col justify-between mx-6'>
          <span className='font-semibold text-lg text-blue-500'>{likes}</span>
          <BiSolidLike className='h-6 w-6 text-blue-500 mr-1' />
        </div>
        <div className='flex-1 mx-2 flex justify-between flex-col'>
          <div className='text-xl font-medium mb-2'>{title}</div>
          <div className='flex items-center text-gray-500 text-sm'>
            <span className='text-green-600'>{author.name}</span>
            <span className='mx-2'>•</span>
            <span>{createdAt}</span>
            <span className='mx-2'>•</span>
            <span className='flex text-red-600'>{comments.length} replies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

