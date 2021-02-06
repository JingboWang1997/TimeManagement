import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { Colors, BodyText } from "../../styles/GlobalStyles";

// CONTAINERS
export const CategoryContainer = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 4px ${Colors.Stone};
`;

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  box-shadow: 0 2px ${Colors.Cotton};
`;

export const CommitmentContainer = styled.div`
  height: 500px;
  overflow: scroll;
`;

export const NewCommitmentBox = styled.div`
  padding: 24px 32px;
`;

// ICONS
export const MyCreateIcon = styled(CreateIcon)`
  cursor: pointer;
`;

export const MyCloseRoundedIcon = styled(CloseRoundedIcon)`
  margin-left: 24px;
  cursor: pointer;
`;

// OTHER
export const NewCommitmentButton = styled(BodyText)`
  text-align: center;
  cursor: pointer;
`;
