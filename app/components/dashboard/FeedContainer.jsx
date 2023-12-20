import Header from './Header'
import Card from './Card'
import BannerButton from '../buttons/BannerButton'

export default function FeedContainer() {
  const nudge_data = [
    {
      id: 1,
      title: 'Using recycle bin and trash can side by side with proper labelling',
      category: 'Waste Management',
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
    {
      id: 2,
      title: 'Using renewable fuel vehicles over fossil fuel powered vehicles',
      category: 'Sustainable Development',
      date: '2022-09-09',
      author: 'Jay Doe',
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
    {
      id: 3,
      title: 'Companies should adopt right to repair',
      category: 'E-waste management',
      date: '2023-09-09',
      author: 'Jai Dube',
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
          <BannerButton color="#05285b" title='Create Now' />
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