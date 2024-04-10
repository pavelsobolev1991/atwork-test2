import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import saveIcon from '../../assets/Icon.svg';
import CloseIcon from '@mui/icons-material/Close';
import './modal.scss';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 310,
  height: 211,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  colors: '#FDFDFD',
};

const messageStyles = {
  mt: 2,
  color: ' #595959',
  fontSize: '20px',
};

export default function BasicModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: ' #595959',
            }}
          >
            <CloseIcon />
          </Button>
          <img src={saveIcon} className="saveIcon" />
          <Typography id="modal-modal-description" sx={messageStyles}>
            Изменения сохранены!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
