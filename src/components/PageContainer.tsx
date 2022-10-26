import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type PageContainerPropsType = {
    color?: string;
    children: ReactNode;
};

const OuterContainer = styled.main<PageContainerPropsType>`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: ${(props) => (props.color ? `var(--color-${props.color})` : 'transparent')};
`;

const InnerContainer = styled.div<PageContainerPropsType>`
    max-width: var(--container-width);
    margin: 0 auto;
`;

const PageContainer: FC<PageContainerPropsType> = ({ color, children }) => {
    return (
        <OuterContainer color={color} className="px-5">
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    );
};

export default PageContainer;
