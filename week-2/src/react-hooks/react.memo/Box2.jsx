import React from "react";
const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4e93ed",
  color: "white",

  // 가운데 정렬 3종세트
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Box2 = () => {
  console.log("Box2 component rendered");
  return <div style={boxStyle}>Box2</div>;
};

export default React.memo(Box2);
