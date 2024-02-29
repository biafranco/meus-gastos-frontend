import styled from 'styled-components';

export const MenuButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ContainerButtons = styled.div` 
display: ${( props ) => props.display ? "flex" : "none"};
`;
