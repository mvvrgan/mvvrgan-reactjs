export function Experience ({ imageSrc, name, position, dateStarted, dateEnded, description, links }: { imageSrc: string, name: string, position: string, dateStarted: string, dateEnded: string, description: string, links: { name: string, url: string }[]}) {
    return (
        <div className='py-5'>
            <div className='relative flex h-20 overflow-clip'>
                <img className='w-full object-cover hover:scale-105 transition-all duration-500 select-none' src={imageSrc}></img>
                <h1 className='absolute bottom-0 p-3 text-white text-3xl font-mono font-bold select-none'>{name}</h1>
            </div>
            <div className='grid mt-3 font-mono text-lg justify-start place-items-start'>
                <div className='grid md:grid-cols-8 grid-cols-6 w-full justify-start'>
                    <p className='font-bold mr-2 md:col-span-2 col-span-1'>Position: </p>
                    <p className='col-span-6'>{position}</p>
                </div>
                <div className='grid md:grid-cols-8 grid-cols-6 w-full justify-start'>
                    <p className='font-bold mr-2 md:col-span-2 col-span-1'>Timeframe: </p>
                    <p className='col-span-6'>{dateStarted} - {dateEnded}</p>
                </div>
                <div className='grid md:grid-cols-8 grid-cols-6 w-full justify-start'>
                    <p className='font-bold mr-2 md:col-span-2 col-span-1'>Description: </p>
                    <p className='col-span-6'>{description}</p>
                </div>
                <div className='grid md:grid-cols-8 grid-cols-6 w-full justify-start'>
                    <p className='font-bold mr-2 md:col-span-2 col-span-1'>Links: </p>
                    <p className='col-span-6 select-none'> {links.map((link, index) => (
                        <span key={index}>
                            <a href={link.url} target='_blank' className='underline'>{link.name}</a>
                            {index !== links.length - 1 && ' | '}
                        </span>
                    ))}</p>
                </div>
            </div>
        </div>
    );
}