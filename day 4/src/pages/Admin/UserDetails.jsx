import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'username', label: 'Username', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 150 },
  { id: 'role', label: 'Role', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'registrationDate', label: 'Registration Date', minWidth: 150 },
  { id: 'lastLogin', label: 'Last Login', minWidth: 150 },
];

export default function UserDetails() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const users = [
    { 
      id: 1, 
      username: 'user1', 
      email: 'user1@example.com', 
      phoneNumber: '123-456-7890', 
      role: 'Admin', 
      status: 'Active', 
      registrationDate: '2023-10-15', 
      lastLogin: '2024-03-15' 
    },
    { 
      id: 2, 
      username: 'user2', 
      email: 'user2@example.com', 
      phoneNumber: '987-654-3210', 
      role: 'User', 
      status: 'Inactive', 
      registrationDate: '2023-11-20', 
      lastLogin: '2024-03-14' 
    },
    { 
      id: 3, 
      username: 'john_doe', 
      email: 'john.doe@example.com', 
      phoneNumber: '555-123-4567', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-01-05', 
      lastLogin: '2024-03-16' 
    },
    { 
      id: 4, 
      username: 'jane_doe', 
      email: 'jane.doe@example.com', 
      phoneNumber: '555-987-6543', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-01-10', 
      lastLogin: '2024-03-17' 
    },
    { 
      id: 5, 
      username: 'alex_smith', 
      email: 'alex.smith@example.com', 
      phoneNumber: '555-567-8901', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-02-03', 
      lastLogin: '2024-03-17' 
    },
    { 
      id: 6, 
      username: 'emily_brown', 
      email: 'emily.brown@example.com', 
      phoneNumber: '555-234-5678', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-02-15', 
      lastLogin: '2024-03-17' 
    },
    { 
      id: 7, 
      username: 'michael_johnson', 
      email: 'michael.johnson@example.com', 
      phoneNumber: '555-876-5432', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-02-20', 
      lastLogin: '2024-03-18' 
    },
    { 
      id: 8, 
      username: 'sarah_miller', 
      email: 'sarah.miller@example.com', 
      phoneNumber: '555-345-6789', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-03-01', 
      lastLogin: '2024-03-17' 
    },
    { 
      id: 9, 
      username: 'david_wilson', 
      email: 'david.wilson@example.com', 
      phoneNumber: '555-654-3210', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-03-05', 
      lastLogin: '2024-03-18' 
    },
    { 
      id: 10, 
      username: 'laura_taylor', 
      email: 'laura.taylor@example.com', 
      phoneNumber: '555-456-7890', 
      role: 'User', 
      status: 'Active', 
      registrationDate: '2024-03-10', 
      lastLogin: '2024-03-17' 
    },
    // Add more user data here...
  ];
  

  return (
    <div className='p-10'>
      <h1 className="text-sec font-bold text-2xl text-center py-2 uppercase mb-3">
        User Management
      </h1>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center" // Center align for all columns
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
