import { HashLink as Link } from 'react-router-hash-link'

interface HeroI {
  type: 'HERO' | 'BANNER'
  title: string
  lead: string
  url: string
}

export const Hero: React.FC<HeroI> = ({ type, title, lead, url }) => {
  const isBanner = type === 'BANNER'

  return (
    <article className={`relative w-full flex px-4 ${!isBanner ? 'h-screen items-center bg-center' : 'h-80 md:h-[500px] pt-6 items-start bg-contain bg-bottom bg-[#c5c5c5]'} bg-no-repeat`} style={{ backgroundImage: `url(${url})` }}>
      <div className={`container space-y-4 text-center ${isBanner ? 'text-darkblue' : 'text-lightpink'}`}>
        <p className='text-4xl font-semibold uppercase tracking-widest'>{title}</p>
        <p className='text-lg font-light md:text-xl'>{lead}</p>
      </div>
      {isBanner
        ? null
        : (
          <Link className='absolute left-1/2 bottom-4 -translate-x-1/2 hover:scale-125 transition-transform' to='/#next'>
            <i className='text-5xl text-white bx bx-arrow-out-down-square-half' />
          </Link>
          )}
    </article>
  )
}
