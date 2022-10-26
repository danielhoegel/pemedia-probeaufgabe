import React, { Dispatch, FC, SetStateAction } from 'react';
import { filter } from '../filter';
import dummyImage from '../../../assets/img/dummy_image.png';
import { FilterType } from '../../../utils/utilTypes';
import styled from 'styled-components';

const FilterPreview = styled.img<{ filterString: string }>`
    filter: ${(props) => props.filterString};
    width: 100%;
    display: block;
`;

const FilterPreviewThumbnail = styled(FilterPreview)`
    aspect-ratio: 1/1;
    object-fit: cover;
`;

const FilterSelectorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacer);
`;

type FilterSelectorPropsType = {
    uploadedPhoto: string | null;
    selectedFilter: FilterType;
    setSelectedFilter: Dispatch<SetStateAction<FilterType>>;
};

const FilterSelector: FC<FilterSelectorPropsType> = ({
    uploadedPhoto,
    selectedFilter,
    setSelectedFilter,
}) => {
    return (
        <div>
            <FilterPreview
                filterString={selectedFilter}
                src={uploadedPhoto || dummyImage}
                alt="Dummy"
                className="mb-3"
            />
            <FilterSelectorGrid>
                {Object.entries(filter).map(([name, filterString]) => (
                    <FilterPreviewThumbnail
                        key={name}
                        onClick={() => setSelectedFilter(name as FilterType)}
                        src={dummyImage}
                        alt={`Filter ${name}`}
                        filterString={filterString}
                    />
                ))}
            </FilterSelectorGrid>
        </div>
    );
};

export default FilterSelector;
