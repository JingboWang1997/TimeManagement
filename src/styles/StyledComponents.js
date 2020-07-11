import styled from 'styled-components';

export const NoMarginP = styled.p`
    margin: 0;
    padding: 0;
`;

export const Note = styled(NoMarginP)`
    color: gray;
    font-style: italic;
`;

export const Row = styled.div`
    display: flex; 
    flex-direction: row;
`;

export const CenteredRow = styled(Row)`
    align-items: center;
`;

export const Col = styled.div`
    display: flex; 
    flex-direction: column;
`;