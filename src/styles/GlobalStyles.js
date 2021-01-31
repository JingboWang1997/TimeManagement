import styled from "styled-components";
import { Link, Checkbox, FormControlLabel } from "@material-ui/core";

export const Colors = {
  Denim: "#2F3542",
  Spruce: "#747d8c",
  Stone: "#a4b0be",
  Cotton: "#edeef2",
};

// TYPOGRAPHY
export const Header1 = styled.h1`
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: ${Colors.Denim};
  margin: 0;
`;

export const Header3 = styled.h3`
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  font-size: 1.375rem;
  color: ${Colors.Denim};
  margin: 0;
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
    color: #000;
  }
`;
