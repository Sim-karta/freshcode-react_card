import UserCard from "../../../widgets/card/ui/UserCard/UserCard";

const CardPage = () => {
    return (
        <>
            <UserCard
                name="Sadie Sink"
                profile="@SadieSink"
                link="https://google.com"
                statistics={{
                    treets: 1337,
                    following: 561,
                    followers: 718,
                }}
            />
        </>
    );
};

export default CardPage;
