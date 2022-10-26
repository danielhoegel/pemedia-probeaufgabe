import React, { FC } from 'react';
import styled from 'styled-components';
import { HorizontalDivider } from '../../../components/HorizontalDivider';

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

const StepTitle = styled.h2`
    font-size: 1.5rem;
`;

type StepWrapperPropsType = { step: number; title: string };

const StepWrapper: FC<StepWrapperPropsType> = ({ step, title }) => {
    return (
        <div>
            <StepNumber>{step}</StepNumber>
            <StepTitle>{title}</StepTitle>
            <HorizontalDivider />
        </div>
    );
};

export default StepWrapper;
