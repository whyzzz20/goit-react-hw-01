import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.box}>
      <div className={css.cardBox}>
        <img className={css.cardImg} src={image} alt={name} />
        <p className={css.cardUsername}>{name}</p>
        <p className={css.cardTagName}>@{tag}</p>
        <p className={css.cardUserLocation}>{location}</p>
      </div>
      <ul className={css.cardListExplorer}>
        <li className={css.cardListItem}>
          <span className={css.cardItemTitle}>Followers</span>
          <span className={css.cardItemInfo}>{followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.cardItemTitle}>Views</span>
          <span className={css.cardItemInfo}>{views}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.cardItemTitle}>Likes</span>
          <span className={css.cardItemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
