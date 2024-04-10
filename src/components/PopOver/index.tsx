import { Box } from '@mui/material';
import Popover from '@mui/material/Popover';
import PopOverContent from './popOverContent';
import PopOverArchiveContent from './PopOverArchiveContent';

const popOverStyles = {
  borderRadius: '12px',
  padding: '8px',
  boxShadow: 'none',
};

const popOverContentContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 3,
};

type PopOverProps = {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  userID: number;
  isArchived: boolean | undefined;
};

const PopOver: React.FC<PopOverProps> = ({
  anchorEl,
  setAnchorEl,
  userID,
  isArchived,
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={popOverStyles}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            style: {
              width: 200,
              height: isArchived ? 34 : 146,
              padding: '8px 12px 8px 12px',
              backgroundColor: '#FDFDFD',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
            },
          },
        }}
      >
        <Box sx={popOverContentContainerStyles}>
          {!isArchived ? (
            <PopOverContent userID={userID} />
          ) : (
            <PopOverArchiveContent userID={userID} />
          )}
        </Box>
      </Popover>
    </>
  );
};

export default PopOver;
