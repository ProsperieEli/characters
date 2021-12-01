import React from "react";

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <article
          className="head"
          aria-label="head"
          style={{
            backgroundImage: `url(./${head}-head.png)`,
            height: 150,
            width: 150,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></article>

        <article
          className="middle"
          style={{
            backgroundImage: `url(./${middle}-middle.png)`,
            height: 150,
            width: 150,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></article>
        <article
          className="bottom"
          style={{
            backgroundImage: `url(./${bottom}-bottom.png)`,
            height: 150,
            width: 150,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></article>
      </section>
    </div>
  );
}
