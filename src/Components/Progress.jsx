export default function Progress({ targetAmount, donations }) {
  const money = donations.reduce((total, { amount })=> {
    return total += amount
  }, 0);
  return (
    <section className="progress">
       <h2>
         Raised <span className="secondary">${money}</span> of
         <span className="secondary"> ${targetAmount}</span>
       </h2>
    </section>
  );
}
