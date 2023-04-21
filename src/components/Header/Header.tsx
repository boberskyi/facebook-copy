import {HeaderStyled, HeaderWrapStyled} from "./HeaderStyles";
import {HeaderLeft} from "./HeaderLeft/HeaderLeft";
import {HeaderNav} from "./HeaderNav/HeaderNav";
import {HeaderControllsSettings} from "./HeaderControllsSettings/HeaderControllsSettings";
import {FC} from "react";
import {navLinksType} from "../../index";

type HeaderType = {
  navLinks: navLinksType[]
}

export const Header:FC<HeaderType> = ({navLinks}) => {
  return (
    <HeaderStyled>
      <div className={"container"}>
        <HeaderWrapStyled>
          <HeaderLeft/>
          <HeaderNav navLinks={navLinks}/>
          <HeaderControllsSettings/>
        </HeaderWrapStyled>
      </div>
    </HeaderStyled>

  )
}