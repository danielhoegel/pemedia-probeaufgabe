import React, { ChangeEvent, Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import { CODE_LENGTH, updateArrayAtIndex } from '../../../utils/utils';

type CodeInputPropsType = {
    loginButtonRef: RefObject<HTMLButtonElement>;
    code: string[];
    setCode: Dispatch<SetStateAction<string[]>>;
    className?: string;
};

const CodeInputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const CodeInputField = styled.input<{ hasValue: boolean }>`
    width: 47px;
    height: 52px;
    border: 1px solid var(--color-white);
    border-radius: 0.5rem;
    background-color: ${(props) => (props.hasValue ? 'var(--color-white)' : 'transparent')};
    color: var(--color-accent);
    font-size: 19px;
    line-height: 48px;
    text-align: center;
`;

const CodeInput: FC<CodeInputPropsType> = ({ loginButtonRef, code, setCode, className }) => {
    const inputRefs = useRef<Array<HTMLDivElement | null>>([]);

    if (inputRefs.current?.length !== CODE_LENGTH) {
        inputRefs.current = inputRefs.current.slice(0, CODE_LENGTH);
    }

    const focusNextElement = (index: number, value: string | undefined) => {
        const focusPreviousElement = !value;
        let focusElement: HTMLElement | null = null;

        if (focusPreviousElement) {
            if (index > 0) {
                focusElement = inputRefs.current?.[index - 1];
            }
        } else {
            if (index < CODE_LENGTH - 1) {
                focusElement = inputRefs.current?.[index + 1];
            } else {
                focusElement = loginButtonRef.current;
            }
        }

        if (focusElement) {
            focusElement.focus();

            if (focusElement instanceof HTMLInputElement) {
                focusElement.select();
            }
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const nextValue = e.target.value.length > 1 ? e.target.value.at(-1) : e.target.value; // only allow one character per field
        setCode((code) => updateArrayAtIndex(code, nextValue, index));
        focusNextElement(index, nextValue);
    };

    return (
        <CodeInputContainer className={className}>
            {code.map((value, index) => (
                <CodeInputField
                    key={index}
                    value={value}
                    onChange={(e) => changeHandler(e, index)}
                    hasValue={!!value}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onClick={(e) => e.currentTarget.select()}
                />
            ))}
        </CodeInputContainer>
    );
};

export default CodeInput;
