const StatisticsItem = (props) => {
    const { title, number } = props;

    return (
        <li>
            <p>{title}</p>
            <p>{number}</p>
        </li>
    );
};

export default StatisticsItem;
