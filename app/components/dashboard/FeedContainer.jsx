"use client"
import Header from './Header'
import Card from './Card'
import BannerButton from '../buttons/BannerButton'
import { getCategories } from '@/app/utils/nlp'

import { useState } from 'react'
import { UseNudge } from '@/app/context/NudgeContext'
import { UseAuth } from '@/app/context/AuthContext'
import { stringify } from 'postcss'

export default function FeedContainer() {
  // const { nudges, addNudge } = UseNudge();
  const { user } = UseAuth();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('')
  const [parameters, setParameters] = useState([]);
  const [modal, setModal] = useState(false);
  const [parametersFound, setParametersFound] = useState(false);

  const toggleModal = () => {
    console.log("new nudge?")
    setModal(!modal);
    setTitle('');
    setCategory('');
    setParameters([]);
    setParametersFound(false);
  }

  const findParameters = async() => {
    const result = await getCategories(title);
    console.log(result);
    setParameters(result);
    setParametersFound(true);
  }

  const handleCreateNudge = async(e) => {
    e.preventDefault();
    const tempNudge = {
      author : {
        name: user.displayName,
        id: user.uid
      },
      title: title,
      parameters : parameters,
      createdAt: new Date(),
      };
    await addNudge(tempNudge);
    setTitle('');
    setCategory('');
    setParameters([]);
    toggleModal();
    setParametersFound(false);
  }
  const nudge_data = [
    {
      id: 1,
      title: 'Encourage use of electric vehicle usage',
      category: 'Energy Management',
      date: '2021-09-09',
      author: 'John Doe',
      parameters: [
        {
          id: 1,
          title: 'Recycle bin and trash can',
        },
        {
          id: 2,
          title: 'Proper labelling',
        },
      ],
    },
  ]
  return (
    <div className='flex-[4] bg-white rounded-2xl gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      {
        modal && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white flex flex-col gap-6 w-1/2 h-3/4 rounded-xl p-12'>
              <div className='text-3xl font-medium text-[#888]'>Create Nudge</div>
              <div className='flex flex-1 flex-col gap-4 mt-4'>
                <input type='text' className='border-2 text-lg border-[#e5e5e5] rounded-xl p-4' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Nudge Title' required/>
                {!parametersFound && <button onClick = {findParameters} className='border-2 text-lg border-[#e5e5e5] rounded-xl p-4'>Find Parameters</button>}
                {parametersFound && <div className='flex justify-end gap-4'>
                  <div className=''>{parameters}</div>
                </div>}
              </div>
            </div>
          </div>
        )
      }
      
      <Header />
      <div className="flex shadow-sm flex-col min-h-[350px] justify-around rounded-2xl flex-1 px-6 m-9"
        style={
          {
            backgroundImage: `url('/banner-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }
        }>
        <div className="text-lg text-[#05285b] font-medium tracking-widest">
          AI POWERED
        </div>
        <div className="text-4xl text-[#05285b] max-w-xl font-medium">
          Monitor a New Nudge With Our Wide Range of Parameters
        </div>
        <div className="max-w-[150px]">
          <BannerButton onClick={toggleModal} color="#05285b" title='Create Now' />
        </div>
      </div>

      {/* Title "Recent Nudges" */}
      <div className='flex justify-center items-center px-6 m-4'>
        <div className='text-4xl font-semibold text-[#888]'>Recent Nudges</div>
      </div>


      <div className='flex-1 flex flex-wrap items-center'>
        {
          nudge_data.map((nudge) => {
            return (
              <Card key={nudge.id} nudge={nudge} />
            )
          }
          )
        }
      </div>


    </div>
  )
}