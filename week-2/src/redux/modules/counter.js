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
    default:
      return state;
  }
};

export default counter;
