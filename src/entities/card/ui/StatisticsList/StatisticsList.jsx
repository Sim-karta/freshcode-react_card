import StatisticsItem from "../StatisticsItem/StatisticsItem";

const StatisticsList = (props) => {
    const { statistics } = props;

    return (
        <ul>
            <StatisticsItem title="Tweets" number={statistics.tweets} />
            <StatisticsItem title="Following" number={statistics.following} />
            <StatisticsItem title="Followers" number={statistics.followers} />
        </ul>
    );
};

export default StatisticsList;
