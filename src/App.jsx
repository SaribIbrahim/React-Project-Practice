
import './App.css'
import Navbar from "./assets/components/Navbar.jsx";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import {db} from "./assets/config/firebase.js"
import { collection, onSnapshot} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Contact from './assets/components/Contact.jsx';
import Modal from './assets/components/Modal.jsx';

function App() {

  const [contacts,setContacts]=useState([])
  const [isOpen,setIsOpen]=useState(false)

  const getData=async()=>{
     const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapShot) => {
        try {
          const contactLists = snapShot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setContacts(contactLists);
        } 
        catch (error) {
          console.log("Inner error:", error);
        }
      });
  }

  useEffect(()=>{
    getData();
  },[])


  const onOpen=()=>{
   setIsOpen(true)
  }

  const onClose=()=>{
    setIsOpen(false)
  }


  return (
    <>
      <div className='m-auto max-w-[370px] px-4'>
        <Navbar />
        <div className='flex gap-3 items-center mt-3 mb-4'>
          <div className='flex relative items-center flex-grow '>
            <input className='bg-transparent border-white rounded-md border h-10 flex-grow text-white pl-10' type="text" placeholder='search' />
            <IoSearch className='absolute text-white text-3xl ml-1' />
          </div>
          <FaCirclePlus className='text-white text-4xl cursor-pointer' onClick={onOpen} />
        </div>
        {contacts.map((contact)=>(
          <div>
            <Contact key={contact.id} contact={contact}/>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default App
