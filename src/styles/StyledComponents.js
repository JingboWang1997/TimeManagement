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

// AlignedRow aligns the row on a horizontal center line
export const AlignedRow = styled(Row)`
    align-items: center;
`;

// CenteredRow puts the contents in the center
export const CenteredRow = styled(Row)`
    justify-content: center;
`;

export const Col = styled.div`
    display: flex; 
    flex-direction: column;
`;