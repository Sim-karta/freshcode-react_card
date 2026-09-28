import StatisticsList from "../../../../entities/card/ui/StatisticsList/StatisticsList";
import Button from "../../../../shared/ui/Button/Button.jsx";
import avatar from "../../../../shared/assets/images/avatar.jpg";
import styles from "./UserCard.module.css";
import { useCallback, useState } from "react";

const UserCard = (props) => {
    const { name, gender, profile, link, statistics } = props;

    let nameColorStyle = "";

    if (gender === "male") {
        nameColorStyle = styles.isMale;
    } else if (gender === "female") {
        nameColorStyle = styles.isFemale;
    }

    const [isLike, setIsLike] = useState(false);

    const toggleLike = useCallback(() => {
        setIsLike((state) => !state);
    });

    const [isFollowing, setIsFollowing] = useState(false);
    const [followers, setFollowers] = useState(statistics.followers);

    const toggleFollow = useCallback(() => {
        setIsFollowing((state) => !state);
        setFollowers((count) => count + (isFollowing ? -1 : 1));
    });

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <Button
                    className={`${styles.card__like} ${isLike ? styles.isActive : ""}`}
                    onClick={toggleLike}
                >
                    ❤
                </Button>
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
            <Button className={styles.card__follow} onClick={toggleFollow}>
                {isFollowing ? "✓" : "+"}
            </Button>
            <div className={styles.card__body}>
                <StatisticsList statistics={{ ...statistics, followers }} />
            </div>
        </article>
    );
};

export default UserCard;
