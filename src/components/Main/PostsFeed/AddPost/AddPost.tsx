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
import {ChangeEvent, FC, useState} from "react";

type AddPostBlockType = {
  addPost: (postText: string) => void
}

export const AddPostBlock: FC<AddPostBlockType> = ({addPost}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [postText, setPostText] = useState('');
  const onChangePostTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.currentTarget.value);
  }
  const addPostHandler = () => {
    addPost(postText);
    setPostText('');
    setPopupVisible(false);
  }

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
          <AddPostPopupCloseStyled
            onClick={() => setPopupVisible(false)}
          >
            x
          </AddPostPopupCloseStyled>
          <AddPostPopupTextStyled
            value={postText}
            onChange={onChangePostTextHandler}
            placeholder="What's on your mind, Bohdan?"
          >
          </AddPostPopupTextStyled>
          <AddPostPopupButtonStyled
            onClick={addPostHandler}
          >
            Publish
          </AddPostPopupButtonStyled>
        </AddPostPopupWrapStyled>
      </AddPostPopupStyled>
    </AddPostStyled>
  )
}