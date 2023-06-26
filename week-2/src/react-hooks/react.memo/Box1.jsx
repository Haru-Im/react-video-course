import React from "react";

const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#91c49f",
  color: "white",

  // 가운데 정렬 3종세트
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Box1 = () => {
  console.log("Box1 component rendered");
  return <div style={boxStyle}>Box1</div>;
};

export default React.memo(Box1);
