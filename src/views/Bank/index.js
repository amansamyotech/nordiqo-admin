/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card, Breadcrumbs } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import AddContact from './AddContact';
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import UniversalBreadcrumbs from 'components/Breadcrumbs';
// ----------------------------------------------------------------------

const leadData = [
  {
    id: 1,
    firstName: 'jonny',
    lastName: 'Doe',
    gender: 'male',
    phoneNumber: '9981923587',
    emailAddress: 'ap@samyotech.com',
    action: 'Edit'
  }
];
const Contact = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'gender',
      headerName: 'Gender',
      flex: 1
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'emailAddress',
      headerName: 'Email Address',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1
      // eslint-disable-next-line arrow-body-style
    }
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const breadcrumbs = [
    {
      label: 'Home',
      path: '/', 
      color: 'blue',
      icon: HomeIcon,
    },
    {
      label: 'Bank List',
      path: 'dashboard/banklist',
    },
  ];
  return (
    <>
      <AddContact open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Box
                 sx={{
                   display: 'flex',
                   backgroundColor: 'white',
                   justifyContent: 'space-between',
                   alignItems: 'center',
                   marginBottom: '20px',
                   borderRadius: '12px',
                   padding: '15px 30px'
                 }}
               >
                 <Typography variant="h3"> Bank List</Typography>
                 <UniversalBreadcrumbs items={breadcrumbs}/>
                </Box>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={leadData}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.id}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Contact;
