import {donations} from '../App.jsx'

export default function RecentDonations(props) {

  console.log()
  return (
    <section>
   <span> <h2>Recent Donations</h2></span>

   <ul>
    <li><span>{donations[0].name} donated ${donations[0].amount}</span>{donations[0].caption}</li>
    <li><span> {donations[1].name} donated ${donations[1].amount}</span>{donations[1].caption}</li>
    <li><span> {donations[2].name} donated ${donations[2].amount}</span>{donations[2].caption}</li>
    <li><span> {donations[3].name} donated ${donations[3].amount}</span>{donations[3].caption}</li>
    <li><span> {donations[4].name} donated ${donations[4].amount}</span>{donations[4].caption}</li>
  </ul>
   </section>
  )
}
