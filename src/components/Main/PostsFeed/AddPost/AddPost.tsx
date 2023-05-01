import {
  AddPostAvaStyled,
  AddPostBtmStyled,
  AddPostFeelingStyled,
  AddPostInputStyled,
  AddPostLiveStyled,
  AddPostMediaStyled, AddPostPopupButtonStyled,
  AddPostPopupCloseStyled,
  AddPostPopupStyled,
  AddPostPopupTextStyled, AddPostPopupWrapStyled,
  AddPostStyled,
  AddPostTopStyled
} from "./AddPostStyles";
import {FC, useState} from "react";

export const AddPostBlock: FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <AddPostStyled>
      <AddPostTopStyled onClick={() => setPopupVisible(true)}>
        <AddPostAvaStyled/>
        <AddPostInputStyled>
          What's on your mind, Bohdan?
        </AddPostInputStyled>
      </AddPostTopStyled>
      <AddPostBtmStyled>
        <AddPostLiveStyled></AddPostLiveStyled>
        <AddPostMediaStyled></AddPostMediaStyled>
        <AddPostFeelingStyled></AddPostFeelingStyled>
      </AddPostBtmStyled>

      <AddPostPopupStyled visible={popupVisible}>
        <AddPostPopupWrapStyled>
          <AddPostPopupCloseStyled onClick={() => setPopupVisible(false)}>x</AddPostPopupCloseStyled>
          <AddPostPopupTextStyled
            id="post-textarea"
            placeholder="What's on your mind, Bohdan?"
          >
          </AddPostPopupTextStyled>
          <AddPostPopupButtonStyled>Publish</AddPostPopupButtonStyled>
        </AddPostPopupWrapStyled>
      </AddPostPopupStyled>
    </AddPostStyled>
  )
}