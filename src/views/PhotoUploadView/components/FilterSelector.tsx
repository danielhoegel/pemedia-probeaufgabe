import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import checkIcon from '../../../assets/icons/check.svg';
import dummyImage from '../../../assets/img/dummy_image.png';
import { PHOTO_ASPECT_RATIO } from '../../../utils/constants';
import { FilterType } from '../../../utils/utilTypes';
import { filter } from '../filter';

const FilterPreview = styled.img<{ filterString: string }>`
    filter: ${(props) => props.filterString};
    width: 100%;
    display: block;
    aspect-ratio: ${PHOTO_ASPECT_RATIO};
    object-fit: cover;
`;
const FilterPreviewThumbnail = styled(FilterPreview)`
    aspect-ratio: 1/1;
    object-fit: cover;
    cursor: pointer;

    &:hover,
    &:focus-visible {
        opacity: 0.75;
    }
`;

const FilterSelectorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacer);
`;

const SelectedFilterOverlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 0.5rem solid var(--color-primary);
    display: flex;
    justify-content: end;
    align-items: start;
`;

const CheckIconWrapper = styled.div`
    width: 20%;
    aspect-ratio: 1 / 1;
    background-color: var(--color-primary);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CheckIcon = styled.img`
    width: 40%;
`;

type FilterSelectorPropsType = {
    uploadedPhotoObjectUrl: string;
    selectedFilter: FilterType;
    setSelectedFilter: Dispatch<SetStateAction<FilterType>>;
};

const FilterSelector: FC<FilterSelectorPropsType> = ({
    uploadedPhotoObjectUrl,
    selectedFilter,
    setSelectedFilter,
}) => {
    return (
        <div>
            <FilterPreview
                filterString={filter[selectedFilter]}
                src={uploadedPhotoObjectUrl || dummyImage}
                alt="Dummy"
                className="mb-3"
            />
            <FilterSelectorGrid>
                {Object.entries(filter).map(([name, filterString]) => (
                    <div className="position-relative">
                        <FilterPreviewThumbnail
                            key={name}
                            onClick={() => setSelectedFilter(name as FilterType)}
                            src={uploadedPhotoObjectUrl || dummyImage}
                            alt={`Filter ${name}`}
                            filterString={filterString}
                        />
                        {selectedFilter === name && (
                            <SelectedFilterOverlay className="position-absolute p-2">
                                <CheckIconWrapper>
                                    <CheckIcon src={checkIcon} alt=" " />
                                </CheckIconWrapper>
                            </SelectedFilterOverlay>
                        )}
                    </div>
                ))}
            </FilterSelectorGrid>
        </div>
    );
};

export default FilterSelector;
