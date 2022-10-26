import React, { Dispatch, FC, SetStateAction } from 'react';
import postcard from '../../../assets/img/postcard.png';

type PhotoUploadPropsType = {
    uploadedPhoto: any; // TODO
    setUploadedPhoto: Dispatch<SetStateAction<any>>; // TODO
};

const PhotoUpload: FC<PhotoUploadPropsType> = ({ uploadedPhoto, setUploadedPhoto }) => {
    return (
        <div>
            <img src={postcard} alt=" " />
        </div>
    );
};

export default PhotoUpload;
