import './PeopleThinkCard.scss';

const PeopleThinkCard = ({ avatar, personName, description, info }) => {
  return (
    <div className="peopleThinkCard--container">
      <div className="person--container">
        <img src={avatar} alt="person" />
        <div className="person-info--container">
          <h4 className="peopleThinkCard--name">{personName}</h4>
          <p className="peopleThinkCard--descr">{description}</p>
        </div>
      </div>
      <p className="person--opinion">{info}</p>
    </div>
  );
};

export default PeopleThinkCard;
