import React from 'react';

function Progess () {

  const totalRaised = props.donations.reduce((total, donations) => total + donations.amount, 0);

  return (
<section className="progress">
  <h2>
    Raised <span className="secondary">$(totalRaised)</span> of
    <span className="secondary">{props.targetAmount}</span>
  </h2>
</section>
  );
}

export default Progess;