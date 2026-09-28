import StatisticsList from "../../../../entities/card/ui/StatisticsList/StatisticsList";
import Button from "../../../../shared/ui/Button/Button.jsx";
import avatar from "../../../../shared/assets/images/avatar.jpg";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
    const { name, gender, profile, link, statistics } = props;

    let nameColorStyle = "";

    if (gender === "male") {
        nameColorStyle = styles.isMale;
    } else if (gender === "female") {
        nameColorStyle = styles.isFemale;
    }

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <Button className={styles.card__like}>❤</Button>
                <img className={styles.card__image} src={avatar} alt={name} />
                <div className={styles.card__title}>
                    <h2 className={`${styles.card__name} ${nameColorStyle}`}>
                        {name}
                    </h2>
                    <a href={link} className={styles.card__link}>
                        {profile}
                    </a>
                </div>
            </div>
            <Button className={styles.card__follow}>+</Button>
            <div className={styles.card__body}>
                <StatisticsList statistics={statistics} />
            </div>
        </article>
    );
};

export default UserCard;
