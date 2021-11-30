import React from "react";

export default function Picker() {
  const headPic = ["Dog", "Duck", "Horse", "Bird"];
  const middlePic = ["Blue", "Fancy", "Red", "Pink"];
  const bottomPic = ["Blue Jeans", "White Pants", "Single Leg"];
  return (
    <div>
      <label>
        Head
        <select value={head}></select>
      </label>
    </div>
  );
}
