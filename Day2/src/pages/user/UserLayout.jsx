import React from 'react'
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

const UserLayout =({children})=> {
  return (
    <div className=''>
        <header >
            <Navbar/>
        </header>  
        <main className='h-full'>
            {children}
         </main>  
         <footer>
            footer
        </footer> 
    </div>
  )
}

UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout