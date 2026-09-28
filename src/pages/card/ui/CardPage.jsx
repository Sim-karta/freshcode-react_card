import UserCard from "../../../widgets/card/ui/UserCard/UserCard";

const CardPage = () => {
    const user = {
        name: "Sadie Sink",
        gender: "female",
        profile: "@SadieSink",
        link: "https://google.com",
        statistics: {
            tweets: 1337,
            following: 561,
            followers: 718,
        },
    };

    return (
        <>
            <UserCard {...user} />
        </>
    );
};

export default CardPage;
