import React from 'react'

function App() {


  return (
    <>
      <div className='flex flex-col gap-10 w-full h-full bg-white rounded-2xl md:flex-row md:h-[60%] md:w-[50%] m-5' >

        <div className='w-full md:w-[50%]'>
          <img className='rounded-l-2xl' src="./public/perfume.jpg" alt="" />
        </div>

        <div className='p-10 w-full md:w-[50%]'>

            <div className=''>
              <p className='font-[Montserrat] text-xs '>P E R F U M E</p>
              <h1 className='font-[Fraunces] font-bold text-3xl my-5'>Gabrielle Essence Eau De Parfum</h1>
              <p className='font-[Montserrat] text-sm'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            </div>

            <div className='flex'>
              <p className='text-[#3d8168] mr-3 font-[Fraunces] font-bold text-3xl my-5'>$149.99</p>
              <p className='font-[Fraunces] line-through my-5 relative top-1'>$169.99</p>
            </div>

            <button className='bg-[#3d8168] hover:bg-[#1a4031] text-[white] flex justify-center w-[100%] rounded-md py-3 font-[Montserrat]'>
            <img className='relative top-1 mr-3' src="./public/icon-cart.svg" alt="svg"/> Add to Cart
            </button>

        </div>

      </div>
      

    </>
  )
}

export default App
