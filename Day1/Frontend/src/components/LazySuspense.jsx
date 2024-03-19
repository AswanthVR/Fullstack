import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import loader from '../assets/Loader/l1.gif'
 

const LazySuspense = ({ component: Component, ...rest }) => {
  return (

 
    <Suspense fallback={
      <div className='flex w-screen h-screen justify-center items-center'>
    <img className="" src={loader} alt='loader' />
    </div>
  }>
      <Component {...rest} />
    </Suspense>
 
  )
}

LazySuspense.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LazySuspense;
