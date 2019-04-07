import React from "react";

function AboutRecipeInfo({ createDate, updateDate, author }) {
  return (
    <div className="create-info">
      <div>
        <span className="label">Posted:</span>
        {createDate}
      </div>

      <div>
        <span className="label">Edited:</span>
        {updateDate}
      </div>

      <div>
        <span className="label">By:</span>
        {author.userName}
      </div>
    </div>
  );
}

export default AboutRecipeInfo;
