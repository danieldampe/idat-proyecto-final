const lists = [
  {
    title: 'Monogram',
    items: [
      '305 King St. W.',
      'Suite 502',
      'Kitchener, ON',
      'Canada'
    ]
  },
  {
    title: 'Quick Links',
    items: [
      'Home',
      'How it Works',
      'Shop',
      'Download'
    ]
  },
  {
    title: 'Help',
    items: [
      'FAQs',
      'Support Center',
      'Shipping and Sales'
    ]
  },
  {
    title: 'Information',
    items: [
      'About Us',
      'Work with us',
      'Privacy Policy',
      'Terms of Use',
      'Terms of Sale',
      'Press Kit'
    ]
  }
]

export const Footer: React.FC = () => {
  return (
    <footer className='px-4 md:py-4 lg:mt-8 lg:pb-16 text-lightpink bg-darkblue'>
      <div className='container flex justify-between gap-y-10 flex-wrap text-sm font-light'>
        {lists.map(({ title, items }, index) => (
          <div className='basis-1/2 md:basis-1/4' key={index}>
            <ul className='space-y-1.5' key={index}>
              <p className='font-semibold uppercase text-xs tracking-wide'>{title}</p>
              {items.map((item, index) => (
                <li key={index}>
                  <a className='hover:underline hover:text-[#e28f74] decoration-solid' href='/'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
