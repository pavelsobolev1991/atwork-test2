import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import logo from '../../assets/logo-sign.png';
import './header.scss';
import { Box, Typography } from '@mui/material';
import userPicture from '../../assets/userBig.png';

function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="logo">
          <img src={logo} />
          <span>
            <span className="logoOne">at</span>-<b className="logoTwo">WORK</b>
          </span>
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '169px',
            gap: '20px',
          }}
          className="userHeaderInfoContainer"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              alignItems: 'center',
            }}
            className="iconContainer"
          >
            <FavoriteBorder sx={{ width: 16, height: 16, color: '#595959' }} />
            <NotificationIcon
              sx={{ width: 16, height: 16, color: '#595959' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <img src={userPicture} className="userIcon" />
            <Typography className="userHeaderName">Ivan1234</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Header;
