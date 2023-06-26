import styled from "styled-components";

// css-in-js : js스타일로 css를 작성

// styled 뒤에는 html 요소가 온다
// props 받고 싶으면 props.어쩌구로 받으면 됨

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// 박스 색
const boxList = ["red", "pink", "green", "black"];

// 색을 넣으면 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨박";
    case "green":
      return "초박";
    case "pink":
      return "핑박";
    default:
      return "검박";
  }
};

export const Basic2 = () => {
  return (
    <StContainer>
      {boxList.map((box) => {
        return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
      })}
      {/* <StBox borderColor="red">red</StBox>
      <StBox borderColor="pink">pink</StBox>
      <StBox borderColor="green">green</StBox> */}
    </StContainer>
  );
};
