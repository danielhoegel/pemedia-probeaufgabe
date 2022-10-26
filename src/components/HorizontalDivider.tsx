import styled from 'styled-components';
import { ColorType } from '../utils/utilTypes';

type HorizontalDividerPropsType = {
    color?: ColorType;
};

const HorizontalDivider = styled.div<HorizontalDividerPropsType>`
    width: 2rem;
    height: 0.25rem;
    margin: 0 auto;
    background-color: ${(props) =>
        props.color ? `var(--color-${props.color})` : 'var(--color-primary)'};
`;

export default HorizontalDivider;
