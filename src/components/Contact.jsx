import React from 'react'

const Contact = () => {
  return( 
  <div name='contact' className="w-full h-screen bg-slate-800 flex justify-center items-center p-4">
  <form action='' className='flex flex-col max-w-[600px] '>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-yellow-500 
         text-white'>Contact</p>
         
         <p className='text-white py-6'>
         Submit the form below
         </p>
    </div>
    <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder="Name" name="name" />
    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email" />
    <textarea className='bg-[#ccd6f6] p-2' name="Message" rows="10" placeholder='Message' ></textarea>
    <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 max-auto flex items-center justify-center">Let's Collaborate</button>
  </form>
  
  </div>
  );
}

export default Contact;