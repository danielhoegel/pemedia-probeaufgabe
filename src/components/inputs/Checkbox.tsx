import React, { ChangeEventHandler, Dispatch, FC, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';
import { StyledErrorMessage } from './inputStyles';
import checkIcon from '../../assets/icons/check.svg';

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
`;

const CheckboxBox = styled.div<{ checked: boolean; error?: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${(props) => (props.error ? 'var(--color-danger)' : 'var(--color-secondary)')};
    background-color: ${(props) => (props.checked ? 'var(--color-accent)' : 'transparent')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckIcon = styled.img`
    width: 0.75rem;
    height: auto;
`;

type CheckboxPropsType = {
    name: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label?: string | ReactNode;
    error: string;
    touched: boolean;
    setTouched: Dispatch<SetStateAction<{ [fieldName: string]: boolean }>>;
    className?: string;
};

const Checkbox: FC<CheckboxPropsType> = ({
    checked,
    onChange,
    name,
    label,
    error,
    touched,
    setTouched,
    className,
}) => {
    const isErrorVisible = !!error && !!touched;

    return (
        <div className={className}>
            <input
                name={name}
                id={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                onBlur={(e) =>
                    setTouched &&
                    setTouched((currentState) => ({ ...currentState, [e.target.name]: true }))
                }
                hidden
            />
            {label && (
                <CheckboxLabel htmlFor={name}>
                    <CheckboxBox checked={checked} className="me-3" error={isErrorVisible}>
                        {checked && <CheckIcon src={checkIcon} alt="Checked" />}
                    </CheckboxBox>
                    {label}
                </CheckboxLabel>
            )}
            {isErrorVisible && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </div>
    );
};
export default Checkbox;
