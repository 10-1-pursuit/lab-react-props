 
 
 function Progress({targetAmountFromReading}, {numbersFromDonations}) {
  // console.log({numbersFromDonations})
  return (
    <section className="progress">
  <h2>Raised <span className="secondary">${numbersFromDonations}</span> of
    <span className="secondary"> ${targetAmountFromReading}</span>
  </h2>
</section>
  )
}

export default Progress;