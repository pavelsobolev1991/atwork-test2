import { useEffect, useMemo } from 'react';
import { loadUsersList } from '../../redux/actions/loadUsersList';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import './cardList.scss';
import { has } from 'lodash';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

type CardListProps = {
  type: string;
};

export const CardList: React.FC<CardListProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const { users, loading }: { users: TestAppAPI.User[]; loading: boolean } =
    useAppSelector((state) => state.usersList);
  const archivedUsers = useMemo(
    () => users.filter((user) => has(user, 'isArchived')),
    [users]
  );
  const currentUsers = useMemo(
    () => users.filter((user) => !user.isArchived),
    [users]
  );
  useEffect(() => {
    dispatch(loadUsersList());
  }, []);
  if (loading || users.length === 0) {
    return (
      <>
        <div className="cardListContainer"></div>
        <Loader />
      </>
    );
  }
  return (
    <div className="cardListContainer">
      {type !== 'archived' ? (
        currentUsers.map((user) => <Card user={user} type={type} />)
      ) : (
        <div>
          {archivedUsers.map((user) => (
            <Card user={user} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
