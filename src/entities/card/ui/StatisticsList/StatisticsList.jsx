import StatisticsItem from "../StatisticsItem/StatisticsItem";

const StatisticsList = () => {
    return (
        <ul>
            <StatisticsItem title="Tweets" number="1337" />
            <StatisticsItem title="Following" number="561" />
            <StatisticsItem title="Followers" number="718" />
        </ul>
    );
};

export default StatisticsList;
