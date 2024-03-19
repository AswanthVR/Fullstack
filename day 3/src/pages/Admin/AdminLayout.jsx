import React from 'react'
import PropTypes from 'prop-types';
import AdminSidebar from '../../components/Admin/AdminSidebar';
 const AdminLayout = ({children}) => {
  return (
    <div className='flex  h-screen'>
        <aside className='w-[20%]'>
        <AdminSidebar/>
        </aside>
        <main className='w-[80%] h-screen'>
            {children}
        </main>

        {/* <footer>
            footer
        </footer> */}
    </div>
  )
}


AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout
