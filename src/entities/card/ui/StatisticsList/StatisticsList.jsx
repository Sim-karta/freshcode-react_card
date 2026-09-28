import { memo } from "react";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import styles from "./StatisticsList.module.css";

const StatisticsList = (props) => {
    const { statistics } = props;

    return (
        <ul className={styles.statisticsList}>
            <StatisticsItem title="Tweets" number={statistics.tweets} />
            <StatisticsItem title="Following" number={statistics.following} />
            <StatisticsItem title="Followers" number={statistics.followers} />
        </ul>
    );
};

export default memo(StatisticsList);
