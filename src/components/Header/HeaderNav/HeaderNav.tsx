import {FC} from "react";
import {HeaderCenterStyled, HeaderNavLinkHStyled, HeaderNavLinkStyled, HeaderTabTextStyled} from "./HeaderNavStyles";
import {navLinksType} from "../../../index";


type HeaderNavType = {
  navLinks: navLinksType[]
}

export const HeaderNav:FC<HeaderNavType> = ({navLinks}) => {
  return (
    <HeaderCenterStyled>
      {navLinks.map(nLink => {
        return (
          <HeaderNavLinkStyled
            key={nLink.id}
            end={nLink.end}
            to={nLink.path}
          >
            <HeaderNavLinkHStyled>{nLink.ico}</HeaderNavLinkHStyled>
            <HeaderTabTextStyled>{nLink.title}</HeaderTabTextStyled>
          </HeaderNavLinkStyled>
        )
      })}
    </HeaderCenterStyled>
  )
}