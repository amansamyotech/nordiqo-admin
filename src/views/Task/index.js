/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box, Breadcrumbs } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import AddTask from './AddTask';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
// ----------------------------------------------------------------------

const policyData = [
  {
    id: 1,
    subject: 'Task Testing',
    status: 'In progress',
    startDate: '08/01/2024',
    endDate: '09/01/2024',
    priority: 'medium',
    relatedTo: 'sharma ji',
    assignedUser: 'active user'
  }
];
const Task = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'subject',
      headerName: 'Subject',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'startDate',
      headerName: ' Start Date',
      flex: 1
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1
    },
    {
      field: 'relatedTo',
      headerName: 'Related To',
      flex: 1
    },
    {
      field: 'assignedUser',
      headerName: 'Assigned User',
      flex: 1
    }
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const breadcrumbs = [
    <Link key="1" to="/" style={{ textDecoration: 'none', color: 'black' }}>
      Dashboard
    </Link>,
    <Typography key="3" sx={{ color: 'black' }}>
      Request
    </Typography>
  ];
  return (
    <>
      <AddTask open={openAdd} handleClose={handleCloseAdd} />
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
          <Typography variant="h3"> Request</Typography>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" style={{ color: 'black' }} />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>{' '}
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={policyData}
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

export default Task;
