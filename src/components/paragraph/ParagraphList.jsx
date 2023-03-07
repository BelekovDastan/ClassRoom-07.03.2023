import React from "react";

const ParagraphList = (props) => {
  return (
    <div>
      {props.value.map((item) => (
        <p key={item.id}>{item.val}</p>
      ))}
    </div>
  );
};

export default ParagraphList;
