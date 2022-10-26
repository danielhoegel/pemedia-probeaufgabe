import React, { ChangeEvent, FC, RefObject } from 'react';
import styled from 'styled-components';

type CodeInputPropsType = {
    code: string[];
    codeInputFieldChangeHandler: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
    inputRefs: RefObject<Array<HTMLDivElement | null>>;
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

const CodeInput: FC<CodeInputPropsType> = ({
    code,
    className,
    inputRefs,
    codeInputFieldChangeHandler,
}) => {
    return (
        <CodeInputContainer className={className}>
            {code.map((value, index) => (
                <CodeInputField
                    key={index}
                    value={value}
                    onChange={(e) => codeInputFieldChangeHandler(e, index)}
                    hasValue={!!value}
                    ref={(el) => (inputRefs.current![index] = el)}
                    onClick={(e) => e.currentTarget.select()}
                />
            ))}
        </CodeInputContainer>
    );
};

export default CodeInput;
