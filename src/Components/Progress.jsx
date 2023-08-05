import React from "react";


{/* <Progress targetAmountFromApp={targetAmount} donations={donations} /> */}

export default function Progress({targetAmountFromApp}) {
  
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${335}</span> of
    <span className="secondary">{targetAmountFromApp}</span>
  </h2>
</section>
  );
}
