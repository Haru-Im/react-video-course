// src/pages/Work.js

import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const param = useParams();
  console.log(param);

  const work = data.find((work) => work.id === parseInt(param.id));

  return <div>{work.todo}</div>;
}

export default Work;
