import { donations } from "../App.jsx";

export default function RecentDonations() {
  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li><span>Jo donated $25</span>You really need this. Really.</li>
          <li><span>Rami donated $10</span>Here, take a break from work!</li>
          <li><span>{donations[2].name} donated ${donations[2].amount}</span>{donations[2].caption}</li>
          <li><span>{donations[3].name} donated ${donations[3].amount}</span>{donations[3].caption}</li>
          <li><span>{donations[4].name} donated ${donations[4].amount}</span>{donations[4].caption}</li>
          {/* <!-- etc... --> */}
        </ul>
      </section>
    </>
  );
}
