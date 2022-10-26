import React, { ChangeEventHandler, FC } from 'react';

type TextInputPropsType = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: FC<TextInputPropsType> = ({ value, onChange }) => {
    return <input type="text" value={value} onChange={onChange} />;
};

export default TextInput;
