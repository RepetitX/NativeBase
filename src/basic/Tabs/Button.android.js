const React = require("react");
const ReactNative = require("react-native");
const { TouchableNativeFeedback, View, Platform, TouchableOpacity } = ReactNative;

const Button = props => {
    if (Platform["Version"] <= 21) {
        return (
            <TouchableOpacity
                delayPressIn={0} // eslint-disable-line new-cap
                {...props}
            >
                {props.children}
            </TouchableOpacity>
        );
    }

    return (
        <TouchableNativeFeedback
            delayPressIn={0} // eslint-disable-line new-cap
            {...props}
        >
            {props.children}
        </TouchableNativeFeedback>
    );
};

module.exports = Button;
//export default Button;
