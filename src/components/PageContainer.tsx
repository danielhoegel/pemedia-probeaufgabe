import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type PageContainerPropsType = {
    color?: string;
    children: ReactNode;
};

const OuterContainer = styled.div<PageContainerPropsType>`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0 40px;
    background-color: ${(props) => (props.color ? `var(--color-${props.color})` : 'transparent')};
`;

const InnerContainer = styled.div<PageContainerPropsType>`
    max-width: var(--container-width);
    margin: 0 auto;
`;

const PageContainer: FC<PageContainerPropsType> = ({ color, children }) => {
    return (
        <OuterContainer color={color}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    );
};

export default PageContainer;
