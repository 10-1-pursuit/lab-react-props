import React from "react";

function Progress({ targetAmount, allDonations }) {

  return (
    <section className='progress'>
      <h2>
        Raised <span className="secondary">${allDonations}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}
export default Progress;