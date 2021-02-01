import styled from "styled-components";
import {
  Link,
  Checkbox,
  FormControlLabel,
  Dialog,
  Button,
  TextField,
  Select,
} from "@material-ui/core";
import {
  SelectValidator,
  TextValidator,
} from "react-material-ui-form-validator";

export const Colors = {
  Denim: "#2F3542",
  Spruce: "#747d8c",
  Stone: "#a4b0be",
  Cotton: "#edeef2",
  Cobalt: "#4558ea",
  Navy: "#3733a5",
};

// TYPOGRAPHY
export const Header1 = styled.h1`
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: ${Colors.Denim};
  margin: 0;
`;

export const Header1Light = styled(Header1)`
  font-weight: 700;
`;

export const Header3 = styled.h3`
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  font-size: 1.375rem;
  color: ${Colors.Denim};
  margin: 0;
`;

export const Header3Light = styled(Header3)`
  font-weight: 700;
`;

export const Header4 = styled.h4`
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: ${Colors.Denim};
  margin: 0;
`;

export const Header4Light = styled(Header4)`
  font-weight: 500;
  color: ${Colors.Spruce};
`;

export const BodyText = styled.p`
  font-weight: 500;
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  // line-height: 1.5;
  color: ${Colors.Spruce};
  margin: 0;
`;

export const LinkText = styled(Link)`
  font-weight: 500;
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
  color: ${Colors.Stone};
  text-decoration: underline;
`;

// CONTAINERS
export const FlexBox = styled.div`
  display: flex;
`;

export const FlexBetween = styled(FlexBox)`
  justify-content: space-between;
`;

// INPUT
export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 0;
  align-items: flex-start;
`;

export const StyledCheckbox = styled(Checkbox)`
  padding: 0;
  margin-right: 8px;
  &&.MuiCheckbox-colorSecondary.Mui-checked {
    color: ${Colors.Denim};
  }
`;

export const StyledTextField = styled(TextField)``;

export const StyledTextValidator = styled(TextValidator)``;

export const StyledSelectValidator = styled(SelectValidator)``;

export const MainButton = styled(Button)`
  background: linear-gradient(75deg, ${Colors.Navy}, ${Colors.Cobalt});
  height: 50px;
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  font-size: 1.125rem;
  border-radius: 28px;
  padding: 0px 16px;
`;

export const SecondaryButton = styled(MainButton)`
  background: white;
  color: ${Colors.Cobalt};
  border: 2px solid ${Colors.Cobalt};
`;

// OTHER
export const BasicDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 80vw;
    max-width: 600px;
    padding: 0;
    border-radius: 20px;
  }
`;
