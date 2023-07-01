import React from 'react'
import Form from '@components/Form'
import Header from '@components/Header'
import Footer from "@components/Footer"
const page = () => {
  return (
    // <div className="md:flex md:justify-center md:h-screen ">
      // <div className=" grid grid-cols-4 gap-1 w-screen md:w-[98vw]">
      <div
      className=' overflow-hidden h-screen  '>
        <Header />
        {/* <div className="h-[75vh] col-span-4 justify-center  flex  m-3"> */}
          {/* <div className="h-[75vh]   bg-white overflow-hidden overflow-y-scroll bg-opacity-90 w-[90vw] rounded-md "> */}
            <div
            className='h-[80vh] overflow-scroll '>
            <Form/>
            
            </div>
            <div
            className='h-[20vh]'>
               <Footer />
            </div>
           
            
          {/* </div> */}
        {/* </div> */}
     
       
      
        
      {/* </div> */}
     </div>
    
        
  
  )
}

export default page