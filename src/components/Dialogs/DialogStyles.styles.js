import styled from "styled-components";
import {
  Header3Light,
  SecondaryButton,
  StyledTextField,
  StyledTextValidator,
} from "../../styles/GlobalStyles";
import { KeyboardDatePicker } from "@material-ui/pickers";

export const DialogContent = styled.div`
  padding: 24px 48px;
`;

export const DialogTitle = styled(Header3Light)`
  margin-bottom: 8px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ $editMode }) =>
    $editMode ? "space-between" : "flex-end"};
`;

export const CancelButton = styled(SecondaryButton)`
  margin-right: 16px;
`;

export const MyTextValidator = styled(StyledTextValidator)`
  margin-bottom: 20px;
`;

export const MyTextField = styled(StyledTextField)`
  margin-bottom: 20px;
`;

export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 0px;
`;
