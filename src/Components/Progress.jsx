import { targetAmount, donations } from "../App.jsx"

export default function Progress() {
  return (
    <>
      <section className="progress">
        <h2>
          Raised <span className="secondary"> ${donations.map(donation => donation.amount).reduce((a, b) => a + b, 0)}
          </span> of
          <span className="secondary"> ${targetAmount} </span>
        </h2>
      </section>
    </>
  )
}
