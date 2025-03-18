import { useState } from 'react';
import { Button, Container, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../ui-component/iconify';

const LogoutConfirmation = () => {
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(true);

const handleCloseLogoutDialog = () => {
  setOpenLogoutDialog(false);
  navigate('/');
};

  const handleLogoutConfirm = () => {
    console.log('logged out');
    setOpenLogoutDialog(false);
  };

  return (
    <Container>
      <Dialog
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
        sx={{
          '& .MuiDialog-paper': {
            width: '400px',
            minHeight: '100px',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle variant='h4'>
          Confirm Logout
          <IconButton
            edge="end" 
            onClick={handleCloseLogoutDialog}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Iconify style={{ width: 25, height: 25 }} icon="eva:close-fill" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog} color="error" variant='outlined'>
            No
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary" variant='contained'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LogoutConfirmation;
