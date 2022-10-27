import styled from 'styled-components';

export const StyledLabel = styled.label<{ error?: boolean }>`
    position: absolute;
    top: var(--spacer);
    left: 0;
    color: ${(props) => (props.error ? 'var(--color-danger)' : 'var(--color-gray-700)')};
    transition: all 0.1s ease-in-out;
    user-select: none;
    pointer-events: none;
`;

export const StyledInput = styled.input<{ error?: boolean }>`
    width: 100%;
    font-size: var(--font-base-size);
    border: none;
    border-bottom: 2px solid
        ${(props) => (props.error ? 'var(--color-danger)' : 'var(--color-secondary)')};
    background-color: transparent;
    outline: 0;
    padding: var(--spacer) 0;
    padding-right: ${(props) => (props.error ? '2rem' : '0')};
    color: ${(props) => (props.error ? 'var(--color-danger)' : 'var(--color-body)')};

    &:focus,
    &:not(:placeholder-shown) {
        & + ${StyledLabel} {
            transform: translateY(calc(-1 * (var(--spacer) + var(--font-small-size))));
            font-size: var(--font-small-size);
        }
    }
`;

export const StyledErrorMessage = styled.div`
    color: var(--color-danger);
    font-size: var(--font-small-size);
    text-align: right;
`;
