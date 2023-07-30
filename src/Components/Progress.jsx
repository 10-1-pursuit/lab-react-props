// I tried to pass {numbersFromDonations} as a prop, but it wouldn't work. Not sure why here it is undefined when I console.log() it.
// I am going to submit as it is since everything else is working per the README.MD file.
// Will come back to this and be sure to ask about it when class resumes Monday morning.

 function Progress({targetAmountFromReading}, {numbersFromDonations}) {
  // console.log({numbersFromDonations})
  return (
    <section className="progress">
  <h2>
    {/* Raised <span className="secondary">${numbersFromDonations}</span> of */}
    <span className="secondary"> ${targetAmountFromReading}</span>
  </h2>
</section>
  )
}

export default Progress;