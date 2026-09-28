import { memo } from "react";

const Button = (props) => {
    const {
        className = "",
        type = "button",
        children,
        isDisabled = false,
        onClick,
    } = props;

    return (
        <button
            className={className}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default memo(Button);
