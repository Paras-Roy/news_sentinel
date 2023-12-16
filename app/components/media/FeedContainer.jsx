import Header from './Header'
import Card from './Card'
import ButtonLarge from '../buttons/ButtonLarge'

export default function FeedContainer() {
  const articles_data = [
    {
      id: 1,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'महिला आरक्षण बिल पर "AAP" की कई आपत्तियां, आतिशी ने कहा-महिलाओं को बेवकूफ बनाया गया',
      date: '19 Sept 2023',
      photo: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/aatishi-sixteen_nine.jpg?size=178:99',
      desc : 'आगे AAP नेता आतिशी ने "आजतक" से कहा कि आम आदमी पार्टी हाउस के फ्लोर पर बिल के संशोधन की मांग करेगी. हम महिलाओं के आरक्षण का समर्थन करते हैं लेकिन महिला आरक्षण बिल के मुताबिक बिल पास होने के बाद जनगणना और डीलिमिटेशन होगा में 3 से 4 साल लग जाएंगे. ये झुनझुना देकर महिलाओं को बेवकूफ़ बनाने की कोशिश है',
      sentiment :
      {
        type: 'Negative',
        score: 0.9
      }
    },
    {
      id: 2,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'महिला आरक्षण बिल पर "AAP" की कई आपत्तियां, आतिशी ने कहा-महिलाओं को बेवकूफ बनाया गया',
      date: '19 Sept 2023',
      photo: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/aatishi-sixteen_nine.jpg?size=178:99',
      desc : 'आगे AAP नेता आतिशी ने "आजतक" से कहा कि आम आदमी पार्टी हाउस के फ्लोर पर बिल के संशोधन की मांग करेगी. हम महिलाओं के आरक्षण का समर्थन करते हैं लेकिन महिला आरक्षण बिल के मुताबिक बिल पास होने के बाद जनगणना और डीलिमिटेशन होगा में 3 से 4 साल लग जाएंगे. ये झुनझुना देकर महिलाओं को बेवकूफ़ बनाने की कोशिश है',
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
      title: 'महिला आरक्षण बिल पर "AAP" की कई आपत्तियां, आतिशी ने कहा-महिलाओं को बेवकूफ बनाया गया',
      date: '19 Sept 2023',
      photo: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/aatishi-sixteen_nine.jpg?size=178:99',
      desc : 'आगे AAP नेता आतिशी ने "आजतक" से कहा कि आम आदमी पार्टी हाउस के फ्लोर पर बिल के संशोधन की मांग करेगी. हम महिलाओं के आरक्षण का समर्थन करते हैं लेकिन महिला आरक्षण बिल के मुताबिक बिल पास होने के बाद जनगणना और डीलिमिटेशन होगा में 3 से 4 साल लग जाएंगे. ये झुनझुना देकर महिलाओं को बेवकूफ़ बनाने की कोशिश है',
      sentiment :
      {
        type: 'Negative',
        score: 0.7
      }
    },
    {
      id: 4,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'महिला आरक्षण बिल पर "AAP" की कई आपत्तियां, आतिशी ने कहा-महिलाओं को बेवकूफ बनाया गया',
      date: '19 Sept 2023',
      photo: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/aatishi-sixteen_nine.jpg?size=178:99',
      desc : 'आगे AAP नेता आतिशी ने "आजतक" से कहा कि आम आदमी पार्टी हाउस के फ्लोर पर बिल के संशोधन की मांग करेगी. हम महिलाओं के आरक्षण का समर्थन करते हैं लेकिन महिला आरक्षण बिल के मुताबिक बिल पास होने के बाद जनगणना और डीलिमिटेशन होगा में 3 से 4 साल लग जाएंगे. ये झुनझुना देकर महिलाओं को बेवकूफ़ बनाने की कोशिश है',
      sentiment :
      {
        type: 'Neutral',
        score: 0.8
      }
    },
    {
      id: 5,
      channel_name: 'Aaj Tak',
      channel_logo: 'https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png',
      title: 'महिला आरक्षण बिल पर "AAP" की कई आपत्तियां, आतिशी ने कहा-महिलाओं को बेवकूफ बनाया गया',
      date: '19 Sept 2023',
      photo: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/aatishi-sixteen_nine.jpg?size=178:99',
      desc : 'आगे AAP नेता आतिशी ने "आजतक" से कहा कि आम आदमी पार्टी हाउस के फ्लोर पर बिल के संशोधन की मांग करेगी. हम महिलाओं के आरक्षण का समर्थन करते हैं लेकिन महिला आरक्षण बिल के मुताबिक बिल पास होने के बाद जनगणना और डीलिमिटेशन होगा में 3 से 4 साल लग जाएंगे. ये झुनझुना देकर महिलाओं को बेवकूफ़ बनाने की कोशिश है',
      sentiment :
      {
        type: 'Negative',
        score: 0.5
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