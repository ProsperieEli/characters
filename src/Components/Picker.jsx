import React from "react";

export default function Picker({
  head,
  middle,
  bottom,
  onHeadChange,
  onMiddleChange,
  onBottomChange,
  NewatchPhrase,
  setCatchphrase,
  handleClick,
}) {
  const headPic = ["Dog", "Duck", "Horse", "Bird"];
  const middlePic = ["Blue", "Fancy", "Red", "Pink"];
  const bottomPic = ["Blue Jeans", "White Pants", "Single Leg"];
  return (
    <div>
      <label>
        Head
        <select
          value={headPic}
          onChange={(e) => onHeadChange(e.target.value)}
        ></select>
      </label>
    </div>
  );
}
