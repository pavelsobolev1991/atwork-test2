import { ButtonBase } from '@mui/material';
import Typography from '@mui/material/Typography';
import { activateCard } from '../../../redux/slices/usersListSlice';
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

const PopOverArchiveContent: React.FC<PopOverProps> = ({ userID }) => {
  const dispatch = useAppDispatch();

  const handleAсtivate = () => {
    dispatch(activateCard(userID));
  };
  return (
    <>
      <ButtonBase sx={buttonStyles} onClick={handleAсtivate}>
        <Typography sx={typographyStyles} className="link">
          Активировать
        </Typography>
      </ButtonBase>
    </>
  );
};

export default PopOverArchiveContent;
