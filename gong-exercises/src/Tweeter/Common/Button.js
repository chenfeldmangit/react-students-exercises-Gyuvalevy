import React from "react";
import PropTypes from 'prop-types';

const Button = ({className, id, disabled, text, onChangeFunc}) => {
    return (
        <button className={`basic-button ${className}`} id={id} onClick={onChangeFunc} disabled={disabled} >
            {text}
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
    onChangeFunc: PropTypes.func,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    onChangeFunc: () => {},
    id: '',
    className: '',
    text: '',
    disabled: false,
}

export default Button;
