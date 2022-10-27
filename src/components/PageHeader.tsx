import React from 'react';
import styled from 'styled-components';
import logoShort from '../assets/logos/logo_short.svg';

const StyledHeader = styled.header`
    background-color: var(--color-primary);
    height: 45px;
    display: flex;
    align-items: center;
`;

const PageHeader = () => {
    return (
        <StyledHeader className="px-5">
            <a href="/">
                <img src={logoShort} alt="42 MEMORIES logo" />
            </a>
        </StyledHeader>
    );
};

export default PageHeader;
