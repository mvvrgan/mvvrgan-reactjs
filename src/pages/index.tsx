import Head from 'next/head';
import Script from 'next/script';
import { Typewriter } from 'react-simple-typewriter'
import { Experience } from '@components/ExperienceComponent';
import { ElementType, useEffect } from 'react';

export default function Home() {
    const words = ["Programmer", "Game Developer", "Problem Solver", "Web Developer", "Creative Thinker"]
    
    return (
        <div>
            <Script src="https://kit.fontawesome.com/b1f04350ee.js" crossOrigin="anonymous" />
            <Script src={'/js/faviconLoader.js'} />

            <Head>
                <meta charSet="utf-8" />
                <title>mvvrgan&apos;s portfolio</title>
                <meta name="description" content="🧑‍💻 Explore my past experience & learn a little bit about me within this tidy Website I have created!" />
                <meta color='#2b2d31' name="theme-color" content="#2b2d31" />
                <link rel="icon" href={'/me.png'} />
            </Head>

            <div className="p-8 md:grid grid-cols-3">
                <div className="col-span-1">
                    {/* Empty Col 1 */}
                </div>
                
                {/* Main Body */}
                <div className="col-span-1 md:pt-[15rem] max-md:pt-[10rem]">
                    {/* Hello Header */}
                    <div className="relative flex place-items-center mb-10">
                        <h1 className="absolute md:-left-[6.5rem] max-md:-top-20 text-7xl font-mono font-bold select-none">👋</h1>
                        <div>
                            <h1 className="text-5xl font-mono font-bold">Hi, I&apos;m Morgan</h1>
                            <h1 className="text-2xl font-mono mt-1">..a <Typewriter 
                                words={words} 
                                loop={0} 
                                cursor={true} 
                                delaySpeed={1250}
                                cursorStyle='_'
                            /></h1>
                        </div>
                    </div>

                    <div className='grid font-mono w-2/3 text-sm'>
                        <a className='flexplace-items-center mb-2 w-fit text-base justify-center p-3 bg-black text-white font-mono font-bold rounded-md hover:shadow-lg transition-all duration-300 select-none' href='https://discord.com/users/319877228936691713'>
                            Hire Me Here
                            <i className="ml-3 fa-solid fa-arrow-right-long"></i>
                        </a>
                        -or find me on Discord with the username <p className='font-bold text-[#5865F2]'>@mvvrgan</p>
                    </div>

                    {/* About Me */}
                    <div className="mt-10 border-t-2 border-stone-50 pt-7">
                        <h1 className="text-4xl font-mono font-bold mb-4">About Me</h1>
                        <p className="text-lg font-mono">From the 🇬🇧 United Kingdom, at 19 years old with experience in the Programming/Development field since 2018 (6 years). I have a variety of skills & knowledge, ranging from Programming, Object Orientated Programming (OOP/OO), SQL/RDBMS & NoSQL Database Design, Game Development & much more. I work a full stack, with a variety of Programming Languages such as Javascript, Typescript, Python, LuaU, C#, R and SQL.</p>
                    </div>

                    {/* Experiences */}
                    <div className="mt-10 border-t-2 border-stone-50 pt-7">
                        <h1 className="text-4xl font-mono font-bold mb-1">My Experience</h1>
                        <div className='grid grid-cols-1 pb-7 border-b-2 border-stone-50'>

                            <Experience 
                                imageSrc='/kecai-exp2.png' 
                                name='Kecai'
                                position='Game Developer & Programmer'
                                dateStarted='Jan 2024'
                                dateEnded='Present'
                                description="🌴 Responsible for the programming in Version 3. Using a type of Framework 'Order' I have gained skill in numerous Roblox Frameworks. Not much else can be said as this is a work in progress."
                                links={[
                                    { name: 'Game', url: 'https://www.roblox.com/games/5375160701/SPRING-Kecai-Restaurant' },
                                    { name: 'Group', url: 'https://www.roblox.com/groups/4594985/Kecai' },
                                    { name: 'Discord', url: 'https://discord.gg/kecai' }
                                ]}
                            />

                            <Experience 
                                imageSrc='/makisalon-exp1.png' 
                                name='Maki Salon'
                                position='Game Developer'
                                dateStarted='Jan 2024'
                                dateEnded='Present'
                                description="💈 Working on features within the game such as 'Certified' status which can be obtained through the Training process for an official role. This was made possible with an SQL server & API made with CRUD in mind. I had the task of also cleaning up bugs throughout group games."
                                links={[
                                    { name: 'Game', url: 'https://www.roblox.com/games/8633612740/LAUNCH-Maki-Salon-Spa' },
                                    { name: 'Group', url: 'https://www.roblox.com/groups/13828231/Maki-Salon' },
                                    { name: 'Discord', url: 'https://discord.gg/makisalon' }
                                ]}
                            />

                            <Experience 
                                imageSrc='/sakura-exp1.png' 
                                name='Sakura Kitchen'
                                position='Game Developer & Programmer'
                                dateStarted='Aug 2023'
                                dateEnded='March 2024'
                                description='🌸 Founded by an old friend of mine, I reached out upon development hires. Throughout my time at Sakura Kitchen I have been working on most aspects of the games - from fixing bugs & adding features to Version 1, to scripting systems within Version 2 (with Knit Framework), developing an API (Bun, TS, Elysia JS), a Discord Bot (Discord JS), a future Dashboard Website (using React Framework).'
                                links={[
                                    { name: 'Game', url: 'https://www.roblox.com/games/5510230042/TIPS-Sakura-Hibachi-Restaurant' },
                                    { name: 'Group', url: 'https://www.roblox.com/groups/6975354/Sakura-Kitchen' },
                                    { name: 'Discord', url: 'https://discord.gg/sakurakitchen' }
                                ]}
                            />

                            <Experience 
                                imageSrc='/brewblox-exp1.png' 
                                name='Brewblox'
                                position='Lead Programmer & Lead Game Developer'
                                dateStarted='May 2022'
                                dateEnded='Present'
                                description="☕ Founder & Lead Programmer of Brewblox. This project has been planned for the past 1/2 a year and will be developed on throughout the future as this is an ongoing project! The game consists of inventories, shops, cooking systems and a general roleplay experience. This project was created with the Knit Framework."
                                links={[
                                    { name: 'Game', url: 'https://www.roblox.com/games/10152758054/AI-Work-at-BrewBlox-Cafe' },
                                    { name: 'Group', url: 'https://www.roblox.com/groups/15197021/Brewblox' },
                                    { name: 'Discord', url: 'https://discord.gg/PRUS3hyJuQ' }
                                ]}
                            />

                            <Experience 
                                imageSrc='/glace-exp2.png' 
                                name='Glacé'
                                position='Game Developer'
                                dateStarted='May 2022'
                                dateEnded='Jan 2023'
                                description="🍦 My time at Glace was appreciated much as it matured me as a Programmer working with a large team. The programming consisted of problem solving, testing, implementing, etc. Glace made use of a full suite of tools using VSC, Rojo, Git, etc."
                                links={[
                                    { name: 'Game', url: 'https://www.roblox.com/games/364483307/Work-at-an-Ice-Cream-Parlor' },
                                    { name: 'Group', url: 'https://www.roblox.com/groups/2755821/Glac' },
                                    { name: 'Discord', url: 'https://discord.gg/glace' }
                                ]}
                            />

                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex place-items-center my-6 border-stone-50 pt-7">
                        <div className='text-lg'>
                            <h1 className="font-mono font-bold mb-1 select-none">Contact Me</h1>
                            <div className='text-xl grid grid-cols-5 gap-2 place-items-center'>
                                <a className='hover:scale-105 transition-all duration-500' href='https://discord.com/users/319877228936691713' target='_blank'>
                                    <i className="fa-brands fa-discord"></i>
                                </a>
                                <a className='hover:scale-105 transition-all duration-500' href='https://twitter.com/mvvrgan' target='_blank'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a className='mr-1 hover:scale-105 transition-all duration-500' href='https://www.roblox.com/users/284307731/profile' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.926 23.998L0 18.892L5.075.002L24 5.108ZM15.348 10.09l-5.282-1.453l-1.414 5.273l5.282 1.453z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <div className='ml-auto select-none'>
                            <h1 className='font-mono font-bold'>© 2024</h1>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    {/* Empty Col 3 */}
                </div>
            </div>
        </div>
    )
}