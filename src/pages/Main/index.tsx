import Header from '../../modules/Header';
import CardList from '../../modules/CardList';
import './main.scss';
import { Divider, Typography } from '@mui/material';

function Main() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Typography className="title">Активные</Typography>
        <Divider className="divider" />
        <CardList type="main" />
        <div className="archiveContainer">
          <Typography className="title">Архив</Typography>
          <Divider sx={{width: '100%'}} className="divider"/>
          <CardList type="archived" />
        </div>
      </div>
    </div>
  );
}

export default Main;
