import { useEffect, useRef } from 'react'
import { useCart } from '../hooks/useCart'
import { CartElement } from './CartElement'

interface ModalI {
  isOpen: boolean
  toggleModal: () => void
}

export const Modal: React.FC<ModalI> = ({ isOpen, toggleModal }) => {
  const { cart, getSubtotal, clearCart } = useCart()
  const subtotal = getSubtotal()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const { current: dialog } = dialogRef
    if (dialog === null) return
    if (isOpen) dialog.showModal()
    else dialog.close()
  }, [isOpen])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 bg-[#0005] ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
      <div className='flex flex-col w-[97.25%] max-w-[480px] h-full ml-auto bg-white [&>*]:p-6'>
        <header className='bg-darkblue'>
          <button className='flex items-center gap-x-1' onClick={toggleModal}>
            <i className='bx bx-caret-left text-xl' />
            <p>Continue Shopping</p>
          </button>
        </header>
        <div className='grow space-y-3.5 text-darkblue overflow-y-scroll'>
          {cart.length === 0
            ? 'Your cart is empty'
            : cart.map(product => (
              <CartElement key={product.id} {...product} />
            ))}
        </div>
        <footer className='space-y-4 bg-darkblue'>
          <div className='flex justify-between items-center'>
            <p>Subtotal</p>
            <p>{subtotal.toFixed(2)} US$</p>
          </div>
          <div>
            <button disabled={cart.length < 1} onClick={clearCart} className='w-full p-3 rounded-full bg-white text-sm text-darkblue uppercase font-bold tracking-widest disabled:brightness-50'>Checkout</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
