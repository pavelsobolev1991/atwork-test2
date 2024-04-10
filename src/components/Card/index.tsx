import userPicture from '../../assets/user.png';
import './card.scss';
import EditButton from '../EditButton';

type CardProps = { user: TestAppAPI.User; type: string };

const Card: React.FC<CardProps> = ({ user, type }) => {
  return (
    <div className="cardContainer">
      <img
        src={userPicture}
        id="userPicture"
        className={type === 'archived' ? 'grayscale' : ''}
        alt="User"
      />
      <div className="cardInfo">
        <div className="cardUpperInfo">
          <div className="userInfo">
            <div
              className={type === 'archived' ? 'archivedUserName' : 'userName'}
            >
              {user.name?.slice(0,9)}
            </div>
            <div
              className={
                type === 'archived' ? 'archivedCompanyName' : 'companyName'
              }
            >
              {user.company.name}
            </div>
          </div>
          <EditButton userID={user.id} isArchived={user.isArchived}/>
        </div>
        <div className={type === 'archived' ? 'archivedCity' : 'city'}>
          {user.address?.city ? user.address.city : user.city}
        </div>
      </div>
    </div>
  );
};

export default Card;
