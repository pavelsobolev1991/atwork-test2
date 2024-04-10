import MoreVertIcon from '@mui/icons-material/MoreVert';
import './editButton.scss';
import { IconButton } from '@mui/material';
import React from 'react';
import PopOver from '../PopOver';

const IconBtnStyles = {
  '&:hover': {
    background: 'none',
  },
};

type EditButtonProps = { userID: number, isArchived: boolean | undefined };

const EditButton: React.FC<EditButtonProps> = ({ userID, isArchived }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton sx={IconBtnStyles} onClick={handleClick} className="iconBtn">
        <MoreVertIcon className="moreVertIcon" />
      </IconButton>
      <PopOver
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        userID={userID}
        isArchived={isArchived}
      />
    </>
  );
};

export default EditButton;
