import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <div className={css.friendsItem}>
      <img className={css.friendsItemImg} src={avatar} alt={name} width="48" />
      <p className={css.friendsItemName}>{name}</p>
      <p className={isOnline ? css.statusIsOn : css.statusIsOff}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
