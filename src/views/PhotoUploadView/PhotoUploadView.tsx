import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import StepWrapper from './components/StepWrapper';

const Header = styled.header`
    background-color: var(--color-primary);
    height: 45pt;
`;

const PhotoUploadView = () => {
    return (
        <Container>
            <Header />
            <StepWrapper step={1} title="Dein Foto" />
        </Container>
    );
};

export default PhotoUploadView;
