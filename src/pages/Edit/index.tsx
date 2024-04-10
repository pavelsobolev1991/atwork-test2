import Header from '../../modules/Header';
import './edit.scss';
import { Box, Link } from '@mui/material';
import Profile from '../../modules/Profile';
import ProfileForm from '../../modules/ProfileForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { loadUsersList } from '../../redux/actions/loadUsersList';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import Loader from '../../components/Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const linkContainerStyles = {
  height: '56px',
  display: 'flex',
  alignItems: 'center',
};

const arrowIconStyles = {
  color: '#595959',
  height: '20px',
  width: '20px',
};

const linkStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#595959',
  cursor: 'pointer',
};

function Edit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUsersList());
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, loading } = useAppSelector((state) => state.usersList);

  useEffect(() => {
    if (!loading && users.length === 0) {
      dispatch(loadUsersList());
    }
  }, [loading]);

  const currentUser = useMemo(
    () => users.filter((user: { id: number; }) => user.id === Number(id)),
    [users]
  );
  if (loading || currentUser.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className="mainEditContainer">
        <Box sx={linkContainerStyles}>
          <Link sx={linkStyles} onClick={() => navigate(`/`)}>
            <ArrowBackIcon sx={arrowIconStyles} />
            Назад
          </Link>
        </Box>
        <div className="editContainer">
          <Profile />
          <ProfileForm currentUser={currentUser} id={id} />
        </div>
      </div>
    </>
  );
}

export default Edit;
