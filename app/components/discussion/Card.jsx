"use client"
import React from 'react';
import { UseAuth } from '../../context/AuthContext';
import { UsePost } from '../../context/PostContext';
import { BiSolidLike } from "react-icons/bi";
import Link from 'next/link';


export default function Card({ post }) {
  const { id, title, author, createdAt, likes, comments } = post;
  const { handleLike } = UsePost();
  const { user } = UseAuth();

  if(user)return (
    <div className='bg-[#f5f6fd] p-6 rounded-xl mb-4 hover:brightness-95'>
      <div className='flex items-start'>
        <div className='flex gap-1 flex-col items-center justify-between mx-6'>
          <span className='font-semibold text-xl text-blue-500'>{likes.length}</span>
          <BiSolidLike onClick={()=>handleLike(id, user.uid)} className={`text-2xl text-blue-500 ${likes.includes(user?.uid) ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-700 cursor-pointer`} />
        </div>
        <div className='flex-1 mx-2 flex justify-between flex-col'>
        <Link href={`/discussion/${id}`}>
          <div className='text-xl font-medium mb-2 hover:text-blue-800 cursor-pointer'>{title}</div>
        </Link>
          <div className='flex items-center text-gray-500 text-sm'>
            <span className='text-green-600'>{author.name}</span>
            <span className='mx-2'>•</span>
            <span>{createdAt.toDate().toLocaleDateString()}</span>
            <span className='mx-2'>•</span>
            <span className='flex text-red-600'>{comments.length} replies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

