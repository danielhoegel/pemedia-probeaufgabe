import React, { ChangeEvent, Dispatch, FC, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../../assets/icons/upload.svg';
import postcard from '../../../assets/img/postcard.png';
import Button from '../../../components/Button';
import { PHOTO_ASPECT_RATIO } from '../../../utils/constants';

const PhotoUploadContainer = styled.div`
    position: relative;
`;

const PostcardImage = styled.img`
    width: 100%;
    height: auto;
`;

const PhotoContainer = styled.div`
    width: 80%;
    aspect-ratio: ${PHOTO_ASPECT_RATIO};
    box-shadow: 0 3px 7px var(--color-gray-600);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const UploadedPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const UploadPlaceholder = styled.label`
    border: 0.2rem dashed var(--color-accent);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-200);
    cursor: pointer;

    &:hover,
    &:focus-visible {
        opacity: 0.75;
    }
`;
const UploadPlaceholderImageWrapper = styled.div`
    width: 20%;
    position: relative;

    &:after {
        content: '+';
        font-size: 7vw;
        line-height: 0.5;
        color: var(--color-accent);
        font-weight: bold;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

const UploadPlaceholderImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

type PhotoUploadPropsType = {
    uploadedPhotoObjectUrl: string;
    setUploadedPhoto: Dispatch<SetStateAction<File | null>>;
};

const PhotoUpload: FC<PhotoUploadPropsType> = ({ uploadedPhotoObjectUrl, setUploadedPhoto }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const uploadedPhotoRef = useRef<HTMLImageElement>(null);

    const openFileUploadHandler = () => {
        fileInputRef.current?.click();
    };

    const selectFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        if (file) {
            setUploadedPhoto(file);
        } else {
            setUploadedPhoto(null);
        }
    };

    return (
        <>
            <input type="file" ref={fileInputRef} hidden onChange={selectFileHandler} />

            <PhotoUploadContainer>
                <PostcardImage src={postcard} alt=" " />

                <PhotoContainer className="bg-white p-2">
                    <UploadedPhoto
                        src={uploadedPhotoObjectUrl}
                        alt="Uploaded"
                        ref={uploadedPhotoRef}
                        style={{ display: uploadedPhotoObjectUrl ? 'block' : 'none' }}
                    />

                    {!uploadedPhotoObjectUrl && (
                        <UploadPlaceholder onClick={openFileUploadHandler} htmlFor="fileInput">
                            <UploadPlaceholderImageWrapper>
                                <UploadPlaceholderImage src={uploadIcon} alt="Upload placeholder" />
                            </UploadPlaceholderImageWrapper>
                        </UploadPlaceholder>
                    )}
                </PhotoContainer>
            </PhotoUploadContainer>
            <Button
                secondary={!!uploadedPhotoObjectUrl}
                color="primary"
                className="mt-2"
                onClick={openFileUploadHandler}
            >
                {uploadedPhotoObjectUrl ? 'Foto neu wählen' : 'Foto hochladen'}
            </Button>
        </>
    );
};

export default PhotoUpload;
