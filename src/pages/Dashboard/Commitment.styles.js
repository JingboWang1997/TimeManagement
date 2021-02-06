import styled from "styled-components";
import {
  FlexBetween,
  Header4,
  BodyText,
  Colors,
} from "../../styles/GlobalStyles";

export const CommitmentContainer = styled.div`
  padding: 24px 32px;
`;

export const CommitmentTitleBox = styled(FlexBetween)`
  margin-bottom: 8px;
`;

export const DeadlineText = styled(Header4)`
  margin-left: 16px;
  font-weight: 500;
`;

export const CreateActionableText = styled(BodyText)`
  color: ${Colors.Stone};
  text-align: center;
`;
