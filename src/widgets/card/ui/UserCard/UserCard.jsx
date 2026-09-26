import StatisticsList from "../../../../entities/card/ui/StatisticsList/StatisticsList";
import Button from "../../../../shared/ui/Button/Button.jsx";
import avatar from "../../../../shared/assets/images/avatar.jpg";

const UserCard = () => {
    return (
        <article>
            <div>
                <Button>@</Button>
                <img src={avatar} alt="avatar" />
                <h2>Sadie Sink</h2>
                <p>@SadieSink</p>
            </div>
            <Button>+</Button>
            <StatisticsList />
        </article>
    );
};

export default UserCard;
