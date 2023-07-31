import '../App.jsx'

export default function RecentDonations(props) {

  console.log()
  return (
    <section>
   <span> <h2>Recent Donations</h2></span>

   <ul>
    <li><span>{props.name} donated ${props.amount}</span>{props.caption}</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>
   
  </ul>
   </section>
  )
}
