import Button from "../../../shared/ui/Button/Button";

const FollowButton = (props) => {
    const {
        className = "",
        type = "button",
        children,
        isDisabled = false,
        onClick,
    } = props;

    return (
        <Button
            className={className}
            type={type}
            isDisabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default FollowButton;
