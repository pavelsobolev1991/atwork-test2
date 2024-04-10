import { ButtonBase } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { archiveCard, hideCard } from '../../../redux/slices/usersListSlice';
import { useAppDispatch } from '../../../redux/hook';

const buttonStyles = {
  cursor: 'pointer',
  '&:hover': {
    color: '#22a0bc',
  },
};

const typographyStyles = {
  textAlign: 'center'
}

type PopOverProps = {
  userID: number;
};

const PopOverContent: React.FC<PopOverProps> = ({ userID }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleArchive = () => {
    dispatch(archiveCard(userID));
  };
  const handleHide = () => {
    dispatch(hideCard(userID));
  };
  return (
    <>
      <ButtonBase sx={buttonStyles} onClick={() => navigate(`/edit/${userID}`)}>
        <Typography sx={typographyStyles} className="link">
          Редактировать
        </Typography>
      </ButtonBase>
      <ButtonBase
        sx={buttonStyles}
      >
        <Typography
          sx={typographyStyles}
          className="link"
          onClick={handleArchive}
        >
          Архивировать
        </Typography>
      </ButtonBase>
      <ButtonBase
        sx={buttonStyles}
        onClick={handleHide}
      >
        <Typography sx={typographyStyles} className="link">
          Скрыть
        </Typography>
      </ButtonBase>
    </>
  );
};

export default PopOverContent;
