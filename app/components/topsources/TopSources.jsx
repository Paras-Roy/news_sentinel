import Image from 'next/image';

export default function TopSources(props) {
    const { topSources } = props;

    return (
        <div className='flex py-4 flex-col items-center w-full h-full no-scrollbar overflow-y-scroll mt-4'>
            <h1 className='text-2xl font-bold'> Top Sources </h1>
            <div className='flex flex-col w-full gap-8 px-4 mt-8'>

                {
                    topSources.map((source) => (
                        <div key={source.id} className='flex items-center'>
                            <div className='flex w-full justify-between h-12'>
                                <div className="flex gap-4">
                                <Image src={source.logo} alt={source.name} width={50} height={50} style={{ borderRadius: '50%' }} />
                                    <h1 className='text-sm font-semibold flex items-center'> {source.name} </h1>
                                </div>
                                    <h2 className='text-sm flex items-center'> {source.value} </h2>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
