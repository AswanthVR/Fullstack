import React from 'react'
import PropTypes from 'prop-types';
 const AdminLayout = ({children}) => {
  return (
    <div>
        <header>
        header
        </header>
        <main>
            {children}
        </main>

        <footer>
            footer
        </footer>
    </div>
  )
}


AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout
