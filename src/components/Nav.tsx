import { Link } from 'wouter'
import { useModal } from '../hooks/useModal'
import { Monogram } from './icons/Monogram'
import { Modal } from './Modal'

export const Nav: React.FC = () => {
  const { isOpen, toggleModal } = useModal()

  return (
    <>
      <div className='fixed top-0 z-50 w-full p-2 sm:p-4'>
        <div className='flex justify-between items-center p-2 bg-darkblue text-lightpink'>
          <Link className='hover:text-darkpink' href='/'>
            <Monogram />
          </Link>
          <button className='relative' onClick={toggleModal}>
            <i className='bx bx-shopping-bag text-3xl translate-y-1' />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  )
}
