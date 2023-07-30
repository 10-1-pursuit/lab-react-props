function RecentDonations({donationsFromRecent}) {
  // function donationSum(){
  //   let sum = 0
  //   for (let donationsAmount of donationsFromRecent)
  //   sum += donationsAmount.amount
  //   console.log(sum)
  // }
  // donationSum(donationsFromRecent)


  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{donationsFromRecent[0].name} donated ${donationsFromRecent[0].amount}</span>{donationsFromRecent[0].caption}</li>
    <li><span>{donationsFromRecent[1].name} donated ${donationsFromRecent[1].amount}</span>{donationsFromRecent[1].caption}</li>
    <li><span>{donationsFromRecent[2].name} donated ${donationsFromRecent[2].amount}</span>{donationsFromRecent[2].caption}</li>
    <li><span>{donationsFromRecent[3].name} donated ${donationsFromRecent[3].amount}</span>{donationsFromRecent[3].caption}</li>
    <li><span>{donationsFromRecent[4].name} donated ${donationsFromRecent[4].amount}</span>{donationsFromRecent[4].caption}</li>
  </ul>
</section>
  );
}

export default RecentDonations;
