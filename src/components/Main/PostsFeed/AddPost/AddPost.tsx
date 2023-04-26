import styled from "styled-components";
import {
  AddPostAvaStyled,
  AddPostBtmStyled,
  AddPostFeelingStyled,
  AddPostInputStyled, AddPostLiveStyled, AddPostMediaStyled,
  AddPostStyled,
  AddPostTopStyled
} from "./AddPostStyles";
import {FC} from "react";

export const AddPostBlock:FC = () => {
  return (
    <AddPostStyled>
      <AddPostTopStyled>
        <AddPostAvaStyled />
        <AddPostInputStyled
          type="text"
          placeholder="What's on your mind, Bohdan?"
        />
      </AddPostTopStyled>
      <AddPostBtmStyled>
        <AddPostLiveStyled></AddPostLiveStyled>
        <AddPostMediaStyled></AddPostMediaStyled>
        <AddPostFeelingStyled></AddPostFeelingStyled>
      </AddPostBtmStyled>
    </AddPostStyled>
  )
}