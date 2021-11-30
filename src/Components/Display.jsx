import React from "react";

export default function Display({ catchphrase }) {
  return (
    <div>
      {catchphrase.map((catchphase) => (
        <p>{catchphase}</p>
      ))}
    </div>
  );
}
