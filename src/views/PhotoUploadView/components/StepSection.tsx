import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import HorizontalDivider from '../../../components/HorizontalDivider';

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

type StepSectionPropsType = {
    step: number;
    title: string;
    subTitle: string;
    children: ReactNode;
    className?: string;
};

const StepSection: FC<StepSectionPropsType> = ({ step, title, subTitle, className, children }) => {
    return (
        <div className={className}>
            <StepNumber className="mx-auto">{step}</StepNumber>
            <h2 className="text-center">{title}</h2>
            <HorizontalDivider />
            <div className="text-center">{subTitle}</div>
            {children}
        </div>
    );
};

export default StepSection;
