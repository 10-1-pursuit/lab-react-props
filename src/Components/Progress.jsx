const Progress = ({ amountOfDonations, targetAmount, nextDonationUp }) => {
  return (
    <>
      <h2>
        Raised <span className="secondary">${amountOfDonations}</span> of
        <span className="secondary"> ${targetAmount}</span>
        <div className="progress"><h3>You could be donation<span className="secondary"> #{nextDonationUp}!</span></h3></div>
      </h2>
    </>
  )
}
export default Progress;
