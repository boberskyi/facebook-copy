import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderCenterStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderTabTextStyled = styled.div`
  padding: 5px 10px;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255,255,255,0.7);
  border-radius: 8px;
  font-size: 14px;
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0,0,1,1);
  color: #1c1e21;
  opacity: 0;
`
export const HeaderNavLinkHStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 100%;
  background-color: rgba(255,255,255,0);
  
  svg {
    fill: #b0b3b8;
  }

  &:hover {
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    transition-duration: 0.1s;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0,0,1,1);
  }

  &:hover ~ ${HeaderTabTextStyled} {
    opacity: 1;
  }
`
export const HeaderNavLinkStyled = styled(NavLink)`
  position: relative;
  height: 100%;
  padding: 5px 0;
  
  &.active {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 100%;
    
    svg {
      fill: #2374e1;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #2374e1;
      transition-timing-function: cubic-bezier(.08,.52,.52,1);
    }
  }
  .navLinkActive .navLinkIco {
    fill: #2374e1;
  }
  
`