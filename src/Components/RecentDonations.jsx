// export default function RecentDonations() {
  
//   return (
//     <>
//     <h2> TEMP - RecentDonations</h2>
//     </>
//   );
// }



const RecentDonations =( props )=> {
  console.log("RecentDonations props", props)
  
  return (
    <>
    <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>Jo donated $250</span>You really need this. Really.</li>
    <li><span>Rami donated $30</span>Here, take a break from work!</li>
    <li><span>Michelle donated $20</span>LOL! You are too funny. Happy to do this for you. :)</li>
    <li><span>Malinda donated $5</span>"Have fun!"</li>
    <li><span>Sam donated $30</span>Come visit me in Miami!</li>
    
  </ul>
</section>
    </>
  );
}

export default RecentDonations

