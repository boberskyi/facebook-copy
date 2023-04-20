import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderLeftStyled = styled.div`
  max-width: 360px;
  min-width: 360px;
  width: 100%;
  display: flex;
  gap: 9px;
  align-items: center;
`
export const HeaderLogoStyled = styled(Link)`
  display: flex;
  align-items: center;
`
export const HeaderSearchStyled = styled.label`
  position: relative;
`
export const HeaderSearchIcoStyled = styled.span`
  position: absolute;
  left: 12px;
  top: 12px;
`
export const HeaderSearchInputStyled = styled.input`
  background-color: rgb(58,59,60);
  border: none;
  border-radius: 50px;
  color: rgb(228,230,235);
  font-size: 15px;
  min-width: 240px;
  max-width: 240px;
  width: 100%;
  height: 40px;
  padding: 0 15px 0 35px;
`