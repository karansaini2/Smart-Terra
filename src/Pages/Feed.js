import React, { useContext }  from 'react'
import Navbar from '../Components/Navbar'
import { SchemeContext } from '../Components/SchemesContext'
import { ImSpinner2 } from 'react-icons/im'
import SchemeCard from '../Components/SchemeCard';

function Feed() {
  const {schemes,loading} = useContext(SchemeContext);

  if(loading){
      return (
          <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'/>
      );
  }
  
  return (
    <>
    <Navbar/>
     <h1 className='text-center mb-4 font-bold'>Schemes by the Government</h1>
     <section className='mb-20'>
       <div className='container mx-auto'>
        <div>
            {schemes.map((scheme,index)=>{
               return(
               <SchemeCard key={index} scheme={scheme} />
               )
            })}
        </div>
       </div>
    </section>
    </>
   
  )
}

export default Feed