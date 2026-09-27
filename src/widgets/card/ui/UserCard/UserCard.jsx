import StatisticsList from "../../../../entities/card/ui/StatisticsList/StatisticsList";
import Button from "../../../../shared/ui/Button/Button.jsx";
import avatar from "../../../../shared/assets/images/avatar.jpg";

const UserCard = (props) => {
    const { name, profile, link, statistics } = props;

    return (
        <article>
            <div>
                <Button>❤</Button>
                <img src={avatar} alt={name} />
                <h2>{name}</h2>
                <a href={link}>{profile}</a>
            </div>
            <Button>+</Button>
            <StatisticsList statistics={statistics} />
        </article>
    );
};

export default UserCard;
