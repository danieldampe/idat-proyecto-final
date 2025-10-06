import { useState } from 'react'

interface AccordionI {
  content?: string
}

export const Accordion: React.FC<AccordionI> = ({ content }) => {
  const [openItem, setOpenItem] = useState(-1)

  const items = [
    {
      title: 'Our better editing guarantee',
      content: 'We stand by our products and our promises and we understand that everyone’s workflow is different, and even the most adaptable tool ever may not always fit. If Monogram Creative Console does not improve your editing experience, you can return it for a full refund of the original purchase price within 100 days. Contact us at support@monogramcc.com if you have any concerns.'
    },
    {
      title: 'Build Quality and materials',
      content: 'We take great pride and care in building our products to ensure the best quality and user experience.'
    },
    {
      title: 'Shippping Information',
      content: 'Free shipping to most regions on orders over $348. Orders are estimated to be delivered in 2-4 weeks (In Stock Items Only). All orders are shipped via leading couriers and include tracking.\nNote: International shipments do not include sales tax. For more questions about ordering, see our Shipping & Sales FAQ or contact us at support@monogramcc.com'
    },
    {
      title: 'Warranty',
      content: 'Included with your Monogram hardware is a limited one (1) year manufacturer\'s warranty from the date of purchase\nWe also offer Monogram Care, which provides you with 36 months of additional coverage including accidental. Learn more here.'
    }
  ]

  if (content !== undefined) {
    items.unshift({ title: 'Product description', content })
  }

  return (
    <article>
      {items.map(({ title, content }, index) => (
        <div key={index} className='border-t-2 last:border-b-2 border-[#8589a1]'>
          <button className='w-full py-2 flex items-center justify-between' onClick={() => setOpenItem(openItem === index ? -1 : index)}>
            <p className='text-lg font-semibold tracking-wider uppercase text-left'>{title}</p>
            {openItem === index
              ? <i className='bx bx-minus' />
              : <i className='bx bx-plus' />}
          </button>
          <div className={`grid grid-cols-1 grid-rows-[0fr] ${openItem === index ? 'grid-rows-[1fr]' : ''} transition-[grid-template-rows]`}>
            <div className='overflow-hidden'>
              <p className='pb-4 text-sm font-light'>{content}</p>
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}
