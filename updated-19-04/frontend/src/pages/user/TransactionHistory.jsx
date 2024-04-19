import React, { useState } from 'react'
import TransactionDetails from '../../components/TransactionDetails'

function TransactionHistory() {
    const[showDetails , setShowDetails] = useState(!false)
    const toggleModel=()=>{ 
        setShowDetails(!showDetails)
        console.log(showDetails)
      }
 
  return (
    <div className='w-full h-screen mt-20 '>
        {!showDetails && <TransactionDetails onClose={toggleModel} />}
            <h1 className='text-3xl  text-center  font-bold text-sec py-5'> Transaction History</h1>
        <div className='px-28 space-y-5'>
        <div className='w-full space-y-5'>
            <div className= 'p-4 w-full h-full bg-teal-50  rounded-2xl'>
                <div className=' w-full h-full '>
                    <div className='flex justify-between'>
                    <div>
                        <h1 className='text-gray-600'>Plan</h1>
                        <h1 className='text-2xl font-bold'>₹ 479</h1>
                        <p className='text-gray-600'>Purchased on 27 Mar, 2024 08:09 PM</p>
                    </div>
                    <div className='justify-between'>
                        <h1 className='text-gray-600'>Mobile Number</h1>
                        <span className='flex justify-center items-center space-x-2'>
                        {/* <div className='w-10 h-10 bg-sec rounded-full'></div> */}
                        <h1 className='text-2xl font-bold'>+91 9080583122</h1> 
                        </span>
                        <h1 className='text-gray-600'>Prepaid</h1> 
                        {/* <p className='text-gray-600'>Airtel</p> */}
                    </div>
                    </div>
                    <hr className='p-1 my-3'></hr>

                    <div className='flex justify-between'>
                    <div>
                        <span className='flex '>
                        <h1 className='text-gray-600'>Payment Mode : </h1> 
                        <h1 className='text-black font-bold'> UPI</h1>
                        </span>
                        <span className='flex '>
                        <p className='text-gray-600'>Ref. Number : </p>
                        <h1 className=' font-bold'>cae2560c-ced5-472a-a9f3-8e96384f21f4</h1> 
                        </span>
                      
                    </div>
                    <div className='justify-between space-x-8'>
                        <button className='bg-sec text-white px-3 py-2 rounded-3xl'>Download Invoice</button>
                        <button className='bg-sec text-white px-3 py-2 rounded-3xl'>View Details</button>
                    </div>
                    </div>

                </div>

            </div>

            {/* ///2 */}
            <div className= 'p-4 w-full h-full bg-teal-50  rounded-2xl'>
                <div className=' w-full h-full '>
                    <div className='flex justify-between'>
                    <div>
                        <h1 className='text-gray-600'>Plan</h1>
                        <h1 className='text-2xl font-bold'>₹ 799</h1>
                        <p className='text-gray-600'>Purchased on 27 Mar, 2024 08:09 PM</p>
                    </div>
                    <div className='justify-between'>
                        <h1 className='text-gray-600'>Mobile Number</h1>
                        <span className='flex justify-center items-center space-x-2'>
                        {/* <div className='w-10 h-10 bg-sec rounded-full'></div> */}
                        <h1 className='text-2xl font-bold'>+91 9080583122</h1> 
                        </span>
                        <h1 className='text-gray-600'>Prepaid</h1> 
                        {/* <p className='text-gray-600'>Airtel</p> */}
                    </div>
                    </div>
                    <hr className='p-1 my-3'></hr>

                    <div className='flex justify-between'>
                    <div>
                        <span className='flex '>
                        <h1 className='text-gray-600'>Payment Mode : </h1> 
                        <h1 className='text-black font-bold'> UPI</h1>
                        </span>
                        <span className='flex '>
                        <p className='text-gray-600'>Ref. Number : </p>
                        <h1 className=' font-bold'>cae2560c-ced5-472a-a9f3-8e96384f21f4</h1> 
                        </span>
                      
                    </div>
                    <div className='justify-between space-x-8'>
                        <button className='bg-sec text-white px-3 py-2 rounded-3xl'>Download Invoice</button>
                        <button className='bg-sec text-white px-3 py-2 rounded-3xl'>View Details</button>
                    </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default TransactionHistory