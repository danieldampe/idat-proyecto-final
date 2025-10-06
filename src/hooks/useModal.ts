import { useState } from 'react'

interface ModalState {
  isOpen: boolean
  toggleModal: () => void
}

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => setIsOpen(prevIsOpen => !prevIsOpen)

  return {
    isOpen,
    toggleModal
  }
}
