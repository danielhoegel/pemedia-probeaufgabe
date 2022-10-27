import React, { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import { StyledInput } from './inputStyles';

const StyledTextArea = styled(StyledInput)`
    background-color: var(--color-white);
    border-bottom-color: var(--color-primary);
    border-bottom-width: 0.25rem;
    resize: none;
    padding: 1.5rem;
    line-height: var(--base-line-height);
`;

type TextAreaInputPropsType = {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextAreaInput: FC<TextAreaInputPropsType> = ({ value, onChange }) => {
    return <StyledTextArea as="textarea" value={value} onChange={onChange} rows={10} />;
};

export default TextAreaInput;
