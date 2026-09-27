import styles from "./StatisticsItem.module.css";

const StatisticsItem = (props) => {
    const { title, number } = props;

    return (
        <li className={styles.statisticsItem}>
            <span className={styles.statisticsItem__title}>{title}</span>
            <span className={styles.statisticsItem__number}>{number}</span>
        </li>
    );
};

export default StatisticsItem;
