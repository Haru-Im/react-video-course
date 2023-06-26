import styled from "styled-components";

// css-in-js : js스타일로 css를 작성

// styled 뒤에는 html 요소가 온다
// 부모 컴포넌트에서 자식 컴포넌트로 props 받고 싶으면 props.어쩌구로 받으면 됨
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const StP = styled.p`
  color: blue;
`;

export const Basic = () => {
  return (
    <StBox borderColor="green">
      dd
      <StP>d</StP>
      <StBox borderColor="red">d</StBox>
      <StBox borderColor="pink">d</StBox>
      <StBox borderColor="plum">d</StBox>
    </StBox>
  );
};
