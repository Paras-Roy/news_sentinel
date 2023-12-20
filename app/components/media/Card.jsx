import Image from 'next/image';
import ButtonNormal from '../buttons/ButtonNormal';

export default function Card({ article }) {
  const data = article;

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
      <div className='flex flex-col bg-[#f5f6fd] rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-5/12 p-6 m-8'>
        <div className='flex flex-row justify-between'>
          <div className='flex'>
            <Image src={data.channel_logo} alt={data.channel_name} width={50} height={50} style={{ borderRadius: '50%' }} />
            <div className='flex flex-col font-bold ml-4'>
              {data.channel_name}
              <div className='text-sm font-medium text-gray-500'>{data.date}</div>
            </div>
          </div>
            <ButtonNormal title='View Article' />
        </div>
        <div className='flex flex-col mt-4'>
          <div className='text-xl'>{data.title}</div>
        </div>
        <div className='flex flex-col mt-4'>
          {/* <Image src={data.photo} alt={data.title} width={500} height={300} className='shadow-lg' style={{ borderRadius: '12px' }} /> */}
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
        </div>
      </div>
    </>
  );
}
