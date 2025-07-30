import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

function Contact({contact}) {
  return (
    <div className='bg-yellow rounded-md flex  justify-between items-center mb-3 p-2'>
        <div className='flex items-center gap-1'>
            <HiOutlineUserCircle className='text-4xl text-orange'/>
           <div className='flex flex-col items-start'>
             <h2 className='font-medium  '>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
           </div>
        </div>
        <div className='flex text-3xl '>
        <RiEditCircleLine className='cursor-pointer'/>
        <IoMdTrash className='text-purple-700 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Contact