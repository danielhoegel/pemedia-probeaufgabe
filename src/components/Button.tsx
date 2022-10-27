import React, { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ColorType } from '../utils/utilTypes';

type ButtonProps = {
    secondary?: boolean;
    disabled?: boolean;
    className?: string;
    styles?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    color?: ColorType;
};

const StyledButton = styled.button<ButtonProps>`
    width: 100%;
    padding: var(--spacer);
    border: 1px solid ${(props) => `var(--color-${props.color})`};
    color: ${(props) => (props.secondary ? `var(--color-${props.color})` : 'var(--color-white)')};
    background-color: ${(props) =>
        props.secondary ? 'transparent' : `var(--color-${props.color})`};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

    &:not(:disabled) {
        &:hover,
        &:focus-visible {
            opacity: 0.75;
        }
    }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ secondary, disabled, children, color = 'accent', type = 'button', ...props }, ref) => {
        return (
            <StyledButton
                disabled={disabled}
                secondary={secondary}
                ref={ref}
                {...props}
                type={type}
                color={color}
            >
                {children}
            </StyledButton>
        );
    }
);

export default Button;
