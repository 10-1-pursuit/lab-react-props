export default function RecentDonations({donations}) {
  return (
    <section>
      <h2>Recent Donations</h2>

      <ul>
        {donations.map(({ id, amount, name, caption }) => {
          return (
            <li key={id}>
            <span>
              {name} donated ${amount}
            </span>
            {caption}.
          </li>
          )
        })}
        
      </ul>
    </section>
  );
}
