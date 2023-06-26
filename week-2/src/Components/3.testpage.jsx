// styled-components는 해당 컴포넌트 안에서만
// 전역 스타일링은 프로젝트 전체를 아우르는 스타일

import styled from "styled-components";

function TestPage(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Wrapper>
  );
}

// 각 내용들이 지역 컴포넌트 스타일링
const Title = styled.h1`
  line-height: 1.5;

  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.p`
  margin: 0;

  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
`;

export default TestPage;
