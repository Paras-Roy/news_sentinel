import Header from './Header'
import Card from './Card'
import ButtonLarge from '../buttons/ButtonLarge'

export default function FeedContainer() {
  const articles_data = [
    {
      id: 1,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'Women Reservation Bill : लोकसभा में सुबह 11 बजे से शाम 6 बजे तक चर्चा | Congress Vs BJP | PM Modi',
      date: '19 Sept 2023',
      photo: 'https://i.ytimg.com/vi/F5sdCtVK-EE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwQ-gBFUgFcNaRADE9Q1feA410oA',
      sentiment :
      {
        type: 'Neutral',
        score: 0.6
      }
    },
    {
      id: 2,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'Top 100 News : Women Reservation Bill | Congress Vs BJP | UP News | Ganesh Chaturthi | Khalistan',
      date: '19 Sept 2023',
      photo: 'https://i.ytimg.com/vi/y0CXY1xF6qI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn1o9-Kv9V99GV3KCmmqutnuRdOQ',
      sentiment :
      {
        type: 'Positive',
        score: 0.9
      }
    },
    {
      id: 3,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'Delhi Murder : दिल्ली में एक और हत्या, शव घर में ही छिपा दिया | Delhi Police | RK Puram | Crime News',
      date: '19 Sept 2023',
      photo: 'https://i.ytimg.com/vi/0EYLVCQB7jw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1N_vyCQ0jo0Z1zCVrzkjkXkm6-A',
      sentiment :
      {
        type: 'Negative',
        score: 0.9
      }
    },
    {
      id: 4,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'Women Reservation Bill : लोकसभा में सुबह 11 बजे से शाम 6 बजे तक चर्चा | Congress Vs BJP | PM Modi',
      date: '19 Sept 2023',
      photo: 'https://i.ytimg.com/vi/F5sdCtVK-EE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwQ-gBFUgFcNaRADE9Q1feA410oA',
      sentiment :
      {
        type: 'Positive',
        score: 0.9
      }
    },
  ]
  return (
    <div className='flex-[4] gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      <Header />


      <div className="flex items-center justify-evenly flex-1 p-4 m-4">
            <ButtonLarge subtitle="Sort by" title="Most Negative"/>
            <ButtonLarge subtitle="Sort by" title="Most Recent"/>
            </div>

      <div className='flex-1 flex flex-wrap items-center justify-center px-4'>
        {
          articles_data.map((article) => {
            return (
              <Card key={article.id} article={article} />
            )
          }
          )
        }
      </div>


    </div>
  )
}