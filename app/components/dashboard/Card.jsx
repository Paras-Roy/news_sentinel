import Image from 'next/image';
import ButtonNormal from '../buttons/ButtonNormal';
import Link from 'next/link';

export default function Card({ nudge }) {
  const data = nudge;

  // Define styles for the sentiment bar
  const getSentimentBarStyles = () => {
    let barColor;
    switch (data.sentiment.type) {
      case 'Negative':
        barColor = 'red';
        break;
      case 'Neutral':
        barColor = 'blue';
        break;
      case 'Positive':
        barColor = 'green';
        break;
      default:
        barColor = 'gray'; // Default to gray for unknown sentiment type
        break;
    }

    const barWidth = `${data.sentiment.score * 100}%`; // Convert score to percentage

    return {
      backgroundColor: barColor,
      width: barWidth,
      height: '10px', // Adjust the height as needed
      borderRadius: '4px',
    };
  };

  return (
    <>
      <div className='flex flex-col bg-[#f5f6fd] shadow-md rounded-xl w-3/12 gap-4 p-6 m-8'>
        <div className='flex flex-row justify-between'>
          <div className='flex'>
            <div className='flex flex-col font-bold'>
              {data.category}
              <div className='text-sm font-bold text-gray-500'>{data.date}</div>
            </div>
          </div>
          <Link href={`/dashboard/${data.id}`}>
          <ButtonNormal title='Open' />
          </Link>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='text-xl'>{data.title}</div>
        </div>
        {/* <div className='flex flex-col mt-4'>
          <div className='flex flex-row gap-4 items-center mt-4'>
            <div
              className='text-md font-bold mr-2'
              style={{ color: getSentimentBarStyles().backgroundColor }}
            >
              {data.sentiment.type}
            </div>
            <div className='h-[10px] w-full bg-gray-300 rounded-[4px]'>
              <div
                className='bg-gray-200'
                style={getSentimentBarStyles()}
              ></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
