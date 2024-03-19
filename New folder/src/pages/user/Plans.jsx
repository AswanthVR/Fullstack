import React, { useState } from 'react'
import { IoPhonePortrait } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/login/logo2.png'

import useRazorpay from "react-razorpay";
import PaymentForm from '../../components/Payment/Payment';
function Plans() {
    const nav = useNavigate()
    const [showPayment, setShowPayment] = useState(false);
    const [order, setOrder] = useState();
   

    const handlePaymentSuccess = (paymentDetails) => { 
        console.log("Payment successful:", paymentDetails); 
     };

     const [Razorpay] = useRazorpay();

     const handlePayment = (amount) => {
       const options = {
           key: "rzp_test_7CP7Bn1wx5RNKG",
           amount: 1000*1000,
           currency: "INR",
           name: "EZ pay",
           description: "Test Transaction",
           image:'./`weblogo.png', 
           handler: (res) => {
             console.log(res);
           },
           prefill: {
             name: "Piyush Garg",
             email: "youremail@example.com",
             contact: "9999999999",
           },
           notes: {     
             address: "Razorpay Corporate Office",
           },
           theme: {
             color: "#008080",
           },
         };
       const rzpay = new Razorpay(options);
       rzpay.open();
     };


    const planCategories = [
        { label: 'Popular Plans', value: 'popular_plans' },
        { label: 'Entertainment Plans', value: 'entertainment_plans' },
        { label: 'Data Booster', value: 'data_booster' },
        { label: 'Annual Plans', value: 'annual_plans' },
        { label: 'Data Packs', value: 'data_packs' },
        { label: 'No Daily Limit', value: 'no_daily_limit' },
        { label: 'International Roaming', value: 'international_roaming' },
        { label: '5G Upgrade', value: '5g_upgrade' },
        { label: 'ISD', value: 'isd' }
    ];

    const plans = [
        {
            amount: '₹ 479',
            validity: '54 days',
            data: '2.5 GB/Day',
        },
        {
            amount: '₹ 599',
            validity: '84 days',
            data: '3 GB/Day',
        },
        {
            amount: '₹ 799',
            validity: '56 days',
            data: '2 GB/Day',
        },
        {
            amount: '₹ 999',
            validity: '70 days',
            data: '5 GB/Day',
        },
        {
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        }
    ];
    
  return (
    <div className='md:mt-36 md:px-20 h-full w mt-20 '>
        <div className='bg-teal-50 w-[350px] h-[80px] rounded-lg px-4 md:grid md:grid-cols-5 justify-between items-center hidden'>
            <div className='col-span-1'>
            <IoPhonePortrait className='text-4xl' />
            </div>
            <div className=' col-span-3 '>
                <div className='flex md:flex-col'>
                        <h1>Recharging For</h1>
                        <h1 className='text-black font-bold text-2xl'>9080583122</h1>
                </div>
            </div>
            <div className='col-span-1'>
                <h1 className='font-bold text-sec'><Link to={"/EZpay/user/prepaid"}>Change</Link></h1>
            </div>

        </div>
        {/* mobile */}
        <div className='w-full h-[50px] bg-teal-50 flex  justify-center items-center md:hidden'>
            <h1><span>Recharging For  </span><span className='text-xl font-bold'> 908058312 </span> <span className='text-sec font-bold text-xl'> Change </span></h1>
        </div>
        {/* mobile */}

        <div className='md:flex flex-row w-  pt-5'>
            <div className='md:w-3/12 bg- h-screen'>
                <h1 className='py-5 font-semibold' >Plan category</h1>
            <div className='flex md:flex-col'>
            {planCategories.map((category, index) => (
                <button key={index} className="text-sm md:text-base flex p-1 px-2
                 bg-gray-200 hover:bg-s4 text-black w-full md:w-4/6 border-1 border-2 border-white border-b-2 md:py-3 md:pl-4">
                    {category.label}
                </button>
            ))}
        </div>
            </div>


            <div className='4/6'>
                <h1 className='text-2xl font-bold pb-3'>Plans</h1>
                <div className='grid grid-cols-3 gap-7'>
                {
                    plans.map((plan,index)=>(
                        
                <div key={plan} index={index}  
                className='bg-teal-50 h-[240px] w-[300px] rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-transform transform  hover:scale-[102%] ease-in-out'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-2xl'>{plan.amount}</h1>
                        <p className='text-sm text-sec'>View Details</p>
                    </div>

                    <div className='h-[1px] bg-gray-400 '></div>

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-light'>Validity</p>
                            <h1 className='font-semibold'>{plan.validity}</h1>
                        </div>
                        <div>
                            <p className='font-light'>Data</p>
                            <h1 className='font-semibold'>{plan.data}</h1>
                        </div>
                    </div>

                    <div className='flex '>
                        <button
                        onClick={()=>{handlePayment(plan.amount)}}
                        className='text-white bg-sec hover:bg-teal-800 w-full rounded-lg p-2'>Recharge</button>
                        {/* {showPayment && (
                            <PaymentForm />
                        )} */}
                    </div>

                </div>
                    ))
                }</div>

            </div>
        </div>




    </div>
  )
}

export default Plans