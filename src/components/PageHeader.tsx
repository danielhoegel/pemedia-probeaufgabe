import React from 'react';
import styled from 'styled-components';
import logoShort from '../assets/logos/logo_short.svg';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: var(--color-primary);
    height: 45px;
    display: flex;
    align-items: center;
`;

const PageHeader = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader className="px-5">
            <img src={logoShort} alt="42 MEMORIES logo" onClick={() => navigate('/')} />
        </StyledHeader>
    );
};

export default PageHeader;
