// action Value
// 상수는 보통 대문자로 작성

const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

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

export const plusN = (payload) => {
  console.log(payload);
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  console.log(payload);
  return {
    type: MINUS_N,
    payload,
  };
};

//초기 상태값(state)
const initialState = {
  number: 0,
};

//reducer는 state에 변화를 일으키는 함수
//(1) state를 action의 type에 따라 변경하는 함수

// action에는 type과 value가 있음
// action 객체 -> action type을 payload만큼 처리하는 것
// ex: payload가 3이라면, 3만큼을 plus하는 것
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
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
