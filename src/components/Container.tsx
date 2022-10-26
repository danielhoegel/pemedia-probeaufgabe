import styled from 'styled-components';

type ContainerProps = {
    color?: string;
};

const Container = styled.div<ContainerProps>`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--spacer);
    background-color: ${(props) => (props.color ? `var(--color-${props.color})` : 'transparent')};
    height: 100%;
`;

export default Container;
