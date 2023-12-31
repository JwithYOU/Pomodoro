import styled from 'styled-components';
import * as S from '../styles/SetForm.styled';

const SetForm = () => {
  return (
    <S.FormContainer>
      <S.FormLabel>유튜브 재생목록:</S.FormLabel>
      <S.FormInput></S.FormInput>

      <S.FormLabel>공부 시간</S.FormLabel>
      <S.FormInput></S.FormInput>

      <S.FormLabel>쉬는 시간</S.FormLabel>
      <S.FormInput></S.FormInput>

      <S.StartButton>시작</S.StartButton>
    </S.FormContainer>
  );
};

export default SetForm;
