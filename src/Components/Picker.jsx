import React from "react";

export default function Picker({
  head,
  middle,
  bottom,
  onHeadChange,
  onMiddleChange,
  onBottomChange,
  newCatchPhrase,
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
        <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
          {headPic.map((heads) => (
            <option key={heads}>{heads}</option>
          ))}
        </select>
      </label>
      <label>
        middle
        <select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>
          {middlePic.map((middles) => (
            <option key={middles}>{middles}</option>
          ))}
        </select>
      </label>
      <label>
        bottom
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
          {bottomPic.map((bottoms) => (
            <option key={bottoms}>{bottoms}</option>
          ))}
        </select>
      </label>
      <label>
        New Catchphase
        <input
          type="text"
          value={newCatchPhrase}
          onChange={(e) => setCatchphrase(e.target.value)}
        />
      </label>

      <button type="button" onClick={handleClick}>
        Add Catchphrase!
      </button>
    </div>
  );
}
