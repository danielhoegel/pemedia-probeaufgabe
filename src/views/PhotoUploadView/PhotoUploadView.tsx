import React from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/PageContainer';
import StepSection from './components/StepSection';

const Header = styled.header`
    background-color: var(--color-primary);
    height: 45px;
`;

const PhotoUploadView = () => {
    // const [uploadedPhoto, setUploadedPhoto] = useState(null);
    // const [selectedFilter, setSelectedFilter] = useState(null);
    // const [personalMessage, setPersonalMessage] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [acceptTerms, setAcceptTerms] = useState(false);

    // const photoUploadHandler = () => {};

    // const submitHandler = () => {};

    return (
        <PageContainer>
            <Header />
            <StepSection
                step={1}
                title="Dein Foto"
                subTitle="Lade ein Foto hoch oder erstelle mit deiner Kamera ein neues Bild."
            >
                PHOTO UPLOAD
            </StepSection>
            <StepSection
                step={2}
                title="Dein Look"
                subTitle="Gib dem Bild mit unseren Filtern eine ganz besondere Stimmung."
            >
                FILTER SELECTOR
            </StepSection>
            <StepSection
                step={3}
                title="Deine Grußbotschaft"
                subTitle="Mit deiner persönlichen Grußbotschaft gibst du der Karte deinen persönlichen Touch."
            >
                TEXTAREA
            </StepSection>
            <StepSection
                step={4}
                title="Versand"
                subTitle="Gib uns noch Bescheid, wann die Karte beim Paar ankommen soll und verrate uns deinen Namen."
            >
                NAME INPUT E-MAIL INPUT AGB
            </StepSection>
        </PageContainer>
    );
};

export default PhotoUploadView;
