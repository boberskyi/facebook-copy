import styled from "styled-components";

export const AddPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 12px 16px 10px;
`
export const AddPostTopStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  background-color: rgba(36,37,38,1);
  border-radius: 8px;
`
export const AddPostAvaStyled = styled.img`
  min-width: 40px;
  max-width: 40px;
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  height: 100%;
  border-radius: 50%;
  background: rgba(1,1,1,.1);
  border: none;
`
export const AddPostInputStyled = styled.div`
  width: 100%;
  background-color: rgba(58,59,60,.08);
  border-radius: 20px;
  color: rgb(28,30,31);
  cursor: pointer;
  font-size: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
`
export const AddPostBtmStyled = styled.div`
`
export const AddPostLiveStyled = styled.div`
`
export const AddPostMediaStyled = styled.div`
`
export const AddPostFeelingStyled = styled.div`
`
interface AddPostPopupStyledProps {
  visible: boolean
}
export const AddPostPopupStyled = styled.div<AddPostPopupStyledProps>`
  display: ${props => props.visible ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:  rgba(0,0,0,.5);
  z-index: 105;
  align-items: center;
  justify-content: center;
`
export const AddPostPopupWrapStyled = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  background-color: rgb(36,37,38);
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
`
export const AddPostPopupCloseStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
export const AddPostPopupTextStyled = styled.textarea`
`
export const AddPostPopupButtonStyled = styled.button`
`








