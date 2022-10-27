import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAreaInput from '../../components/inputs/TextAreaInput';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import { FilterType } from '../../utils/utilTypes';
import FilterSelector from './components/FilterSelector';
import PhotoUpload from './components/PhotoUpload';
import StepSection from './components/StepSection';
import SubmitForm from './components/SubmitForm';

const PhotoUploadView = () => {
    const navigate = useNavigate();
    const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('none');
    const [personalMessage, setPersonalMessage] = useState('');

    const submitHandler = ({ name, email, acceptTerms }) => {
        // console.log('submit', {
        //     uploadedPhoto,
        //     selectedFilter,
        //     personalMessage,
        //     name,
        //     email,
        //     acceptTerms,
        // });

        navigate('/');
    };

    const uploadedPhotoObjectUrl = useMemo(() => {
        if (uploadedPhoto) {
            return URL.createObjectURL(uploadedPhoto);
        }
        return '';
    }, [uploadedPhoto]);

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
                        uploadedPhotoObjectUrl={uploadedPhotoObjectUrl}
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
                        uploadedPhotoObjectUrl={uploadedPhotoObjectUrl}
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
                    <SubmitForm onSubmit={submitHandler} />
                </StepSection>
            </PageContainer>
        </>
    );
};

export default PhotoUploadView;
