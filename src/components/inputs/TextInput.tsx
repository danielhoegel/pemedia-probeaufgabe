import React, { ChangeEventHandler, Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { StyledErrorMessage, StyledInput, StyledLabel } from './inputStyles';
import errorIcon from '../../assets/icons/error.svg';
import styled from 'styled-components';

type TextInputPropsType = {
    name: string;
    label?: string | ReactNode;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    error: string;
    touched: boolean;
    setTouched: Dispatch<SetStateAction<{ [fieldName: string]: boolean }>>;
};

const StyledErrorIcon = styled.div`
    position: absolute;
    top: var(--spacer);
    right: 0;
`;

const ErrorIcon = () => {
    return (
        <StyledErrorIcon>
            <img src={errorIcon} alt=" " />
        </StyledErrorIcon>
    );
};

const TextInput: FC<TextInputPropsType> = ({
    value,
    onChange,
    label,
    name,
    className,
    error,
    touched,
    setTouched,
}) => {
    const isErrorVisible = !!error && !!touched;
    return (
        <div className={className}>
            <div className="position-relative mt-3">
                <StyledInput
                    name={name}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={(e) =>
                        setTouched &&
                        setTouched((currentState) => ({ ...currentState, [e.target.name]: true }))
                    }
                    placeholder=" "
                    error={isErrorVisible}
                />
                {label && (
                    <StyledLabel htmlFor={name} error={isErrorVisible}>
                        {label}
                    </StyledLabel>
                )}
                {isErrorVisible && <StyledErrorMessage>{error}</StyledErrorMessage>}
                {isErrorVisible && <ErrorIcon />}
            </div>
        </div>
    );
};

export default TextInput;
