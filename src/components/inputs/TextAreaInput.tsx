import React, { ChangeEventHandler, FC } from 'react';

type TextAreaInputPropsType = {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextAreaInput: FC<TextAreaInputPropsType> = ({ value, onChange }) => {
    return <textarea value={value} onChange={onChange} />;
};

export default TextAreaInput;
