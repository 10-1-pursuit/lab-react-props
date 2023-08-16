
export default function RecentDonations (props){
  // console.log(props.donationsFromApp[0].name)
  return (
    <>
    <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{props.donationsFromApp[0].name} donated ${props.donationsFromApp[0].amount}</span>{props.donationsFromApp[0].caption}</li>
    <li><span>{props.donationsFromApp[1].name} donated ${props.donationsFromApp[1].amount}</span>{props.donationsFromApp[1].caption}</li>
    <li><span>{props.donationsFromApp[2].name} donated ${props.donationsFromApp[2].amount}</span>{props.donationsFromApp[2].caption}</li>
    <li><span>{props.donationsFromApp[3].name} donated ${props.donationsFromApp[3].amount}</span>{props.donationsFromApp[3].caption}</li>
    <li><span>{props.donationsFromApp[4].name} donated ${props.donationsFromApp[4].amount}</span>{props.donationsFromApp[4].caption}</li>

  </ul>
</section>
    </>
  )
};


