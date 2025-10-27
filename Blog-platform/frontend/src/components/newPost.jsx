import React from 'react'
import { FaRegEdit } from "react-icons/fa";

export const NewPost = () => {

  return (
    <div>
       <div className='bg-white w-[800px] py-6 rounded-lg px-5 relative shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.3)]'>
        <FaRegEdit className='absolute top-2 right-2 text-xl' />
          <div className='flex items-center justify-between mt-2'> 
            <div className='flex items-center gap-4 w-max p-2 rounded-lg'><img className='w-10' src="/man.png" alt="man-icon" /> <p className='text-lg font-medium'>Gaouas Mouhammad</p></div>
            <p><span className='font-semibold text-lg'>Uploaded in : </span>23/11/2004</p>
          </div>
          
          <h3 className='text-xl font-medium pt-8'>Title : First day at university</h3>

          <div className='pt-2'>
            <p className='tracking-wider'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved </p>
          </div>
       </div>      
    </div>
  )
}
