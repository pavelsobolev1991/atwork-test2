import userPicture from '../../assets/userBig.png';
import './profile.scss';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Profile() {
  return (
    <div className="profileContainer">
      <img src={userPicture} className="userPicture" />
      <Box className="profileLinks">
        <Typography className="chosenLink">Данные профиля</Typography>
        <Divider />
        <Typography className="userDataLink">Рабочее пространство</Typography>
        <Divider />
        <Typography className="userDataLink">Пространство</Typography>
        <Divider />
        <Typography className="userDataLink">Безопасность</Typography>
        <Divider />
      </Box>
    </div>
  );
}

export default Profile;
