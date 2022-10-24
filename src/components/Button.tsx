import React, { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    secondary?: boolean;
    disabled?: boolean;
    className?: string;
    styles?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
    width: 100%;
    padding: var(--spacer);
    border: 1px solid ${(props) => (props.secondary ? 'var(--color-white)' : 'var(--color-accent)')};
    color: var(--color-white);
    background-color: ${(props) => (props.secondary ? 'transparent' : 'var(--color-accent)')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')}; ;
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ secondary, disabled, children, ...props }, ref) => {
        return (
            <StyledButton disabled={disabled} secondary={secondary} ref={ref} {...props}>
                {children}
            </StyledButton>
        );
    }
);

export default Button;
