import React from "react";
import "./Test.scss";

interface Props {
  afterContent?: string;
  beforeContent?: string;
}
const Test = ({ afterContent, beforeContent }: Props): JSX.Element => {
  return (
    <div>
      <p className="test" data-before-content={afterContent} data-after-content={beforeContent}>
        가상선택자
      </p>
    </div>
  );
};

export default Test;
