/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box, Breadcrumbs } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';

import AddPolicy from './AddPolicy';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import UniversalBreadcrumbs from 'components/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';  
// ----------------------------------------------------------------------

const policyData = [
  {
    id: 1,
    policyNumber: '5588',
    policyType: 'Auto Insurance',
    policyStartDate: '08/01/2024',
    phoneEndDate: '09/01/2024',
    policyStatus: 'active'
  }
];
const PolicyManagement = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'policyNumber',
      headerName: 'Policy Number',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'policyType',
      headerName: 'Policy Type',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'policyStartDate',
      headerName: 'Policy start Date',
      flex: 1
    },
    {
      field: 'phoneEndDate',
      headerName: 'Policy end Date',
      flex: 1
    },
    {
      field: 'policyStatus',
      headerName: 'Policy status',
      flex: 1
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
      label: 'Category',
      path: 'dashboard/category',
    },
  ];
  return (
    <>
      <AddPolicy open={openAdd} handleClose={handleCloseAdd} />
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
                  <Typography variant="h3"> Category</Typography>
                  <UniversalBreadcrumbs items={breadcrumbs}/>
                  </Box>
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

export default PolicyManagement;
