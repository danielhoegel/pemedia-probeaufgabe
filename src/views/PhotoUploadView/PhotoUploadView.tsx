import React, { useState } from 'react';
import Checkbox from '../../components/inputs/Checkbox';
import TextInput from '../../components/inputs/TextInput';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import FilterSelector from './components/FilterSelector';
import PhotoUpload from './components/PhotoUpload';
import StepSection from './components/StepSection';
import { FilterType } from '../../utils/utilTypes';
import TextAreaInput from '../../components/inputs/TextAreaInput';

const PhotoUploadView = () => {
    const [uploadedPhoto, setUploadedPhoto] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('none');
    const [personalMessage, setPersonalMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    // const photoUploadHandler = () => {};

    // const submitHandler = () => {};

    return (
        <>
            <PageHeader />
            <PageContainer>
                <StepSection
                    step={1}
                    title="Dein Foto"
                    subTitle="Lade ein Foto hoch oder erstelle mit deiner Kamera ein neues Bild."
                    className="mt-5 mb-5"
                >
                    <PhotoUpload
                        uploadedPhoto={uploadedPhoto}
                        setUploadedPhoto={setUploadedPhoto}
                    />
                </StepSection>
                <StepSection
                    step={2}
                    title="Dein Look"
                    subTitle="Gib dem Bild mit unseren Filtern eine ganz besondere Stimmung."
                    className="mb-5"
                    isDisabled={!uploadedPhoto}
                >
                    <FilterSelector
                        uploadedPhoto={uploadedPhoto}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                </StepSection>
                <StepSection
                    step={3}
                    title="Deine Grußbotschaft"
                    subTitle="Mit deiner persönlichen Grußbotschaft gibst du der Karte deinen persönlichen Touch."
                    className="mb-5"
                    isDisabled={!uploadedPhoto || !selectedFilter}
                >
                    <TextAreaInput
                        value={personalMessage}
                        onChange={(e) => setPersonalMessage(e.currentTarget.value)}
                    />
                </StepSection>
                <StepSection
                    step={4}
                    title="Versand"
                    subTitle="Gib uns noch Bescheid, wann die Karte beim Paar ankommen soll und verrate uns deinen Namen."
                    className="mb-5"
                    isDisabled={!uploadedPhoto || !selectedFilter || !personalMessage}
                >
                    <TextInput value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    <TextInput value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    <Checkbox
                        checked={acceptTerms}
                        onSelect={(e) => setAcceptTerms(e.currentTarget.checked)}
                    />
                </StepSection>
            </PageContainer>
        </>
    );
};

export default PhotoUploadView;
