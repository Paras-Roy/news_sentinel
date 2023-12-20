"use client"

import React, { useState } from 'react';
import { UsePost } from "@/app/context/PostContext"
import { UseAuth } from "@/app/context/AuthContext"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import Link from 'next/link';


export default function Page({ params: { id } }) {
    const { posts, handleLike, addComment } = UsePost();
    const [comment, setComment] = useState('');
    const { user } = UseAuth();
    const handleComment = async (e) => {
        e.preventDefault();
        const tempComment = {
            content: comment,
            author: {
                name: user.displayName,
                id: user.uid
            },
            createdAt: new Date()
        }
        await addComment(id, tempComment);
        setComment('');
    }

    const post = posts.find(post => post.id === id);
    if (post && user) return (
        <div className='flex gap-2 w-full rounded-3xl bg-white h-full no-scrollbar overflow-y-scroll'>
            <div className='w-3/4 mt-9 mx-auto rounded-2xl gap-2 flex flex-col h-full'>
                <div className='flex justify-between items-center px-6 m-4'>
                    <Link href={`/discussion`} className="text-2xl font-medium flex items-center gap-4 text-[#888] hover:text-[#444] cursor-pointer">
                        <MdOutlineKeyboardBackspace className='inline-block text-2xl text-[#888]]' />
                        <span>Go Back</span>
                    </Link>

                    <div className='flex items-end gap-2'>
                        <BiSolidLike onClick={() => handleLike(post.id, user.uid)} className={`w-9 h-9 text-2xl text-blue-500 ${post.likes.includes(user?.uid) ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-700 cursor-pointer`} />
                        <div className='text-2xl font-medium text-[#888]'>{post.likes.length}</div>
                    </div>
                </div>
                {/* title in the center */}
                <div className='flex rounded-2xl  flex-col gap-4 justify-center items-center p-6 m-4'>
                    <div className='text-3xl font-medium text-[#333]'>{post.title}</div>
                    <div className='flex items-center font-medium text-gray-500 text-sm'>
                        <span>{post.author.name}</span>
                        <span className='mx-4'>•</span>
                        <span>{post?.createdAt.toDate().toLocaleDateString()}</span>
                    </div>
                </div>
                {/* content */}
                <div className='flex border rounded-2xl bg-[#f5f6fd] flex-col justify-center p-6 m-4'>
                    <div className='text-lg font-medium text-[#333]'>{post.content}</div>
                </div>
                {/* comments */}
                <div className='flex flex-col gap-4 p-6 m-2'>
                    {/* add comment box */}
                    <div className='flex flex-col gap-4 justify-center m-2'>
                        <div className='flex flex-col gap-2'>
                            <textarea placeholder='Share your thoughts' onChange={(e) => setComment(e.target.value)} value={comment} className='border rounded-xl p-4 text-lg font-medium text-[#333]'></textarea>
                            <div className='flex justify-end'>
                                <button onClick={handleComment} className='bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2'>Add Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-2xl font-medium text-blue-500'>Comments</div>
                    <div className='flex flex-col gap-4 justify-center m-2'>
                        {
                            post.comments.map((comment, index) => {
                                return (
                                    <div key={index} className='flex border rounded-xl p-4 flex-col gap-4'>
                                        <div className='flex font-medium justify-between text-gray-400 text-sm'>
                                            <span className="text-green-600">{comment.author.name}</span>
                                            {/* <span className='mx-4'>•</span> */}
                                            <span>{comment.createdAt.toDate().toLocaleDateString()}</span>
                                        </div>
                                        <div className='text-lg font-medium text-[#333]'>{comment.content}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}