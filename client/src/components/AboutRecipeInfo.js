import React from "react";

function AboutRecipeInfo({ createDate, updateDate, authorName, style }) {
  const formatDate = time => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const date = new Date(time);
    const month = monthNames[date.getMonth()];
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
  };

  return (
    <div className="create-info" style={style}>
      <div>
        <span className="label">Posted:</span>
        {formatDate(createDate)}
      </div>

      <div>
        <span className="label">Edited:</span>
        {formatDate(updateDate)}
      </div>

      <div>
        <span className="label">By:</span>
        {authorName}
      </div>
    </div>
  );
}

export default AboutRecipeInfo;
