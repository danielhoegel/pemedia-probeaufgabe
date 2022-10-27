import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import HorizontalDivider from '../../../components/HorizontalDivider';

type StepSectionPropsType = {
    step: number;
    title: string;
    subTitle: string;
    children: ReactNode;
    className?: string;
    isDisabled?: boolean;
};

const StepSectionWrapper = styled.section<{ isDisabled: StepSectionPropsType['isDisabled'] }>`
    ${(props) =>
        props.isDisabled &&
        `
        opacity: 0.5;
        pointer-events: none;
    `}
`;

const StepNumber = styled.div`
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StepSection: FC<StepSectionPropsType> = ({
    step,
    title,
    subTitle,
    className,
    children,
    isDisabled,
}) => {
    return (
        <StepSectionWrapper className={className} isDisabled={isDisabled}>
            <StepNumber className="mx-auto mb-4">{step}</StepNumber>
            <h2 className="text-center">{title}</h2>
            <HorizontalDivider className="my-3" />
            <div className="text-center mb-4">{subTitle}</div>
            {children}
        </StepSectionWrapper>
    );
};

export default StepSection;
