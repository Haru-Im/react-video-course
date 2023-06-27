// action Value
// 상수는 보통 대문자로 작성
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";

// action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

//초기 상태값(state)
const initialState = {
  number: 0,
};

//reducer는 state에 변화를 일으키는 함수
//(1) state를 action의 type에 따라 변경하는 함수

///input 2개 : state와 action
//action에는 type과 value가 있음
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
