import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Colors, BodyText } from "../../styles/GlobalStyles";

export const MyIconButton = styled(IconButton)`
  padding: 0;
  color: ${Colors.Denim};
`;

export const ActionText = styled(BodyText)`
  color: ${Colors.Denim};
  text-align: center;
`;

export const ActionButton = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  :hover {
    background-color: ${Colors.Cotton};
  }
`;
