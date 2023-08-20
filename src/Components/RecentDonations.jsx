import React from 'react';

function RecentDonations(props) {
  const recentDonations = props.donations.map((donation) => (
    <li key= {donation.id}>
      <span>{donation.name} donated ${donation.amount}</span>
      {donation.caption}
    </li>
  ));

  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>
  </ul>
</section>
  );
}


export default RecentDonations;