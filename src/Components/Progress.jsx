export default function Progress({targetAmount, donations}) {
  let moneyRaised = donations.reduce((moneyTotal, { amount }) => {
    return moneyTotal += amount
  }, 0)
  
  return (
    
      <section className="progress">
        <h2>
          Raised <span className="secondary">${moneyRaised}</span> of {``}
          <span className="secondary">${targetAmount}</span>
        </h2>
      </section>
  
  );
}
