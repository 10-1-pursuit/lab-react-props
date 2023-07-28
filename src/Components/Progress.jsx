import React from "react";

const Progress = ({ donations, targetAmount }) => {
  let totalDonatedAmount = 0;
  donations.forEach(donation => totalDonatedAmount += donation.amount);
  return (
    <section className="progress">
      <h2>Raised <span className="secondary">${totalDonatedAmount}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;