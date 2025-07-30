import React, { Children } from 'react'
import { AiOutlineClose } from "react-icons/ai";

function Modal({isOpen,onClose,Children}) {
  return (
    <div>
        {isOpen && (
            <>
            <div className='min-h-[240px] bg-white max-w-[80%] relative m-auto p-4 z-50'>
                <div className='flex justify-end'>
                    <AiOutlineClose className='text-2xl cursor-pointer ' onClick={onClose}/>
                </div>
                {Children}
            </div>
            <div className='absolute top-0 z-40 h-screen w-screen backdrop-blur'></div>
            </>

        )}
    </div>
  )
}

export default Modal