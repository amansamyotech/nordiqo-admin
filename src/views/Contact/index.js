import { useState } from 'react';
import { Container, Typography, Box, Card, Breadcrumbs } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddContact from './AddContact';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
    }
  ];

  const handleCloseAdd = () => setOpenAdd(false);
  const breadcrumbs = [
    <Link key="1" to="/" style={{ textDecoration: 'none', color: 'black' }}>
      Dashboard
    </Link>,
    <Typography key="3" sx={{ color: 'black' }}>
      Bank List
    </Typography>
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
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" style={{ color: 'black' }} />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
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
