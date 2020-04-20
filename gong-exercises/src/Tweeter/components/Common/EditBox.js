import React from "react";
import PropTypes from 'prop-types';

const EditBox = ({wrapperClassName, wrapperId, boxId, value, placeholder, iconClass, onChangeFunc}) => {
    return (
        <div className={`basic-input-wrapper ${wrapperClassName}`} id={wrapperId}>
            { iconClass && (<i className={iconClass}/>) }
            <label>
                <input className="basic-input" id={boxId} placeholder={placeholder} value={value} onChange={onChangeFunc} />
            </label>

        </div>
    );
}

EditBox.propTypes = {
    boxId: PropTypes.string,
    placeholder: PropTypes.string,
    wrapperClassName: PropTypes.string,
    wrapperId: PropTypes.string,
    iconClass: PropTypes.string,
    value: PropTypes.string,
    onChangeFunc: PropTypes.func.isRequired,
}

EditBox.defaultProps = {
    placeholder: 'Text Here...',
    wrapperClassName: '',
    wrapperId: '',
    value: '',
}

export default EditBox;
