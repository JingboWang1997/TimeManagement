import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

import { Colors } from "../../styles/GlobalStyles";

export const CategoriesBox = styled.div`
  height: 100%;
  padding: 40px;
`;

export const MyIconButton = styled(IconButton)`
  background-color: ${Colors.Stone};
  width: 72px;
  height: 72px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 48px;
  right: 48px;
`;

export const MyCreateNewFolderIcon = styled(CreateNewFolderIcon)`
  color: white;
`;
